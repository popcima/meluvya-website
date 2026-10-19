"use client";

import Image from "next/image";
import { ArrowUpRight, MoveHorizontal, Image as ImageIcon } from "lucide-react";
import { useState } from "react";
import { assetPath } from "@/lib/assets";
import { ChoiceTabs } from "@/components/ChoiceTabs";
import { Reveal } from "@/components/Reveal";
import { ComparisonSlider } from "@/components/ComparisonSlider";

const moods = [
  {
    id: "golden", label: "Golden", number: "01", before: "golden_hour_before.jpg", beforeAlt: "The original portrait by a wooden fence, under a flat afternoon sky", title: "Stay a little longer.",
    description: "That last light of the afternoon. Warm tones, soft edges, and the feeling that there’s nowhere else to be.",
    note: "SUNLIT / SOFT / UNHURRIED",
    photos: [
      { file: "golden_hour_after.jpg", title: "Golden hour", alt: "A portrait in a white dress by a wooden fence, lit with warm sunset light" },
      { file: "stardust_after.jpg", title: "Stardust", alt: "A portrait in a sunlit field with a soft golden glow and star flare" },
      { file: "flash_daylight_after.jpg", title: "Day flash", alt: "A bright, sunlit portrait outside a New York storefront" },
    ],
  },
  {
    id: "after-dark", label: "After dark", number: "02", before: "red_flash_before.jpg", beforeAlt: "The original portrait on concrete steps in natural daylight", title: "Let the night in.",
    description: "A little flash. A deeper shadow. Turn an ordinary moment into the photo that feels like the whole night.",
    note: "FLASH / CONTRAST / ATTITUDE",
    photos: [
      { file: "red_flash_after.jpg", title: "Red flash", alt: "The same portrait on concrete steps lit by vivid red flash" },
      { file: "flash_dark_after.jpg", title: "Night flash", alt: "A direct-flash portrait with a baseball cap and a deep green background" },
      { file: "canon_g7x_after.jpg", title: "Digicam", alt: "A warm digicam-flash portrait at a restaurant table" },
    ],
  },
  {
    id: "nostalgia", label: "Nostalgia", number: "03", before: null, beforeAlt: "", title: "A familiar kind of magic.",
    description: "Photobooth memories and early-digital charm. Looks with a little character, like something you’d keep in a shoebox.",
    note: "GRAIN / MEMORY / CHARACTER",
    photos: [
      { file: "vintage_after.jpg", title: "Photobooth", alt: "A black-and-white photobooth strip with playful portrait poses" },
      { file: "y2k_digicam_after.jpg", title: "Y2K digicam", alt: "A casual street portrait with the crisp flash look of an early digital camera" },
      { file: "warm_vintage_after.jpg", title: "Warm vintage", alt: "A portrait with warm vintage-inspired color and texture" },
    ],
  },
] as const;

export function Moodboard() {
  const [selected, setSelected] = useState<string>("golden");
  return <section className="moodboard" id="looks" aria-labelledby="moodboard-heading">
    <div className="wrap">
      <Reveal className="moodboard-heading">
        <div><p className="section-kicker">01 / FIND YOUR MOOD</p><h2 id="moodboard-heading">Same you.<br />A different feeling.</h2></div>
        <p className="section-intro">Some days call for golden light. <br />Others need a little flash. <br />Follow the feeling.</p>
      </Reveal>
      <ChoiceTabs options={moods} value={selected} onChange={setSelected} idPrefix="mood" label="Choose your mood" className="mood-tabs" />
      <div className="moodboard-panels" data-selected-mood={selected}>
        {moods.map((mood) => <div
          key={mood.id}
          className={`mood-panel${selected === mood.id ? " is-selected" : ""}`}
          data-mood={mood.id}
          role="tabpanel"
          id={`mood-panel-${mood.id}`}
          aria-labelledby={`mood-tab-${mood.id}`}
          aria-hidden={selected !== mood.id}
          inert={selected !== mood.id}
        >
          <div className="mood-description">
            <span className="mood-number" aria-hidden="true">{mood.number}<span> / THE EDIT</span></span>
            <h3>{mood.title}</h3>
            <p>{mood.description}</p>
            <a className="text-link" href="#download">Make it your mood <ArrowUpRight size={17} aria-hidden="true" /></a>
            <p className="mood-note">{mood.note}</p>
          </div>
          <div className="mood-photos">
            {mood.photos.map((photo, index) => <figure className={`mood-photo mood-photo-${index + 1}`} key={photo.file}>
              {index === 0 && mood.before ? <ComparisonSlider id={`mood-compare-${mood.id}`} variant="mood" before={mood.before} after={photo.file} beforeAlt={mood.beforeAlt} afterAlt={photo.alt} label={`${photo.title}: reveal the original photo and Meluvya look`} /> : <Image src={assetPath(`/img/${photo.file}`)} alt={photo.alt} fill sizes={index === 0 ? "(min-width: 900px) 380px, 58vw" : "(min-width: 900px) 240px, 34vw"} loading="eager" />}
              <figcaption>{photo.title}</figcaption>
            </figure>)}
            <p className="mood-photo-instruction">{mood.before ? <><MoveHorizontal size={16} aria-hidden="true" /> Drag the divider. See what changes.</> : <><ImageIcon size={15} aria-hidden="true" /> A little character. A different era.</>}</p>
          </div>
        </div>)}
      </div>
    </div>
  </section>;
}
