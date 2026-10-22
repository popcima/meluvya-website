# Independent editorial review: camera batch

Date: 2026-10-22 (Africa/Casablanca)
Reviewer: independent AI editorial review of the seven camera drafts; not a human approval, device test or search-engine score.

Decision: six drafts approved for the parent publication checks. The Photographic Styles comparison needs one small reader-facing clarification before publication. No other blocking accuracy or overlap issue was found.

## Required clarification

**[P2] Explain why the Filters control may be absent in the Styles comparison.**

File: camera.json, article `iphone-photographic-styles-vs-filters`, sections `difference` / `editing-later`.

The comparison repeatedly says filters are available “where supported,” but does not give the specific condition in its cited Apple guide. This matters to a reader following the promise to compare a Style with a filter: on the described newer phones they may not see both controls. Apple's iOS 26 edit guide explicitly says that on iPhone 16 models or later, filter effects are available if Photographic Styles have not been turned on.

Add a concise sentence near the comparison: “Apple’s iOS 26 guide notes that, on iPhone 16 models or later, filters are available if Photographic Styles have not been turned on. If Filters is missing, check that condition before assuming the editor is broken.” Keep the existing device/image/version caveats. This does not require creating another article.

Evidence: [Apple: Edit photos and videos, Apply filter effects](https://support.apple.com/guide/iphone/edit-photos-and-videos-iphb08064d57/26/ios/26), retrieved 2026-10-22.

## Article findings

| Article | Decision | Evidence and editorial finding |
|---|---|---|
| iphone-ae-af-lock | Approve | Touch-hold, tap-to-unlock, preserved exposure adjustment, and Camera Control release behavior agree with the cited iOS 26 primary instructions. The mug exercise is a proposal, not a reported test. It adds operational/reset distinctions not covered by the existing backlight or timer guides. |
| change-live-photo-key-photo | Approve | Key-frame selection and the iPhone 15-or-later portrait-effect caveat match Apple. It makes no unsupported pixel-resolution promise. Selecting from a recorded Live Photo is distinct from Burst capture and from general file preservation. |
| iphone-burst-photos-select-best-frame | Approve | Shutter swipe, release, frame-count selector, gray suggestions and volume-up option match Apple's iOS 26 Burst guide. It correctly separates frame rate from shutter duration and does not promise sharpness. The selection passes add practical value beyond the interface instructions. |
| iphone-macro-close-up-focus | Approve | Ultra Wide switching, the supported-model limitation, two-centimeter capability, 0.5x/back-up advice and preservation setting match Apple. Nikon supports the flat-subject/depth-of-field explanation; the draft explicitly avoids transferring camera aperture settings to iPhone. Distinct from close-selfie perspective and digital sharpening. |
| iphone-photographic-styles-vs-filters | Clarify as above | High Efficiency, the explicitly dated iOS 26 model list and eligible post-capture Styles controls are supported. No claim that arbitrary imported JPEGs acquire editable Styles data. Add the documented condition for filter visibility so the comparison can be followed. |
| iphone-live-photo-long-exposure | Approve | Apple explicitly describes Long Exposure as simulated motion blur and documents ProRAW/HEIF Max incompatibility with Live Photos. The third-party effect-loss caveat is supported. Its device-specific conversion workflow differs from the broader intentional-panning guide in this batch. |
| phone-panorama-stitching-tips | Approve | Pano guide-line, opposite-direction and vertical instructions agree with Apple. Adobe's Camera Raw team supports the fixed-position/parallax explanation. The draft does not claim the desktop merging tools exist on a phone. Seam checks and a shorter-sweep exercise add an actionable selection method. |

## Checks performed

- Read all seven complete article objects and their evidence records in camera-research.json.
- Compared their intended tasks with the 38-article existing.json library, including the nearby focus, timer, night-blur, generic effect, crop and preservation content. No duplicate reader task requiring consolidation was found. No exact body-paragraph reuse with the existing library was found by a direct comparison.
- Independently reopened the principal Apple sources and inspected the relevant passages for touchscreen AE/AF, Camera Control lock release, Live Photo key selection and portrait effects, Burst controls, macro switching, Styles compatibility/format, Live Photo capture restrictions, and Pano controls.
- Independently checked Nikon's close-up depth-of-field paragraph and Adobe's sharp-photo, motion-blur and panorama explanations.
- Titles, answers and suggested exercises do not depend on the as-yet-unassigned stock image being a screenshot, demonstration or test result.
- No fabricated search-volume numbers, ranking promises, first-hand measurements, expert credentials or Meluvya feature claims were found. Missing metrics are recorded as unknown.
- Related-link targets from this same batch must be validated after collection integration; this review does not claim exported URLs already exist.

## Optional polishing

In the Styles article, replace “This guide has not tested every model…” with “This guidance is based on the linked documentation; it is not a hands-on comparison of devices or sharing routes.” The present wording is not an explicit fabricated testing claim, but the suggested replacement removes possible ambiguity.

The Live Photo Long Exposure and general motion-blur guides can link to one another once integrated. Keep their current boundaries: the former explains Apple's specific effect, while the latter covers intentional camera/subject movement.

## Remaining publication checks

Images, licensing, alt text and illustrative captions were not assigned in camera.json and are outside this review. The parent must still validate the final rendered pages, metadata, dates, related links, topic mapping, shared app/store CTA, export, mobile behavior and successful deployment. This approval does not measure search demand, indexing, traffic or ranking.
