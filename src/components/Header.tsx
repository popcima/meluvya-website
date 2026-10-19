import { BrandIcon } from "@/components/BrandIcon";

export function Header() {
  return <header className="nav">
    <nav className="pill" aria-label="Main navigation">
      <a className="brand" href="#main" aria-label="Meluvya home"><BrandIcon decorative /><span className="wordmark">Meluvya</span></a>
      <div className="nav-links"><a href="#looks">Looks</a><a href="#how-it-works">Inside</a></div>
      <a className="btn sm" href="#download">Get the app</a>
    </nav>
  </header>;
}
