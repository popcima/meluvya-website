import { notFound } from "next/navigation";
import { BlogArticle } from "@/components/BlogArticle";
import { BlogIndex } from "@/components/BlogIndex";
import { articles, getArticle } from "@/lib/articles";
import { archivePages, blogPageMetadata, getBlogPage } from "@/lib/blog";
import { pageMetadata } from "@/lib/site";

type Props = { params: Promise<{ slug: string[] }> };
export const dynamicParams = false;

// One route covers articles and archives, so a small library never needs an
// empty generateStaticParams result or a placeholder archive for static export.
export function generateStaticParams() {
  return [
    ...articles.map(({ slug }) => ({ slug: [slug] })),
    ...archivePages().map((page) => ({ slug: ["page", String(page)] })),
  ];
}

function resolveRoute(slug: string[]) {
  if (slug.length === 1) {
    const article = getArticle(slug[0]);
    if (article) return { article };
  }
  if (slug.length === 2 && slug[0] === "page" && /^[1-9]\d*$/.test(slug[1])) {
    const page = Number(slug[1]);
    if (page >= 2 && page <= getBlogPage(1).totalPages) return { page };
  }
  notFound();
}

export async function generateMetadata({ params }: Props) {
  const route = resolveRoute((await params).slug);
  if (route.article) {
    const article = route.article;
    return pageMetadata({ title: `${article.title} | Meluvya`, description: article.description, path: `/blog/${article.slug}/`, image: article.image, article });
  }
  return blogPageMetadata(route.page);
}

export default async function BlogContentPage({ params }: Props) {
  const route = resolveRoute((await params).slug);
  return route.article ? <BlogArticle article={route.article} /> : <BlogIndex page={route.page} />;
}
