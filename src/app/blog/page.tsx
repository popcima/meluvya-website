import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { articles, readingMinutes } from "@/lib/articles";
import { assetPath } from "@/lib/assets";
import { absoluteUrl, jsonLd, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({ title: "Photo editing guides | Meluvya", description: "Practical guides to golden-hour edits, digicam looks, vintage effects and AI portraits. Learn what to change, what to keep, and how to judge a result.", path: "/blog/" });

export default function BlogPage() {
  const [featured, ...more] = articles;
  return <>
    <a className="skip" href="#main">Skip to content</a>
    <Header subPage blogActive />
    <main id="main" className="journal-index">
      <div className="wrap">
        <header className="journal-heading">
          <nav className="breadcrumbs" aria-label="Breadcrumb"><a href={assetPath("/")}>Home</a><span aria-hidden="true">/</span><span aria-current="page">Blog</span></nav>
          <h1>Photo editing<br /><span>guides.</span></h1>
          <p>Find the look you want. Understand what changes.<br />Practical ideas for more considered photos.</p>
        </header>
        <a className="journal-feature" href={assetPath(`/blog/${featured.slug}/`)}>
          <div className="journal-feature-image"><Image src={assetPath(`/img/${featured.image}`)} alt={featured.imageAlt} fill sizes="(min-width: 900px) 480px, (min-width: 640px) 45vw, 100vw" style={{ objectPosition: featured.imagePosition }} priority /></div>
          <div className="journal-feature-copy"><p className="reading-time">{readingMinutes(featured)} min read</p><h2>{featured.title}</h2><p>{featured.summary}</p><span className="journal-read">Read the guide <ArrowUpRight size={19} aria-hidden="true" /></span></div>
        </a>
        <div className="journal-grid">
          {more.map((article) => <article className="journal-card" key={article.slug}>
            <a href={assetPath(`/blog/${article.slug}/`)}>
              <div className="journal-card-image"><Image src={assetPath(`/img/${article.image}`)} alt={article.imageAlt} fill sizes="(min-width: 900px) 170px, (min-width: 640px) 160px, 112px" style={{ objectPosition: article.imagePosition }} /></div>
              <div><p className="reading-time">{readingMinutes(article)} min read</p><h2>{article.title}</h2><p className="journal-card-description">{article.summary}</p><span className="journal-card-arrow" aria-hidden="true"><ArrowUpRight size={19} /></span></div>
            </a>
          </article>)}
        </div>
      </div>
    </main>
    <Footer subPage />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") }, { "@type": "ListItem", position: 2, name: "Blog", item: absoluteUrl("/blog/") }] }) }} />
  </>;
}
