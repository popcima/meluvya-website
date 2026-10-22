# Independent editorial review: file and export guides

Reviewed on 2026-10-22 by the camera-guides reviewer, independently of the files-guide writer.

Scope: all seven drafts in `files.json`, their source and decision records in `files-research.json`, and the existing 38-article library in `existing.json`. This is an editorial and evidence review, not a deployment or device-test report.

**Decision: approve all seven articles for the batch. No blocking editorial corrections found.** Image integration, template output, internal-link resolution and production checks remain the publishing agent's responsibility.

## Evidence checks

| Draft | Consequential checks and editorial finding |
|---|---|
| `raw-vs-jpeg-phone-photography` | Adobe supports the exposure and white-balance editing latitude described. Apple's ProRAW documentation supports DNG compatibility, the combination of RAW information and Apple processing, and different rendering in software without ProRAW support. The article correctly avoids promising recovery of all highlights, missing focus or detail. It expressly leaves Meluvya RAW support unverified. The controlled comparison is proposed reader guidance, not a fabricated test. |
| `photo-print-size-pixels-ppi` | Independently checked the PPI formula, four print-size table rows, inch-to-centimeter conversion and crop arithmetic. A 4000 × 3000 image cropped to 3750 × 3000 gives 5:4 and supports a 10 × 8 inch print at 375 PPI. Adobe confirms that changing print resolution without resampling does not add pixels. The article presents 300 PPI as a planning example and defers to printer and viewing requirements. |
| `resize-vs-compress-photos-for-upload` | Adobe confirms the distinction between resampling and changing print-size metadata, and the JPEG quality/file-size tradeoff. Halving each image dimension quarters the pixel count; the draft correctly avoids claiming the same byte reduction. The fictional upload form is clearly labeled as an example. Readers get a usable order of operations rather than a universal quality-percentage claim. |
| `srgb-vs-display-p3-photo-export` | Adobe confirms the important difference between Assign Profile and Convert to Profile, and recommends sRGB for general online workflows. Apple's Display P3 material supports the wider-gamut and correctly tagged asset explanations. The 2017 source is used for color principles, not present-day device support. The article correctly separates gamut from HDR and says conversion does not recover colors already discarded. |
| `google-photos-original-vs-storage-saver` | Google's current documentation confirms Original quality, Storage saver compression, the greater-than-16-MP and greater-than-1080p thresholds, and exceptions for files that cannot be compressed. It distinguishes converting existing backups from changing future backup quality. Google's Android guide confirms More → About → Details for item status; the draft identifies the platform and acknowledges interface changes. The historical storage-accounting exception is bounded rather than presented as free current storage. |
| `icloud-photos-sync-vs-backup` | Apple's documentation confirms that iCloud Photos edits/deletions synchronize, that the library is not duplicated in the daily iCloud device backup, and that Optimize Storage uses space-saving device versions with originals in iCloud. The export path and Files destination caution match Apple guidance. The draft requires a verified separate copy before deletion, treats Recently Deleted as a limited recovery window, and does not recommend deleting the source to test a backup. |
| `airdrop-photos-original-data` | Apple's current Photos guide supports All Photos Data for the original, edit history and metadata, Current to prevent format conversion, and Most Compatible for conversion where appropriate. Apple's AirDrop and ProRAW articles support the setup and rendering caveats. The article bounds the workflow to compatible Apple destinations, distinguishes preservation of data from universal application editability, and identifies its current iOS guide/version basis. Metadata review and the inability to recall an already transferred recipient copy are relevant limitations. |

Primary sources independently opened or searched during this review:

- [Adobe: benefits of RAW photography](https://www.adobe.com/learn/lightroom-classic/web/raw-photography)
- [Apple: Apple ProRAW](https://support.apple.com/en-us/119916)
- [Adobe: image size, resolution and resampling](https://helpx.adobe.com/photoshop/desktop/crop-resize-transform/resize-adjust-resolution/image-size-resolution-and-resampling.html)
- [Adobe: printed image resolution](https://helpx.adobe.com/photoshop/desktop/crop-resize-transform/resize-adjust-resolution/printed-image-resolution.html)
- [Adobe: JPEG quality and compression](https://helpx.adobe.com/photoshop/desktop/save-and-export/save-files/save-in-jpeg-format.html)
- [Adobe: changing a document's color profile](https://helpx.adobe.com/photoshop/desktop/adjust-color/color-profiles/change-a-documents-color-profile.html)
- [Adobe: online color management](https://helpx.adobe.com/photoshop/desktop/adjust-color/color-profiles/manage-documents-colors-for-online-viewing.html)
- [Apple: Get Started with Display P3, WWDC17](https://developer.apple.com/videos/play/wwdc2017/821/)
- [Google Photos: choosing backup quality](https://support.google.com/photos/answer/6220791?hl=en)
- [Google Photos: Android backup and item status](https://support.google.com/photos/answer/6193313?co=GENIE.Platform%3DAndroid&oco=1)
- [Apple: iCloud Photos](https://support.apple.com/en-us/108782)
- [Apple: what iCloud backs up](https://support.apple.com/en-us/108770)
- [Apple: downloading iCloud photos and videos](https://support.apple.com/en-us/111762)
- [Apple: sharing photos and videos on iPhone](https://support.apple.com/guide/iphone/share-photos-and-videos-iphf28f17237/ios)
- [Apple: using AirDrop](https://support.apple.com/en-us/119857)

## Overlap and usefulness

The seven articles address distinct decisions. The RAW guide concerns capture/editing latitude, while the existing `jpeg-heic-png-photo-formats` guide compares delivery formats. The print guide adds physical output calculations beyond `photo-sharpening-vs-resolution`. The resize/compress guide solves a rejected upload and adds a constrained workflow beyond the existing saved-quality diagnosis. The color-export guide gives an export decision and profile-operation distinction beyond `why-photos-look-different-on-screens`.

The Google Photos, iCloud and AirDrop guides each address different product operations and risks: backup-quality conversion, synchronized deletion versus an independent copy, and a deliberate original-data transfer. They are not interchangeable versions of a generic photo-quality article. The existing `edit-photos-without-losing-original` and photo-location guide touch some related concerns but do not supply these complete workflows. Related links are appropriate bridges to those guides.

Each draft supplies more than a definition: a specific procedure, decision table or calculation, realistic examples, and limitations. No invented experience, test result, search-volume estimate, ranking promise or new Meluvya feature was found. No numeric editorial score is assigned.

## Review limits and nonblocking maintenance note

This review verifies source consistency and editorial usefulness. It does not establish keyword demand, monthly volume, low competition or likely rankings. No hardware transfer, cloud deletion, printer proof or application export was performed. The reader exercises are clearly written as proposed checks.

Apple's unversioned iPhone User Guide URL can change its default version. The AirDrop draft already identifies the current guide and tells readers to select their installed version; retain that caveat during publication and recheck the interface on future updates. This is a maintenance consideration, not a publication blocker.
