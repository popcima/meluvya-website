import { ArrowLeft, ArrowRight } from "lucide-react";
import { assetPath } from "@/lib/assets";
import { blogPagePath, paginationItems } from "@/lib/blog";

export function BlogPagination({ page, totalPages }: { page: number; totalPages: number }) {
  if (totalPages <= 1) return null;

  return <nav className="journal-pagination" aria-label="Blog pages">
    {page > 1
      ? <a className="journal-page-step" href={assetPath(blogPagePath(page - 1))} rel="prev"><ArrowLeft size={16} aria-hidden="true" />Previous</a>
      : <span className="journal-page-step" aria-disabled="true"><ArrowLeft size={16} aria-hidden="true" />Previous</span>}
    <ol>{paginationItems(page, totalPages).map((item, index) => <li key={`${item}-${index}`}>
      {item === "gap" ? <span className="journal-page-gap" aria-hidden="true">…</span> : item === page
        ? <span className="journal-page-number" aria-current="page" aria-label={`Page ${item}`}>{item}</span>
        : <a className="journal-page-number" href={assetPath(blogPagePath(item))} aria-label={`Page ${item}`}>{item}</a>}
    </li>)}</ol>
    {page < totalPages
      ? <a className="journal-page-step" href={assetPath(blogPagePath(page + 1))} rel="next">Next<ArrowRight size={16} aria-hidden="true" /></a>
      : <span className="journal-page-step" aria-disabled="true">Next<ArrowRight size={16} aria-hidden="true" /></span>}
  </nav>;
}
