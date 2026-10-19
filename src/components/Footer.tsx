import { assetPath } from "@/lib/assets";

export function Footer({ subPage = false }: { subPage?: boolean }) {
  const home = subPage ? assetPath("/") : "";
  return <footer><div className="wrap row"><span>© 2026 Meluvya</span><nav aria-label="Explore Meluvya"><a href={`${home}#looks`}>Looks</a><a href={`${home}#how-it-works`}>Inside Meluvya</a><a href={assetPath("/blog/")}>Blog</a><a href={`${home}#questions`}>Questions</a></nav></div></footer>;
}
