# Daily editorial publishing

Publish useful English photo guides for a worldwide audience. The owner approved **up to 30 quality-checked new articles per day**, not a minimum quota. Publish fewer, including zero, when research or editorial quality is insufficient. Do not create separate pages for synonyms that answer the same question. Rankings and indexing cannot be guaranteed.

## Current access and product facts

- No paid SEO subscription is connected. On 2026-10-19, Semrush required authentication; the Supermetrics Google Trends query failed because its trial expired; the public Ahrefs generator required human verification. Those attempts returned no metrics. Do not repeatedly retry those blocked services without new access.
- On 2026-10-20, the public SEMScoop tool returned two broad seed datasets (all countries; photo editing in all languages, portrait photography in English), then reached its anonymous daily limit. Exploding Topics failed reCAPTCHA. Stop at access limits. See `research/2026-10-20-keyword-evidence/metrics.json`; the seed estimates do not establish volume or organic difficulty for article-specific queries, which remain unknown.
- Free web research can establish relevant questions and verify facts. Search results alone do not establish search volume. Google Trends scores are relative interest, not monthly searches. Mark missing metrics `null` with an explanation, never zero or a made-up estimate.
- The native app shows Effects, Templates, Create, Editor, and My photos. Do not claim specific editing controls, speed, prices, free credits, no-account usage, privacy guarantees, or supported devices without verified product evidence.
- Store URLs are not supplied. Every article uses the shared `ArticleDownloadCTA` and its honest coming-soon dialog. Keep both existing store button labels; replace their behavior only when the owner provides real links.
- The owner selected `meluvya.com` on 2026-10-20. The canonical root is `https://meluvya.com` with an empty deployment base path. Search Console remains deferred. Do not buy services, create paid accounts, or submit verification tokens.

## Run the daily batch

1. Work in the Meluvya website repository only. Inspect Git status and the remote. On a clean `main`, fetch and fast-forward if needed. Preserve unrelated user work; if it overlaps, stop that publication instead of resetting, stashing, or force-pushing it.
2. Determine today's date in `Africa/Casablanca`. Inspect existing articles and `publishing/keyword-plan.json`. Count all articles with today's `published` date, including earlier runs; remaining capacity is `30 - count`. Never backdate to bypass the cap. Capture the starting commit for the pre-publish comparison.
3. Research candidate questions using available free sources. Treat the keyword plan as hypotheses, not verified demand. Check what readers need, what results already answer, and what original explanation, example, comparison, or troubleshooting this article can add. Prefer primary sources for technical claims. Do not bypass login, CAPTCHA, or rate limits.
4. Record evidence in a dated JSON file under `publishing/research/`: query, search intent, source URLs, access date, geography, provider, and available metrics. Each numeric metric needs its own name, value, units, location/database, period, and retrieval date. Distinguish organic difficulty from advertising competition and country volume from global volume. Unknown volume does not prevent a useful guide, but must remain unknown.
5. Group related keywords by intent. Improve an existing page when it already answers the question. Choose a new descriptive slug only for a distinct need. Do not target every spelling, device, or country with repeated prose. Do not write invented product comparisons or claim hands-on tests that did not happen.
6. Draft original articles in `src/lib/articles.ts`. Each needs a direct answer, actionable explanation, limitations/troubleshooting, relevant internal links, accurate image alt text, and sources supporting factual claims. Use only existing licensed/owned assets or newly authorized original assets. Keep illustrative images labelled. Do not copy source paragraphs or competitor outlines. Do not pad to a word count.
7. Review each article against its reader's question and all existing articles. Check every product claim, citation, date, conclusion, and possible duplicate intent. Record an honest editorial decision and its reasons in the research record; this is AI editorial review, not human approval. Defer weak or repetitive articles. Maintain the existing AI-assistance disclosure.
8. Set the actual first-publication date explicitly on each new article. The historical shared `date` constant belongs to the original five articles; never reuse it for new articles. Change `modified` only for substantive content changes, not a template rebuild. Keep related links valid and update the keyword plan with the final URL.
9. Run the checks below and inspect representative exported article pages on desktop and mobile. Confirm the shared app promotion appears in every new article and both store buttons open the dialog with Escape/focus restoration. Check images, headings, tables, citations, related links, metadata, canonicals, schema, pagination, and sitemap. A passing script checks structure, not editorial quality.
10. Commit only this batch's content, research, and any necessary small fixes. Push normally to `main`, let the existing GitHub Pages workflow build, and verify successful deployment plus live new URLs. Do not publish a failing build or overwrite remote changes. If interrupted after a push, inspect its commit and deployment before retrying; reuse the same articles rather than generating duplicates.

## Validation

Use Node 20.9 or later (the current desktop runtime is available at `/Users/hassanamehry/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin`). From the repository:

```sh
node scripts/check-content.mjs --base <starting-commit>
npm run lint
SITE_URL=https://meluvya.com NEXT_PUBLIC_BASE_PATH= npm run build
npm run typecheck
python3 scripts/check-export.py
```

`check-content.mjs` verifies dates and a maximum of 30 articles per publication date, unique slugs/titles, required content/source fields, section anchors, related links, and exact duplicate body paragraphs. With `--base`, it additionally rejects backdated new articles and changes to existing first-publication dates. It does not prove uniqueness of ideas, factual accuracy, or search demand. Complete the editorial review separately.

The blog automatically shows 12 guides per archive page. Keep `/blog/` as page 1; pagination and sitemap generation use the article collection. Build with the current canonical/base-path configuration; change both only during a deliberate domain migration.

## Scheduling and measurement

The daily recurring task lives in the Codex desktop app, attached to the existing chat. The website and GitHub Pages do not generate articles themselves. The desktop computer must be on, Codex running, and this repository plus GitHub access available. Runs use the account's available Codex usage; exhaustion or access failures can prevent publishing. A daily schedule does not guarantee 30 articles.

Record meaningful new publications and failures in the chat. Do not send emails, social posts, or unsolicited outreach. When the owner supplies a domain and enables Search Console later, use impressions, query positions, clicks, and CTR to revise priorities. Until then, do not claim ranking improvements or traffic outcomes.

## Reference policies

- [Google SEO starter guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide): useful content, discoverability, query variants, and no guaranteed first position.
- [Google scaled-content policy](https://developers.google.com/search/docs/essentials/spam-policies#scaled-content): volume without added value can be spam; there is no numeric daily publishing limit in this policy.
- [Google Trends data](https://support.google.com/trends/answer/4365533?hl=en): relative normalized interest is not absolute volume.
- [Desktop scheduled tasks](https://learn.chatgpt.com/docs/automations?surface=app): local tasks need the computer and app running.
