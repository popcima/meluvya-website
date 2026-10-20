import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
import { archivePages, blogPagePath, getBlogPage } from "@/lib/blog";
import { absoluteUrl, contentDate } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: absoluteUrl("/"), lastModified: contentDate },
    ...[1, ...archivePages()].map((page) => ({ url: absoluteUrl(blogPagePath(page)), lastModified: getBlogPage(page).entries.reduce((latest, article) => article.modified > latest ? article.modified : latest, contentDate) })),
    ...articles.map((article) => ({ url: absoluteUrl(`/blog/${article.slug}/`), lastModified: article.modified })),
  ];
}
