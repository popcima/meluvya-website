import { articles } from "@/lib/articles";

const topics = [
{
  "id": "camera-techniques",
  "title": "Camera controls and capture",
  "description": "Choose the right capture mode, focus point and moment before you edit.",
  "slugs": [
    "apple-watch-camera-remote-photos",
    "photograph-fireworks-with-phone",

    "jewelry-photos-with-phone",
    "photograph-artwork-with-phone",
    "food-photos-with-phone",
    "pet-photos-with-phone",
    "flat-lay-phone-photography",
    "product-photos-white-background",
    "photos-through-window-without-reflections",
    "iphone-camera-grid-level",
    "silhouette-photos-with-phone",
    "water-reflection-photos-with-phone",

    "iphone-ae-af-lock",
    "change-live-photo-key-photo",
    "iphone-burst-photos-select-best-frame",
    "iphone-macro-close-up-focus",
    "iphone-photographic-styles-vs-filters",
    "iphone-live-photo-long-exposure",
    "phone-panorama-stitching-tips"
  ]
},
{
  "id": "photo-workflows",
  "title": "Sharing, printing and preserving photos",
  "description": "Prepare files for their destination and understand what each transfer or backup keeps.",
  "slugs": [
    "google-photos-free-up-space-vs-delete",
    "icloud-photos-not-syncing",

      "photos-upload-sideways-or-upside-down",
    "visual-look-up-iphone-photos",
    "control-featured-photos-iphone",
    "iphone-photo-albums-vs-folders",
    "copy-text-from-iphone-photo",
    "icloud-shared-albums-photo-quality",
    "share-live-photo-as-still-or-motion",

    "merge-duplicate-iphone-photos",
    "change-photo-date-time-iphone",
    "google-photos-archive-vs-locked-folder",
    "recover-deleted-iphone-photos",
    "raw-vs-jpeg-phone-photography",
    "photo-print-size-pixels-ppi",
    "resize-vs-compress-photos-for-upload",
    "srgb-vs-display-p3-photo-export",
    "google-photos-original-vs-storage-saver",
    "icloud-photos-sync-vs-backup",
    "airdrop-photos-original-data"
  ]
},
{
  "id": "creative-workflows",
  "title": "Practical fixes and creative techniques",
  "description": "Scan a print, correct a distraction or make a deliberate photographic effect.",
  "slugs": [
    "add-text-arrows-iphone-photo",
    "fix-banding-in-sky-gradients",
    "reduce-moire-in-clothing-photos",
    "remove-chromatic-aberration-photo-fringes",
    "lens-distortion-vs-perspective",
    "remove-small-background-distractions",

    "iphone-photo-cutout-background",
    "scan-printed-photos-with-phone",
    "clean-phone-camera-lens",
    "remove-red-eye-from-photos",
    "fix-perspective-in-phone-photos",
    "intentional-motion-blur-photography",
    "selective-color-photo-effect"
  ]
},
  {
    "id": "lighting",
    "title": "Light and exposure",
    "description": "Start here if a face is too dark, highlights are washed out, or indoor colors look wrong.",
    "slugs": [
    "snow-photos-gray-or-blue",

      "stripes-in-photos-under-led-lights",
      "fix-mixed-lighting-in-portraits",
      "direct-flash-portrait-tips",
      "portrait-photos-in-harsh-sunlight",
      "cloudy-day-portrait-photo-tips",
      "backlit-phone-portraits",
      "brighten-dark-face-in-photo",
      "can-you-fix-overexposed-portraits",
      "remove-color-cast-from-photos",
      "window-light-portraits-at-home",
      "why-night-phone-photos-are-blurry",
      "reduce-glasses-glare-in-portraits",
      "read-histogram-for-portraits"
    ]
  },
  {
    "id": "portraits",
    "title": "Taking better portraits",
    "description": "Work on framing, camera distance, backgrounds and timing before changing the edit.",
    "slugs": [
    "group-photos-everyone-sharp",

      "why-close-selfies-look-different",
      "choose-portrait-background",
      "mirror-selfie-photo-tips",
      "take-couple-photos-with-phone",
      "how-to-crop-portrait-photos",
      "self-timer-portraits-with-phone",
      "edit-portrait-focus-depth-iphone",
    "portrait-mode-blur-mistakes",
      "why-iphone-selfies-flip"
    ]
  },
  {
    "id": "effects",
    "title": "Photo effects and AI portraits",
    "description": "Choose a look, understand what it changes, and check that the result still makes sense.",
    "slugs": [
    "tone-curves-vs-contrast",
    "texture-clarity-dehaze-differences",
    "color-grading-vs-white-balance",
    "subtle-vignette-photo-editing",
    "local-masking-vs-global-photo-edits",

      "black-and-white-portrait-editing",
      "why-edited-portraits-look-unnatural",
      "photo-noise-vs-film-grain",
      "vibrance-vs-saturation-portraits",
      "copy-paste-photo-edits-iphone",
    "consistent-editing-for-photo-set",
      "check-ai-portrait-details",
      "golden-hour-photo-editing",
      "digicam-photo-effect-on-phone",
      "vintage-photo-effects-guide",
      "choose-photo-for-ai-portraits",
      "ai-photo-effects-vs-filters"
    ]
  },
  {
    "id": "files",
    "title": "Quality, files and privacy",
    "description": "Understand formats, preserve your originals, and check what travels with a shared photo.",
    "slugs": [
    "hide-lock-iphone-photos",
    "limit-app-photo-library-access-iphone",

      "photo-sharpening-vs-resolution",
      "why-saved-photos-lose-quality",
      "jpeg-heic-png-photo-formats",
      "edit-photos-without-losing-original",
      "hdr-phone-photos-explained",
      "why-photos-look-different-on-screens",
      "remove-location-from-iphone-photos"
    ]
  }
] as const;

export function guideTopics() {
  const grouped = topics.map((topic) => ({ ...topic, entries: topic.slugs.map((slug) => articles.find((article) => article.slug === slug)).filter((article) => article !== undefined) }));
  const mapped = new Set<string>(topics.flatMap((topic) => [...topic.slugs]));
  const remaining = articles.filter((article) => !mapped.has(article.slug));
  return remaining.length ? [...grouped, { id: "more", title: "More photo guides", description: "Explore the latest additions to the library.", slugs: remaining.map((article) => article.slug), entries: remaining }] : grouped;
}
