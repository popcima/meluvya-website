import { ArrowDownRight } from "lucide-react";
import Image from "next/image";
import { assetPath } from "@/lib/assets";
import { StoreButtons } from "@/components/StoreButtons";
import { ComparisonSlider } from "@/components/ComparisonSlider";

export function Hero() {
  return <section className="hero" aria-labelledby="hero-heading">
    <div className="wrap hero-grid">
      <div className="hero-copy">
        <span className="eyebrow"><svg viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M197.58,129.06,146,110l-19-51.62a15.92,15.92,0,0,0-29.88,0L78,110l-51.62,19a15.92,15.92,0,0,0,0,29.88L78,178l19,51.62a15.92,15.92,0,0,0,29.88,0L146,178l51.62-19a15.92,15.92,0,0,0,0-29.88ZM137,164.22a8,8,0,0,0-4.74,4.74L112,223.85,91.78,169A8,8,0,0,0,87,164.22L32.15,144,87,123.78A8,8,0,0,0,91.78,119L112,64.15,132.22,119a8,8,0,0,0,4.74,4.74L191.85,144ZM144,40a8,8,0,0,1,8-8h16V16a8,8,0,0,1,16,0V32h16a8,8,0,0,1,0,16H184V64a8,8,0,0,1-16,0V48H152A8,8,0,0,1,144,40ZM248,88a8,8,0,0,1-8,8h-8v8a8,8,0,0,1-16,0V96h-8a8,8,0,0,1,0-16h8V72a8,8,0,0,1,16,0v8h8A8,8,0,0,1,248,88Z" /></svg>THE MELUVYA PHOTO STUDIO</span>
        <h1 id="hero-heading">Your photos.<br />A little <span className="hero-highlight">more you.</span></h1>
        <p className="lede">Change the light, try a different scene, or put the finishing touches on a favorite. Meluvya gives your photos somewhere new to go.</p>
        <StoreButtons />
        <a className="hero-mood-link" href="#looks">Find your mood <ArrowDownRight size={18} aria-hidden="true" /></a>
      </div>
      <div className="stage">
        <div className="back l"><Image src={assetPath("/img/stardust_after.jpg")} alt="Stardust look: a selfie in a field restyled with warm golden haze and soft star flares" fill sizes="260px" priority /></div>
        <div className="back r"><Image src={assetPath("/img/flash_dark_after.jpg")} alt="Night flash look: a selfie restyled with harsh digicam flash against a dark background" fill sizes="260px" priority /></div>
        <ComparisonSlider />
        <p className="stage-caption"><span aria-hidden="true">✳</span> A new perspective <span className="stage-caption-rule" aria-hidden="true" /> Golden hour / 01</p>
      </div>
    </div>
  </section>;
}
