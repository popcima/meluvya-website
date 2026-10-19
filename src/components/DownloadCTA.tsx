import { BrandIcon } from "@/components/BrandIcon";
import { StoreButtons } from "@/components/StoreButtons";
import { Reveal } from "@/components/Reveal";

export function DownloadCTA() {
  return <section className="cta" id="download" aria-labelledby="cta-h"><div className="wrap"><Reveal className="box">
    <BrandIcon size={72} />
    <h2 id="cta-h">Your next favorite photo starts with Meluvya</h2>
    <StoreButtons />
    <p className="proof">Your photo. Your style. A whole new mood.</p>
  </Reveal></div></section>;
}
