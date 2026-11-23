# Evidence and editorial decision — November 23, 2026

- Target: existing `google-photos-free-up-space-vs-delete` guide. Keep its October 25 publication date; a substantive revision uses November 23.
- The 117-intent keyword plan and existing library already cover device/cloud cleanup, backup failure, phone downloads and recovery. Undo backup belongs in the existing comparison, not a new URL. No eligible unpublished queue entries remain.
- Free research established documentation relevance, not demand. Search volume, organic difficulty, query geography and reporting period remain unknown. No fresh authenticated Search Console data was available; the November 17 record remains historical.
- Primary sources were checked November 23. Google deletion documentation for iPhone and Android explicitly scopes Undo backup to items currently on the device, preserves device copies, includes Locked Folder, removes album/shared-album/search/memory presence, turns backup off on that device and warns about future uploads.
- The new section identifies the operation and its consequences; it does not claim to have performed deletion or a recovery test. It directs readers to the full primary instructions before confirming. Its separate-copy/open-files advice is editorial guidance.
- The Backup-off FAQ distinguishes a setting from Google's separate deletion procedures. It does not promise that re-enabling backup preserves a particular copy.
- Google cleanup documentation supports the existing same-item Recently Deleted step on iPhone and the loss of offline/Apple Photos access after local removal.
- Google backup documentation supports the existing account, shared-storage and per-item status checks.
- Apple 108782 supports synchronized deletion and Optimize Storage. The Google-cleanup/iCloud interaction remains explicitly identified as a cross-service inference.
- Initial web retrieval of Apple 108782 returned 429. Search returned the official page; the bounded direct HEAD and GET subsequently returned 200. Google HEAD returned 404 but each GET returned 200. See `source-links.json`; no login, CAPTCHA or rate-limit bypass was used.
- The original Michael Burrows photo and its responsive derivatives remain. The caption labels it illustrative. The Pexels credit URL returns 403 and is the sole exact exception; historical licensing/acquisition evidence remains in `publishing/image-sources.json`.
- No template, schema implementation, store behavior, domain, verification record or dependency file is changed. Contextual links use the field introduced November 22.
- Scope check: 116 other article objects and all 117 original publication dates unchanged. Zero new articles, so the daily ceiling is unaffected.
- Source allocation is kept concise: the new Google deletion material is limited to the scope/path paragraphs and short Backup-off comparison, alongside existing brief deletion statements. The rest provides original decision-making guidance and references distinct primary documentation.
- Validation runs use the existing content, lint, export, SEO and typecheck scripts. The original dependency reads stalled; an isolated clean clone uses the unchanged lockfile. The managed worktree request did not return a result before termination; Git reported no created worktree.
