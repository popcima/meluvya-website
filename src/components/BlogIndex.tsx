import { guideTopics } from "@/lib/guide-topics";
import { BlogImage } from "@/components/BlogImage";
import { ArrowUpRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { readingMinutes } from "@/lib/articles";
import { getBlogPage, blogPagePath } from "@/lib/blog";
import { BlogPagination } from "@/components/BlogPagination";
import { assetPath } from "@/lib/assets";
import { absoluteUrl, jsonLd } from "@/lib/site";

export function BlogIndex({ page = 1 }: { page?: number }) {
  const { entries, totalPages } = getBlogPage(page);
  const featured = page === 1 ? entries[0] : undefined;
  const more = featured ? entries.slice(1) : entries;
  const breadcrumbs = [{ "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") }, { "@type": "ListItem", position: 2, name: "Blog", item: absoluteUrl("/blog/") }, ...(page > 1 ? [{ "@type": "ListItem", position: 3, name: `Page ${page}`, item: absoluteUrl(blogPagePath(page)) }] : [])];
  return <>
    <a className="skip" href="#main">Skip to content</a>
    <Header subPage blogActive />
    <main id="main" className="journal-index">
      <div className="wrap">
        <header className="journal-heading">
          <nav className="breadcrumbs" aria-label="Breadcrumb"><a href={assetPath("/")}>Home</a><span aria-hidden="true">/</span>{page === 1 ? <span aria-current="page">Blog</span> : <><a href={assetPath("/blog/")}>Blog</a><span aria-hidden="true">/</span><span aria-current="page">Page {page}</span></>}</nav>
          <h1>Photo editing<br /><span>guides.</span></h1>
          {page === 1 ? <p>Find the look you want. Understand what changes.<br />Practical ideas for more considered photos.</p> : <p>Page {page} of {totalPages}.<br />More practical ideas for more considered photos.</p>}
        <a className="text-link" href={assetPath("/blog/#by-topic")}>Browse by topic <ArrowUpRight size={17} aria-hidden="true" /></a>
        </header>
        {featured && <a className="journal-feature" href={assetPath(`/blog/${featured.slug}/`)}>
          <div className="journal-feature-image"><BlogImage article={featured} sizes="(min-width: 900px) 480px, (min-width: 640px) 45vw, 100vw" eager /></div>
          <div className="journal-feature-copy"><p className="reading-time">{readingMinutes(featured)} min read</p><h2>{featured.title}</h2><p>{featured.summary}</p><span className="journal-read">Read the guide <ArrowUpRight size={19} aria-hidden="true" /></span></div>
        </a>}
        <div className="journal-grid">
          {more.map((article) => <article className="journal-card" key={article.slug}>
            <a href={assetPath(`/blog/${article.slug}/`)}>
              <div className="journal-card-image"><BlogImage article={article} sizes="(min-width: 900px) 170px, (min-width: 640px) 160px, 112px" /></div>
              <div><p className="reading-time">{readingMinutes(article)} min read</p><h2>{article.title}</h2><p className="journal-card-description">{article.summary}</p><span className="journal-card-arrow" aria-hidden="true"><ArrowUpRight size={19} /></span></div>
            </a>
          </article>)}
        </div>
        <BlogPagination page={page} totalPages={totalPages} />
        {page === 1 && <section className="guide-directory" id="by-topic" aria-labelledby="topics-heading">
          <h2 id="topics-heading">Find the guide for your photo</h2>
          <p>Start with the part you want to improve. These guides explain both the technique and its limits.</p>
          <div className="guide-topic-grid">{guideTopics().map((topic) => <section key={topic.id} id={`topic-${topic.id}`}>
            <h3>{topic.title}</h3><p>{topic.description}</p>
            <ul>{topic.entries.map((article) => <li key={article.slug}><a href={assetPath(`/blog/${article.slug}/`)}>{article.title}</a></li>)}</ul>
          </section>)}</div>
        </section>}
      </div>
    </main>
    <Footer subPage />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: breadcrumbs }) }} />
  </>;
}
