import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { assetPath } from "@/lib/assets";
import { absoluteUrl, jsonLd, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({ title: "How we create our photo guides | Meluvya", description: "How Meluvya uses sources, AI assistance, illustrative photos and editorial checks to create practical photo guides.", path: "/editorial/" });

export default function EditorialPage() {
  return <>
    <a className="skip" href="#main">Skip to content</a><Header subPage />
    <main id="main" className="journal-article">
      <header className="wrap article-header"><div className="article-header-copy">
        <nav className="breadcrumbs" aria-label="Breadcrumb"><a href={assetPath("/")}>Home</a><span aria-hidden="true">/</span><a href={assetPath("/blog/")}>Blog</a></nav>
        <h1>How we create our guides.</h1>
        <p className="article-summary">Practical photo advice, clear sources, and an honest distinction between an example and a tested result.</p>
      </div></header>
      <div className="wrap"><div className="article-content editorial-content">
        <section className="article-section"><h2>Who publishes this blog?</h2><p>Meluvya publishes these guides alongside its AI photo app. The app includes Effects, Templates, Create, Editor, and My photos. Our guides cover broader photography and editing techniques; a technique described here is not necessarily a feature in Meluvya.</p><p>The blog is written with AI assistance. Meluvya is credited as the publisher. Articles are not attributed to individual experts or presented as independent reviews of our app.</p></section>
        <section className="article-section"><h2>What supports our advice?</h2><p>Technical guidance is checked against the sources listed in each article. We favor original documentation from device makers, software providers, and established photography references. Sources explain the basis for a recommendation; they do not imply an endorsement of Meluvya.</p><p>We distinguish documented behavior from a suggested exercise. Unless an article explicitly describes a test and its conditions, it should not be read as a hands-on test report. Device features, app versions, lighting and source-image quality can change the result.</p></section>
        <section className="article-section"><h2>What do the photographs show?</h2><p>Blog photographs are illustrative. Licensed stock images carry a source credit and are not Meluvya outputs or evidence that a technique was tested. Captions explain this distinction. A photo is chosen to help explain the topic, not to prove a product claim.</p></section>
        <section className="article-section"><h2>How do we review and update articles?</h2><p>Before publication, an AI-assisted editorial review checks the reader question, factual support, limitations, overlap with existing guides, and internal links. Automated checks also validate dates, links and page structure. These checks can miss mistakes and are not a substitute for independent expert review.</p><p>The original publication date stays fixed. A visible updated date is added when an article receives a substantive revision. Related keyword variations belong in one useful guide rather than repeated pages that answer the same question.</p></section>
        <section className="article-section"><h2>How is the app promoted?</h2><p>Each guide includes a Meluvya promotion. Store links have not yet been provided, so the buttons display a coming-soon message. We do not claim an app download is available from those buttons today.</p><p>Search visibility and AI citations are not guaranteed. We do not invent search-volume figures, rankings, testimonials or traffic results.</p></section>
        <section className="article-section"><h2>Choose a guide for your next photo</h2><p><a href={assetPath("/blog/#by-topic")}>Browse guides by topic</a> to find advice about lighting, portrait composition, photo effects and file quality. Each guide includes its sources and limitations so you can decide what applies to your own photo.</p></section>
      </div></div>
    </main><Footer subPage />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd({ "@context": "https://schema.org", "@type": "AboutPage", "@id": absoluteUrl("/editorial/"), name: "How Meluvya creates its photo guides", url: absoluteUrl("/editorial/"), about: { "@type": "Organization", "@id": absoluteUrl("/#organization"), name: "Meluvya", url: absoluteUrl("/") }, inLanguage: "en" }) }} />
  </>;
}
