# Reviewed article queue

The owner requested 30 additional articles on October 23, 2026 and explicitly chose to publish 23 that day and queue 7, preserving the 30-per-day ceiling after 7 earlier publications.

`index.json` lists the pending drafts in priority order. Each draft is a complete Article-shaped JSON object with `published` and `modified` set to `null`. Preparation and review dates are recorded separately. Drafts are not imported into the website, linked from public pages or included in the sitemap.

For the next eligible daily publishing run:

1. Check current Git state, remote deployment and the existing article slugs. Reconcile any already-published queue item rather than adding it again.
2. Count today's published articles in the Africa/Casablanca timezone. Select no more queued drafts than the remaining capacity. Never publish before an entry's `notBefore` date.
3. Recheck source facts, product/version limits, related links, image credits and overlap with any articles added since preparation. The saved review is evidence of preparation, not a waiver of current checks.
4. Set `published` and `modified` to the actual publication date only when adding the article to `src/lib/articles.ts`. Add its topic mapping and update the keyword plan. Retain the shared app promotion and coming-soon store behavior.
5. Run every publishing check in the main README against the starting commit, including the production export and mobile review. Do not change the daily-limit validator or assign a false date to make a draft pass.
6. Mark selected entries `included_in_publication_commit`, with their actual publication date, in the same commit as the article. Keep the draft as a historical preparation record. After pushing, verify Actions and live pages; on a retry, use the actual repository/deployment state before making any further commit.

The existing daily heartbeat reads the main publishing README and processes this queue. GitHub Pages itself does not execute the queue. A scheduled run still requires the desktop app, repository and GitHub access to be available. Publication and Google indexing are not guaranteed by a queue entry.
