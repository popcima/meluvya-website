import { BrandIcon } from "@/components/BrandIcon";
import { assetPath } from "@/lib/assets";

export function Header({ subPage = false, blogActive = false }: { subPage?: boolean; blogActive?: boolean }) {
  const home = subPage ? assetPath("/") : "";
  return <header className="nav">
    <nav className="pill" aria-label="Main navigation">
      <a className="brand" href={`${home}#main`} aria-label="Meluvya home"><BrandIcon decorative /><span className="wordmark">Meluvya</span></a>
      <div className="nav-links"><a href={`${home}#looks`}>Looks</a><a href={`${home}#how-it-works`}>Inside</a></div>
      <a className="nav-blog" href={assetPath("/blog/")} aria-current={blogActive ? "page" : undefined}>Blog</a>
      <a className="btn sm" href={`${home}#download`}>Get the app</a>
    </nav>
  </header>;
}
