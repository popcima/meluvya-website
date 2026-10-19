import Image from "next/image";
import { assetPath } from "@/lib/assets";
import { looks } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function LooksGallery() {
  return <section className="looks" id="looks" aria-labelledby="looks-h">
    <Reveal className="wrap head"><h2 id="looks-h">One selfie, every look</h2><p>Cinematic light, digicam flash, and portrait styles. Find a mood that feels like you.</p></Reveal>
    <Reveal className="track" >
      {[...looks, ...looks].map((look, index) => <figure className="look" key={`${look.image}-${index}`} aria-hidden={index >= looks.length ? true : undefined}>
        <Image src={assetPath(`/img/${look.image}`)} alt={`${look.name} look`} fill sizes="(min-width: 640px) 220px, 180px" loading="lazy" />
        <figcaption>{look.name}</figcaption>
      </figure>)}
    </Reveal>
  </section>;
}
