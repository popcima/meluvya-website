export const looks = [
  { image: "golden_hour_after.jpg", name: "Golden hour" },
  { image: "flash_dark_after.jpg", name: "Night flash" },
  { image: "vintage_after.jpg", name: "Vintage photobooth" },
  { image: "red_flash_after.jpg", name: "Red flash" },
  { image: "y2k_digicam_after.jpg", name: "Y2K digicam" },
  { image: "stardust_after.jpg", name: "Stardust" },
  { image: "canon_g7x_after.jpg", name: "Digicam" },
  { image: "flash_daylight_after.jpg", name: "Day flash" },
  { image: "macbook_after.jpg", name: "Webcam aesthetic" },
  { image: "warm_vintage_after.jpg", name: "Lumicam" },
  { image: "canon_pro_after.jpg", name: "Powershot flash" },
] as const;

export const questions = [
  { question: "How do I create a new look?", answer: "Explore the effects and portrait templates, pick a look you like, and add your photo. When you’re ready, choose Create to make it yours." },
  { question: "Can I use a photo from my camera roll?", answer: "Yes. Choose a photo already on your phone, then pair it with a look from the gallery." },
  { question: "What’s the difference between effects and templates?", answer: "Effects give your photo a different light and mood. Portrait templates offer a new scene or setting to explore." },
  { question: "Can I edit my photos too?", answer: "Yes. Open the Editor to work on your photo with Meluvya’s built-in editing tools." },
  { question: "Where can I find my results?", answer: "Your generated portraits appear in My photos, where you can find your creations and save or share your favorites." },
  { question: "What happens when I choose Create?", answer: "Choosing a photo doesn’t upload it. Create sends it to Meluvya and Google Gemini to generate your look. The source photo is deleted after processing." },
] as const;
