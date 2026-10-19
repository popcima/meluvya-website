import Image from "next/image";
import { assetPath } from "@/lib/assets";
import { Reveal } from "@/components/Reveal";

const steps = [
  { number: 1, title: "Choose a look", body: "Explore photo effects and portrait templates. Find the light, scene, or style you want to make your own." },
  { number: 2, title: "Add your photo", body: "Choose a photo from your camera roll and pair it with your selected look. You choose when to create.", image: "red_flash_before.jpg", alt: "A plain phone photo of someone sitting on concrete steps" },
  { number: 3, title: "Save and share", body: "Find your creations in My photos. Save a favorite, share a new mood, or try another look.", image: "red_flash_after.jpg", alt: "The same photo after the Red flash look, lit by a saturated red gel flash" },
];

export function Steps() {
  return <section className="steps" id="how-it-works" aria-labelledby="steps-h"><div className="wrap">
    <Reveal className="head"><h2 id="steps-h">A new look in three steps</h2><p>From the photo you have to the look you love.</p></Reveal>
    <div className="cards">{steps.map((step) => <Reveal key={step.number} className="step-reveal"><article className="step">
      {step.image ? <div className="pic"><Image src={assetPath(`/img/${step.image}`)} alt={step.alt} fill sizes="(min-width: 768px) 323px, 90vw" loading="lazy" /></div> : <div className="pic photo-grid" aria-hidden="true">
        {[{ name: "golden_hour_after.jpg", width: 839 }, { name: "flash_dark_after.jpg", width: 657 }, { name: "vintage_after.jpg", width: 738 }, { name: "red_flash_after.jpg", width: 917 }].map((image) => <Image key={image.name} src={assetPath(`/img/${image.name}`)} alt="" width={image.width} height={1100} loading="lazy" />)}
      </div>}
      <div className="txt"><span className="n">{step.number}</span><h3>{step.title}</h3><p>{step.body}</p></div>
    </article></Reveal>)}</div>
  </div></section>;
}
