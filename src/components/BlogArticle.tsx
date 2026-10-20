import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArticleDownloadCTA } from "@/components/ArticleDownloadCTA";
import { StoreDialog } from "@/components/StoreDialog";
import { type Article, getArticle, readingMinutes, articleWordCount } from "@/lib/articles";
import { assetPath } from "@/lib/assets";
import { absoluteUrl, jsonLd } from "@/lib/site";

function displayDate(date: string) {
  return new Intl.DateTimeFormat("en", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" }).format(new Date(`${date}T00:00:00Z`));
}

export function BlogArticle({ article }: { article: Article }) {
  const url = absoluteUrl(`/blog/${article.slug}/`);
  const organization = { "@type": "Organization", name: "Meluvya", url: absoluteUrl("/") };
  const structuredData = [
    { "@context": "https://schema.org", "@type": "BlogPosting", "@id": `${url}#article`, headline: article.title, description: article.description, image: absoluteUrl(`/img/${article.image}`), datePublished: article.published, dateModified: article.modified, author: organization, publisher: { ...organization, logo: { "@type": "ImageObject", url: absoluteUrl("/img/meluvya-icon.png") } }, mainEntityOfPage: { "@type": "WebPage", "@id": url }, inLanguage: "en", wordCount: articleWordCount(article) },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") }, { "@type": "ListItem", position: 2, name: "Blog", item: absoluteUrl("/blog/") }, { "@type": "ListItem", position: 3, name: article.title, item: url }] },
  ];
  return <>
    <a className="skip" href="#main">Skip to content</a>
    <Header subPage />
    <main id="main" className="journal-article">
      <article>
        <header className="wrap article-header">
          <div className="article-header-copy">
            <nav className="breadcrumbs" aria-label="Breadcrumb"><a href={assetPath("/")}>Home</a><span aria-hidden="true">/</span><a href={assetPath("/blog/")}>Blog</a></nav>
            <h1>{article.title}</h1>
            <p className="article-summary">{article.summary}</p>
            <div className="article-meta"><a href={assetPath("/")} rel="author">Meluvya</a><span aria-hidden="true">·</span><time dateTime={article.published}>{displayDate(article.published)}</time><span aria-hidden="true">·</span><span>{readingMinutes(article)} min read</span></div>
          </div>
          <figure className="article-hero"><div><Image src={assetPath(`/img/${article.image}`)} alt={article.imageAlt} fill sizes="(min-width: 900px) 380px, (min-width: 640px) 42vw, 100vw" style={{ objectPosition: article.imagePosition }} priority /></div><figcaption>{article.caption}</figcaption></figure>
        </header>
        <div className="wrap article-layout">
          <section className="article-answer article-content" id="quick-answer"><h2>The quick answer</h2><p>{article.quickAnswer}</p></section>
          <aside className="article-toc"><nav aria-label="On this page"><h2>On this page</h2><a href="#quick-answer">The quick answer</a>{article.sections.map((section) => <a href={`#${section.id}`} key={section.id}>{section.title}</a>)}<a href="#questions">Common questions</a><a href="#sources">Sources</a></nav></aside>
          <div className="article-content">
            {article.sections.map((section) => <section className="article-section" key={section.id} id={section.id}>
              <h2>{section.title}</h2>
              {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.list && (section.list.ordered ? <ol>{section.list.items.map((item) => <li key={item.text}>{item.title && <strong>{item.title} </strong>}{item.text}</li>)}</ol> : <ul>{section.list.items.map((item) => <li key={item.text}>{item.title && <strong>{item.title} </strong>}{item.text}</li>)}</ul>)}
              {section.table && <div className="article-table-wrap" role="region" aria-label={`${section.title} comparison table`} tabIndex={0}><table><thead><tr>{section.table.headers.map((heading) => <th key={heading} scope="col">{heading}</th>)}</tr></thead><tbody>{section.table.rows.map((row) => <tr key={row[0]}>{row.map((cell, index) => index === 0 ? <th scope="row" key={cell}>{cell}</th> : <td key={cell}>{cell}</td>)}</tr>)}</tbody></table></div>}
            </section>)}
            <section className="article-section article-questions" id="questions"><h2>Common questions</h2>{article.faq.map((item) => <div key={item.question}><h3>{item.question}</h3><p>{item.answer}</p></div>)}</section>
            <section className="article-section article-sources" id="sources"><h2>Sources</h2><ul>{article.sources.map((source) => <li key={source.url}><a href={source.url}>{source.title}</a><p>{source.note}</p></li>)}</ul><p className="editorial-note">Drafted with AI assistance. Technical background was checked against the sources above.</p></section>
            <ArticleDownloadCTA />
          </div>
        </div>
      </article>
      <section className="wrap related-guides" aria-labelledby="related-heading"><h2 id="related-heading">Keep exploring</h2><div>{article.related.map((slug) => { const related = getArticle(slug)!; return <a href={assetPath(`/blog/${related.slug}/`)} key={slug}><span>{related.title}</span><ArrowUpRight size={20} aria-hidden="true" /></a>; })}</div><a className="text-link" href={assetPath("/blog/")}>All photo editing guides <ArrowUpRight size={17} aria-hidden="true" /></a></section>
    </main>
    <Footer subPage />
    <StoreDialog />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(structuredData) }} />
  </>;
}
