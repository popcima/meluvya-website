import type { Metadata } from "next";

/** Public canonical root, without a trailing slash. */
export const siteUrl = (process.env.SITE_URL?.trim() || "https://meluvya.com").replace(/\/+$/, "");
export const siteName = "Meluvya";
export const homeDescription = "Make your photos your own with Meluvya. Explore AI photo effects, portrait templates, and editing tools to create a whole new mood.";
export const contentDate = "2026-10-19";

export function absoluteUrl(path = "/") {
  return `${siteUrl}/${path.replace(/^\/+/, "")}`;
}

export function pageMetadata({ title, description, path = "/", image = "golden_hour_after.jpg", article }: { title: string; description: string; path?: string; image?: string; article?: { published: string; modified: string } }): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(`/img/${image}`);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title, description, url, siteName, type: article ? "article" : "website",
      images: [{ url: imageUrl, alt: title }],
      ...(article ? { publishedTime: article.published, modifiedTime: article.modified, authors: [absoluteUrl("/")] } : {}),
    },
    twitter: { card: "summary_large_image", title, description, images: [imageUrl] },
  };
}

export function jsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
