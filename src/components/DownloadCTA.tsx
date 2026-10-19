import { BrandIcon } from "@/components/BrandIcon";
import { StoreButtons } from "@/components/StoreButtons";
import { Reveal } from "@/components/Reveal";

export function DownloadCTA() {
  return <section className="cta" id="download" aria-labelledby="cta-h"><div className="wrap"><Reveal className="closing-layout">
    <div className="closing-message"><p className="section-kicker">YOUR PHOTO. YOUR DIRECTION.</p><h2 id="cta-h">Make room<br />for a new mood.</h2><p>There’s more than one way to see yourself.</p></div>
    <div className="closing-download"><div className="closing-brand"><BrandIcon size={48} /><span className="wordmark">Meluvya</span></div><StoreButtons /><p>Take your imagination with you.</p></div>
  </Reveal></div></section>;
}
