import { articles } from "@/lib/articles";

const topics = [
  {
    "id": "lighting",
    "title": "Light and exposure",
    "description": "Start here if a face is too dark, highlights are washed out, or indoor colors look wrong.",
    "slugs": [
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
      "why-close-selfies-look-different",
      "choose-portrait-background",
      "mirror-selfie-photo-tips",
      "take-couple-photos-with-phone",
      "how-to-crop-portrait-photos",
      "self-timer-portraits-with-phone",
      "portrait-mode-blur-mistakes",
      "why-iphone-selfies-flip"
    ]
  },
  {
    "id": "effects",
    "title": "Photo effects and AI portraits",
    "description": "Choose a look, understand what it changes, and check that the result still makes sense.",
    "slugs": [
      "black-and-white-portrait-editing",
      "why-edited-portraits-look-unnatural",
      "photo-noise-vs-film-grain",
      "vibrance-vs-saturation-portraits",
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
