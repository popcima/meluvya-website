# Applied SEO and editorial workflow

The owner requested installation and application of claude-seo, geo-seo-claude, marketingskills and claude-blog on 2026-10-22. Their pinned revisions are in seo-skills.json. Codex-compatible bundles are installed under ~/.codex/skills/<bundle>/ with complete upstream sources. Read the applicable SKILL.md and references when needed; do not load every skill for every article.

## Select the useful checks

- claude-seo: technical crawlability, canonical consistency, rendered HTML, sitemap, schema and responsive assets.
- geo-seo-claude: concise answers, evidence that can be traced to sources, and AI-search crawler access. Its scores are local heuristics, not search-engine measurements.
- marketingskills: reader intent, product context, topic navigation, internal links and honest conversion copy.
- claude-blog: source verification, overlap review, accurate titles and descriptions, dates and editorial disclosure.

Use publishing/README.md as the project-specific publishing contract. Retain the 30/day ceiling, actual dates, source-supported facts, unique intent, coming-soon store dialog, AI-assistance disclosure and validation commands. These suites do not supply search-volume data or a ranking guarantee.

## Before new content

1. Consult keyword-plan.json and all current articles. Update an existing guide when it already answers the question. Record the distinct reader need and evidence before adding a URL.
2. Use actual Search Console queries, clicks, impressions, CTR and positions when available, with the period and property recorded. Missing data stays unknown. Third-party heuristic scores and advertising competition are not organic difficulty.
3. Map each new guide to a topic in src/lib/guide-topics.ts. The directory has a fallback for unmapped new guides so every article remains discoverable. Keep existing URLs stable.
4. Name factual sources and explain important limitations. Do not manufacture statistics, personal experience, authors, expert review, screenshots, product results or quotes to satisfy a skill rubric.

## Validate before publishing

Run the full README checks, plus `python3 scripts/check-seo-foundations.py` after the production export. Inspect raw HTML and the browser, including mobile. Confirm visible dates agree with schema, author/editorial links resolve, every article is linked in the topic directory, and no article promotion was removed. Record what was checked and what was not measured.

## Corrections to upstream advice

- GPTBot concerns training; OAI-SearchBot concerns ChatGPT Search. The GEO crawler skill conflates them. Do not change training preferences as a purported search requirement. Official source: https://developers.openai.com/api/docs/bots .
- Google AI Overviews and AI Mode use normal SEO foundations. No special AI markup or llms.txt is required: https://developers.google.com/search/docs/appearance/ai-features . An llms.txt file is not a ranking fix.
- Generic word-count, link-count, title-length and keyword-density thresholds are heuristics, not Google requirements. Write to satisfy the task, not an arbitrary score.
- Raw exported HTML can prove the presence of server-rendered JSON-LD. A fetch that omits scripts cannot prove absence of client-injected markup. Check the actual HTML and browser.
- Do not add Person, reviews, ratings, SoftwareApplication offers, credentials or social profiles without real visible evidence. Organization authorship is appropriate for this publisher.
- Do not install optional MCP services, invoke paid APIs, run upstream shell installers/hooks or modify credentials just to use a checklist. Runtime integrations require their own available access and inspected dependencies.

## Remaining priorities

Obtain actual store links before measuring downloads; CTA clicks currently represent interest only. Use Search Console trends over a meaningful period before changing priorities. Seek original, documented photography examples and genuine product demonstrations for stronger evidence. No backlink outreach, social posting, account signup, purchases or tracking scripts are authorized by this workflow.
