import { articles, type Article } from "@/lib/articles";
import { pageMetadata } from "@/lib/site";

export const BLOG_PAGE_SIZE = 12;

export function blogPagePath(page: number) {
  return page === 1 ? "/blog/" : `/blog/page/${page}/`;
}

export function getBlogPage(page: number, source: readonly Article[] = articles) {
  const totalPages = Math.max(1, Math.ceil(source.length / BLOG_PAGE_SIZE));
  return { entries: source.slice((page - 1) * BLOG_PAGE_SIZE, page * BLOG_PAGE_SIZE), totalPages };
}

export function archivePages(source: readonly Article[] = articles) {
  const { totalPages } = getBlogPage(1, source);
  return Array.from({ length: totalPages - 1 }, (_, index) => index + 2);
}

/** Keep archive links compact even after hundreds of guides are published. */
export function paginationItems(page: number, totalPages: number): (number | "gap")[] {
  const visible = new Set([1, totalPages, page - 1, page, page + 1]);
  const pages = [...visible].filter((value) => value >= 1 && value <= totalPages).sort((a, b) => a - b);
  const items: (number | "gap")[] = [];
  pages.forEach((value, index) => {
    const previous = pages[index - 1];
    if (previous && value - previous === 2) items.push(previous + 1);
    else if (previous && value - previous > 2) items.push("gap");
    items.push(value);
  });
  return items;
}

export function blogPageMetadata(page: number) {
  return pageMetadata({
    title: page === 1 ? "Photo editing guides | Meluvya" : `Photo editing guides — Page ${page} | Meluvya`,
    description: page === 1
      ? "Practical guides to golden-hour edits, digicam looks, vintage effects and AI portraits. Learn what to change, what to keep, and how to judge a result."
      : `Browse page ${page} of Meluvya’s photo editing guides. Explore practical advice on photo effects, portrait choices, and thoughtful edits.`,
    path: blogPagePath(page),
  });
}
