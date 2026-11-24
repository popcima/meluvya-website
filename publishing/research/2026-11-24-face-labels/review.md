## Quality Review: How to fix wrong face labels in Google Photos

### Overall Score: 92/100 - Exceptional

| Category | Score | Max | Notes |
|----------|-------|-----|-------|
| Content Quality | 27 | 30 | Clear correction workflow, useful decision table and verification steps. Minor gaps concern a mislabeled whole group and the placement of the hypothetical example. |
| SEO Optimization | 25 | 25 | Accurate title, description and canonical; consistent intent; descriptive navigation; three contextual internal links and three primary documentation sources. |
| E-E-A-T Signals | 12 | 15 | Accountable organization attribution and AI disclosure. Sources support the material claims, but citations are collected at the end and the existing site lacks supplied operator/contact details. |
| Technical Elements | 14 | 15 | Static content, appropriate organization authorship, BlogPosting and BreadcrumbList schema, responsive imagery and browser evidence. Social-image presentation could be more deliberate. |
| AI Citation Readiness | 14 | 15 | Answer-first structure, explicit entities, useful table and ordered steps. Section-level source links would improve independent verification of extracted passages. |

### Rating: Exceptional

N/A items: none. All five categories retain their fixed maxima. Page-speed points reflect available static signals, not a measured LCP result.

Applied the installed Meluvya adaptation: the existing TypeScript/Next export is the deliverable. Organization authorship is appropriate; no fictional person, biography, credential, test result or Person schema is required. No Markdown/PDF conversion, word-count padding or fabricated metrics is warranted.

### Scope and evidence

Reviewed the new article in `/private/tmp/meluvya-nov24-publish/src/lib/articles.ts`, its standalone `article.json`, and its actual exported HTML. The JSON exactly matches the new TypeScript article object.

Reviewed the five original Google Photos text captures, the dated public research records, `browser-local.json`, `preservation.json`, `static-inspection.json`, and both requested mobile screenshots. This was an independent read-only review of supplied evidence; no files were changed and no network requests were made.

The article’s schema reports 743 words. The article has five substantive sections, two FAQ entries, one table with three body rows, two ordered lists, three contextual internal links and three source entries. The rendered page contains one substantive illustrative photograph and three app/brand icon images. There are no charts, quantitative performance claims or claimed device-test results.

### Factual-support check

- **Photo correction:** Android capture `source-0.txt`, lines 226–257, supports the photo information panel, **People & pets**, **More**, **Select other face group**, **Done**, and **Remove from this photo**. The corresponding iOS instructions in `source-3.txt` support the same workflow.
- **Broader updates:** Both platform captures explicitly state that changing a face label using **Select other face group** may update other photographs of that person. The article preserves that conditional meaning.
- **Retained photograph:** Both platform captures distinguish removing an item from a group from deleting it from the Google Photos library. The article does not promise that unrelated deletion operations preserve the photograph.
- **Me label:** `source-1.txt` and `source-4.txt` support the profile/settings/privacy route, the **Face labeled as "Me"** control, and changing or removing the self-label. Android’s source says **Photos settings**, whereas the article uses **Google Photos settings** for both platforms. This is a minor wording refinement, not a materially different route.
- **Grouping switch:** `source-2.txt` directly supports removal of face groups, face models and labels when Face Groups is turned off.
- **Availability:** The platform documentation supports geographic and account limitations. The article does not imply universal availability.
- **Original guidance:** Choosing a recognizable reference, checking retained photographs and inspecting nearby frames are presented as editorial suggestions. The siblings example is explicitly hypothetical.

No critical source/capture mismatch, unsupported load-bearing claim or apparent plagiarism risk was found. The supplied link record reports successful GET responses for all five Google documentation URLs; their unsuccessful HEAD responses are not evidence that those sources are unavailable. The stock-credit URL’s recorded 403 remains an existing asset-credit limitation, not evidence supporting a technical claim.

### Intent, date and preservation check

Compared the new topic with all 117 existing article titles and the keyword plan. Correcting mistaken Google Photos face assignments and the self-label is a distinct task. Existing guides address backup, recovery, downloads, storage, archiving, sharing and other workflows; the iPhone search guide concerns Apple Photos. Grouping the related face-label keyword variants into this one URL is appropriate.

Publication and modification metadata both use November 24, 2026, matching the supplied current date. The visible page presents the publication date without claiming a subsequent substantive update. The preservation evidence records unchanged dates and prose for all 117 previous articles, with one incoming related-link addition.

Search volume and difficulty remain unknown in the research record. This review establishes no ranking, indexing, traffic or demand outcome.

### Rendered page and app CTA check

The exported page contains the primary article text without requiring script execution. Its heading hierarchy is coherent, its canonical uses `https://meluvya.com`, and its robots file permits access. BlogPosting and BreadcrumbList metadata agree with the article and its organization attribution.

The hero uses WebP, eager loading and high fetch priority. The mobile hero screenshot shows readable text, a suitable image crop and an explicit illustrative-stock caption. The full verification-section screenshot shows readable ordered steps and the contextual link without clipping.

Supplied browser results cover widths of 320, 390, 768 and 1280 pixels. They record decoded images, no page-level overflow or browser errors, and a keyboard-focusable horizontally scrollable table with an overflow hint on narrow screens.

The shared promotion states that app downloads are coming soon. Supplied interaction checks cover both dialogs, Escape dismissal and focus restoration. The article does not claim that Meluvya repairs Google Photos face groups.

### Editorial Style Diagnostics

- Sentence-length variation: **0.376**, calculated as population standard deviation divided by mean sentence length.
- Vocabulary diversity sample: **0.477**, using 599 word tokens from the quick answer, section prose, list content and FAQ answers.
- Configured stock style phrases: **0** found in the article prose.
- Short instructions and longer explanations provide suitable pacing. The repeated verification language is relevant, although the hypothetical siblings example would fit more naturally beside reference-photo selection.
- These observations do not infer authorship and do not affect the score.

### Editorial Heuristics

| # | Heuristic | Score | Severity | Note |
|---|-----------|-------|----------|------|
| 1 | Visibility of intent | 4 | None | Title, quick answer and reading-time display establish the task. |
| 2 | Heading and section match | 3 | P3 | The siblings exercise is less directly connected to the missing-controls heading. |
| 3 | Reader control and exit | 4 | None | Working navigation structure and clear related tasks. |
| 4 | Voice and standards consistency | 3 | P3 | Minor platform-specific settings-label precision remains. |
| 5 | Fabricated-stat prevention | 4 | None | Material behavior claims match primary captures; no invented measurements. |
| 6 | Recognition over recall | 4 | None | Decision table and recognizable reference-photo method reduce ambiguity. |
| 7 | Skimmer and deep-reader flexibility | 4 | None | Direct headings, quick answer and ordered actions support both modes. |
| 8 | Information-density discipline | 3 | P3 | Minor repetition in verification advice; no substantial padding. |
| 9 | Failure recovery | 3 | P3 | Useful limitations; a whole-group naming error lacks its own correction route. |
| 10 | Sources and related documentation | 3 | P2 | Strong primary references and related guides; existing contact details remain absent. |

### Issues Found

#### Critical — must fix before publishing

- None.

#### High — should fix

- None.

#### Medium — recommended

- **Existing publisher contact gap:** The linked privacy page explicitly states that operator and contact details have not been supplied. Add a genuine contact route when the owner supplies it. Do not invent one. This is a site-level trust limitation, not a new article-specific blocker.
- **Source proximity:** In `correct-one-photo`, `check-me`, and the grouping-switch paragraph, link the applicable Google source beside the supported instruction when the content model permits it. The existing annotated source list supports verification, so this is optional improvement.

#### Low — nice to have

- In `check-me`, use **Photos settings** for Android and **Google Photos settings** for iPhone to mirror the captures exactly.
- The `identify-the-mismatch` table mentions a whole group being mislabeled. A brief sourced distinction between changing a group’s name and correcting membership would complete that branch.
- Move the hypothetical siblings example from `missing-controls` into the reference-photo or verification section.
- Consider a dedicated social-preview crop rather than relying on the full stock photograph for sharing cards.

### Prioritized Fix List

1. No mandatory prepublication corrections.
2. For a future refinement, make the Android settings label exact and add the group-name distinction.
3. Add section-level citations and genuine publisher contact information when available.
4. Treat example placement and social-preview cropping as optional polish.

zero P0 issues found

Nonce: 8cfdbc1f01f9aa4d8ef2b57f17b400a9
BLOCKING: false (cleared the editorial delivery gate; 92/100 overall, no P0)
