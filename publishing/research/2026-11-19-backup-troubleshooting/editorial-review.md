## Quality Review: Google Photos not backing up? Start with these checks

### Overall Score: 93/100 - Exceptional

| Category | Score | Max | Notes |
|----------|-------|-----|-------|
| Content Quality | 28 | 30 | Useful account-first troubleshooting, concrete comparisons and preservation advice. Verification section renders follow-up advice before the checks; synthesis is useful but not tested original research. |
| SEO Optimization | 23 | 25 | Accurate title, description, canonical and hierarchy. Three relevant related guides are linked, but contextual mentions within the instructions are not clickable. |
| E-E-A-T Signals | 13 | 15 | Accountable Organization attribution, editorial-policy link, AI-assistance disclosure and four primary Google sources. Citations require a trip to the source list; the reviewed article provides no direct contact route. |
| Technical Elements | 14 | 15 | Static HTML, BlogPosting and BreadcrumbList, optimized eager hero, responsive layouts and social metadata. Social image is portrait rather than a prepared landscape card. Category scaled as explained below. |
| AI Citation Readiness | 15 | 15 | Clear answer, focused intent, identifiable entities, extractable status/action lists and accessible static content. |

### Rating: Exceptional

N/A items: Person schema component (1 point): the project explicitly uses genuine Organization attribution, and no individual author identity is supplied. Technical Elements scaled from 13/14 applicable points to 14/15. This is not a recommendation to invent a Person. Speed is assessed from static loading signals, without claiming measured LCP.

### Review Evidence

- Independently verified all three SHA-256 values against the supplied binding:
  - `src/lib/articles.ts`: `d5681f262b694012b602a2a8d613233273cbe05d0e5b01a9bf16be584839b6d9`
  - `out/blog/google-photos-not-backing-up/index.html`: `02be563b5ea47a6c0e30d9077f1bda582fe83b0759b470205cda3bf65ca4cbd8`
  - `public/img/blog/pexels-29065464-4k.webp`: `9c93ea7277a92806988e8db0994aac0114f797467312ec2148b4aa1ff2131126`
- Reviewed the TypeScript article, rendered HTML, local hero, supplied research records and completed browser/export/content/SEO records.
- Visually inspected hero and CTA screenshots at 390, 768 and 1280 pixels, plus the mobile status-check list. No clipped text or horizontal layout defect was visible. The fixed navigation overlays passing body text in the scrolled screenshot, but leaves the current heading and status list readable.
- Browser evidence reports image decoding, both store-button dialogs, Escape dismissal and focus restoration passing at all three widths, with no recorded errors.
- The article includes one illustrative editorial photograph, five substantive troubleshooting sections, two FAQ questions, four primary-source links and three related-guide links. It contains no chart or table; neither is necessary for these sequential checks.
- Source records document successful GET responses for the four Google Help documents. I did not independently access the network. The recorded Pexels 403 is the disclosed exception for an existing local licensed asset.
- No unsupported load-bearing claim was identified against the supplied source evidence. The article does not claim device testing, measured demand, rankings, fixed upload timing or independent corroboration from four tests.
- The canonical is `https://meluvya.com/blog/google-photos-not-backing-up/`. Primary content is present in static HTML, no `noindex` is present, and exported robots policy allows crawling.
- “App downloads are coming soon” is visible beside the store buttons, and the rendered dialog also states coming soon.

### Editorial Style Diagnostics

- Sentence-length variation: 0.417, calculated as population standard deviation divided by mean sentence length.
- Configured style phrases: 0 occurrences of the reviewer’s listed stock phrases identified in the article body.
- Vocabulary diversity sample: 0.432, using 878 alphabetic word tokens from the quick answer, section paragraphs/list items and FAQ text; excludes navigation, headings, source notes and promotional copy.
- Top three sentence openings account for 19 of 73 mechanically segmented sentences, or 26.0%. “Google” is the most frequent opener, largely because the article attributes product behavior explicitly. This is an advisory repetition observation.
- These observations do not infer authorship and do not affect the score.

### Issues Found

#### Critical (must fix before publishing)

- None.

#### High (should fix)

- None.

#### Medium (recommended)

- **Verification order:** In `src/lib/articles.ts:117`, “Once the upload is confirmed…” appears after the list in the data object, but the rendered `#verify-result` section places this paragraph before the numbered checks. Move that follow-up advice after the verification steps, or into a separate follow-up section, so the visible order matches the reader’s task.
- **Contextual link usability:** The storage section references the cleanup guide, and `src/lib/articles.ts:117` references the quality and download guides, without clickable inline anchors. The actual links appear later under “Keep exploring.” Link these mentions directly when the content renderer supports it.

#### Low (nice to have)

- **Source navigation:** The four annotated sources are sufficient to trace the principal claims, but links or source jump anchors beside the account, file-limit and permission instructions would reduce reader effort.
- **Social preview:** The metadata uses the 2560 × 3840 portrait master. Prepare a dedicated 1200 × 630 social crop and descriptive social-image alt text; retain the existing portrait hero.
- **Contact discoverability:** Add a clear editorial contact or corrections route near the editorial-policy disclosure, using a real existing contact destination.

### Prioritized Fix List

1. Put verification steps before post-verification follow-up advice.
2. Make the three contextual related-guide mentions directly clickable.
3. Improve source navigation, then prepare a dedicated social preview and expose a corrections/contact route.

zero P0 issues found

Nonce: 9eb29e354674ae1633d22a30551245ec
BLOCKING: false (cleared all gates; 93/100 overall, no P0)
