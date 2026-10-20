import { readFile } from "node:fs/promises";
import { execFileSync } from "node:child_process";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const articlePath = "src/lib/articles.ts";
const normalize = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
const filled = (value) => typeof value === "string" && value.trim().length > 0;
const validDate = (value) => typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value)
  && !Number.isNaN(Date.parse(value)) && new Date(value).toISOString().slice(0, 10) === value;

// This is trusted, repository-owned content, not downloaded or user-submitted code.
export async function loadArticles(source) {
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
  });
  const articleModule = await import(`data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`);
  if (!Array.isArray(articleModule.articles) || !articleModule.articles.length) throw new Error("No articles exported");
  return articleModule.articles;
}

export function validateArticles(articles, today, baseline = null) {
  const errors = [];
  const slugs = new Set();
  const titles = new Set();
  const dailyCounts = new Map();
  const paragraphs = new Map();
  for (const article of articles) {
    const label = article.slug || "<missing slug>";
    for (const field of ["slug", "title", "description", "summary", "quickAnswer", "image", "imageAlt", "caption"]) {
      if (!filled(article[field])) errors.push(`${label}: missing ${field}`);
    }
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(article.slug) || article.slug === "page") errors.push(`${label}: invalid/reserved slug`);
    if (slugs.has(article.slug)) errors.push(`${label}: duplicate slug`);
    slugs.add(article.slug);
    const title = normalize(article.title || "");
    if (titles.has(title)) errors.push(`${label}: duplicate title`);
    titles.add(title);
    for (const field of ["published", "modified"]) {
      if (!validDate(article[field]) || article[field] > today) errors.push(`${label}: invalid or future ${field}`);
    }
    if (article.modified < article.published) errors.push(`${label}: modified precedes publication`);
    dailyCounts.set(article.published, (dailyCounts.get(article.published) || 0) + 1);
    const ids = new Set();
    if (!Array.isArray(article.sections) || !article.sections.length) errors.push(`${label}: no sections`);
    for (const section of article.sections || []) {
      if (!filled(section.title) || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(section.id) || ids.has(section.id)) errors.push(`${label}: invalid/duplicate section anchor`);
      ids.add(section.id);
      const body = [
        ...(section.paragraphs || []),
        ...(section.list?.items || []).map((item) => item.text),
        ...(section.table?.rows || []).flat(),
      ];
      if (!body.length || body.some((text) => !filled(text))) errors.push(`${label}/${section.id}: empty body content`);
      if (section.table && section.table.rows.some((row) => row.length !== section.table.headers.length)) errors.push(`${label}/${section.id}: inconsistent table columns`);
      for (const text of section.paragraphs || []) {
        const key = normalize(text);
        if (key.length < 100) continue;
        if (paragraphs.has(key)) errors.push(`${label}: repeated body paragraph also in ${paragraphs.get(key)}`);
        paragraphs.set(key, label);
      }
    }
    if (!Array.isArray(article.sources) || !article.sources.length) errors.push(`${label}: no sources`);
    for (const source of article.sources || []) {
      let url;
      try { url = new URL(source.url); } catch { /* Report below. */ }
      if (!filled(source.title) || !filled(source.note) || url?.protocol !== "https:") errors.push(`${label}: invalid source`);
    }
  }
  for (const article of articles) {
    for (const related of article.related || []) {
      if (related === article.slug || !slugs.has(related)) errors.push(`${article.slug}: invalid related link ${related}`);
    }
  }
  for (const [date, count] of dailyCounts) {
    if (count > 30) errors.push(`${date}: ${count} articles exceeds the daily maximum of 30`);
  }
  if (baseline) {
    const previous = new Map(baseline.map((article) => [article.slug, article]));
    for (const article of articles) {
      const old = previous.get(article.slug);
      if (!old && article.published !== today) errors.push(`${article.slug}: new articles must use today's publication date (${today})`);
      if (old && old.published !== article.published) errors.push(`${article.slug}: first-publication date changed`);
    }
    for (const old of baseline) if (!slugs.has(old.slug)) errors.push(`${old.slug}: existing article removed from publishing batch`);
  }
  return { errors, total: articles.length, publishedToday: dailyCounts.get(today) || 0 };
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    const args = process.argv.slice(2);
    if (args.length && (args.length !== 2 || args[0] !== "--base" || args[1].startsWith("-"))) throw new Error("Usage: node scripts/check-content.mjs [--base <starting-commit>]");
    const today = new Intl.DateTimeFormat("en-CA", { timeZone: "Africa/Casablanca", year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date());
    const articles = await loadArticles(await readFile(resolve(root, articlePath), "utf8"));
    const baseline = args.length ? await loadArticles(execFileSync("git", ["show", `${args[1]}:${articlePath}`], { cwd: root, encoding: "utf8", maxBuffer: 20 * 1024 * 1024 })) : null;
    const result = validateArticles(articles, today, baseline);
    if (result.errors.length) throw new Error(result.errors.join("\n"));
    console.log(JSON.stringify({ result: "PASS", date: today, timezone: "Africa/Casablanca", totalArticles: result.total, publishedToday: result.publishedToday, remainingDailyCapacity: 30 - result.publishedToday, baselineChecked: Boolean(baseline), note: "Structural validation only; editorial review and demand research are separate." }, null, 2));
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
