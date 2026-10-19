import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
import { absoluteUrl, contentDate } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: absoluteUrl("/"), lastModified: contentDate },
    { url: absoluteUrl("/blog/"), lastModified: contentDate },
    ...articles.map((article) => ({ url: absoluteUrl(`/blog/${article.slug}/`), lastModified: article.modified })),
  ];
}
