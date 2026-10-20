import { ArrowUpRight } from "lucide-react";
import { BrandIcon } from "@/components/BrandIcon";
import { StoreButtons } from "@/components/StoreButtons";
import { assetPath } from "@/lib/assets";

export function ArticleDownloadCTA() {
  return <section className="article-download" aria-labelledby="article-download-heading">
    <div className="article-download-brand"><BrandIcon size={48} decorative /><span className="wordmark">Meluvya</span></div>
    <h2 id="article-download-heading">Your next look starts with Meluvya.</h2>
    <p>Find your direction with photo effects, portrait templates, and editing tools.</p>
    <StoreButtons />
    <p className="article-download-availability">App downloads are coming soon.</p>
    <a className="text-link" href={assetPath("/#how-it-works")}>See inside Meluvya <ArrowUpRight size={17} aria-hidden="true" /></a>
  </section>;
}
