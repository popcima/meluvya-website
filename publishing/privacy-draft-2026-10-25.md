# Privacy policy draft — October 25, 2026

## Owner instruction

Add a privacy policy to meluvya.com. When asked for the public privacy/deletion email, operator and country, the owner instructed: “leave it blank for now.” The page therefore explicitly identifies itself as a draft, renders those fields blank, and does not claim to be a final or effective privacy notice. Do not invent a contact address or operator identity.

## Implementation

- `/privacy/`, with the existing header/footer, dark styling, accessible section navigation and canonical metadata.
- Privacy policy link in the shared footer and route in the sitemap.
- No native app or backend modifications; public store buttons retain coming-soon behavior.

## Evidence

Reviewed the website source and current app documentation on October 25, 2026:

- `Desktop/muse ai photo/cloud/README.md`: device-based guest access; Cloudflare D1, private R2 and queue; Google Gemini provider; source cleanup after processing with asynchronous one-day source lifecycle backstop; results retained until deletion; minimal job tombstones; legacy Supabase migration/admin access.
- `Desktop/muse ai photo/docs/SUBSCRIPTIONS.md`: Apple transaction verification, wallet/credit records, separate restoration of purchases and private photo collection, local editor operations, production billing not yet enabled.
- Website source: GitHub Pages static export; no photo-upload form; coming-soon store dialog; no advertising pixel, analytics cookie or visitor-tracking integration identified in site components.
- Google Search Console setup is existing project context, not an embedded website tracking script.

Several native/backend source files are iCloud dataless placeholders and did not hydrate during read attempts. The app statements are explicitly documented workflow descriptions, not a new verification of deployed runtime behavior.

Primary public references:
- https://developer.apple.com/app-store/review/guidelines/#privacy
- https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/individual-rights/the-right-to-be-informed/what-privacy-information-should-we-provide/
- https://ai.google.dev/gemini-api/terms
- https://www.cloudflare.com/privacypolicy/
- https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement

## Required before treating the page as final

1. Fill the operator identity, jurisdiction and functioning privacy/deletion contact.
2. Verify active Gemini billing/data-use configuration and disclose its precise retention/training treatment; do not infer no-training or zero-retention from the product name.
3. Confirm retention periods or criteria for remaining job records, guest identities, purchase/credit records, support information, provider logs and backups.
4. Confirm applicable legal bases, international-transfer safeguards, rights-request process and any regional obligations with appropriate privacy/legal review.
5. Confirm age eligibility and controls against Gemini API terms; this draft does not certify age verification.
6. Verify app upload consent, in-app policy access and App Store privacy disclosures match the final notice before public release.

The webpage makes these unfinished areas visible instead of promising unverified protections. It does not certify compliance or App Store acceptance.

## Validation

- Lint, production static export and TypeScript checks passed with Node 24 and `SITE_URL=https://meluvya.com`, empty deployment base path.
- Export and SEO foundation checks passed: 109 sitemap URLs, all existing 97 articles retained, privacy footer link present on every exported route.
- Privacy canonical and social metadata verified; section anchors resolve; no invented email or mailto link.
- Desktop and 390px mobile layout checked, including section navigation, three visibly blank contact fields, screen-reader labels and wrapping footer. No horizontal page overflow.
- Several original Git objects were unavailable from iCloud. Publication uses a clean temporary checkout at the verified starting commit e61d5d0, with only these five source/documentation files copied across.
