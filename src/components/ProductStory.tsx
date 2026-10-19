"use client";

import Image from "next/image";
import { Layers, ScanFace } from "lucide-react";
import { useState } from "react";
import { assetPath } from "@/lib/assets";
import { ChoiceTabs } from "@/components/ChoiceTabs";
import { Reveal } from "@/components/Reveal";

const views = [
  { id: "explore", label: "Explore", image: "meluvya-app-explore.webp", heading: "A little inspiration goes a long way.", description: "Browse effects for a change of light and mood, or discover portrait templates that take you somewhere new.", alt: "Meluvya Explore screen showing Effects and Templates, the Midnight Flash look, and portrait effects" },
  { id: "create", label: "Create", image: "meluvya-app-create.webp", heading: "You bring the photo. And the point of view.", description: "Choose a photo and the look you want to create. You decide when to make it happen; your photo stays local until you choose Create.", alt: "Meluvya Create screen with Choose photo, portrait templates, and the Add your photo button" },
] as const;

const workflow = [
  { title: "Find a look", description: "A flash of inspiration, a new scene, a different light." },
  { title: "Make it yours", description: "Create with your photo. Refine a favorite in the Editor." },
  { title: "Keep the favorites", description: "Find your portraits in My photos, ready to save or share." },
];

export function ProductStory() {
  const [selected, setSelected] = useState<string>("explore");
  return <section className="studio-story" id="how-it-works" aria-labelledby="studio-heading">
    <div className="wrap studio-layout">
      <Reveal className="studio-device-column">
        <div className="studio-phone-halo" aria-hidden="true" />
        <div className="studio-product-stage">
        <div className="studio-callout callout-effects"><Layers size={16} aria-hidden="true" /><span>Effects + templates</span></div>
        <div className="studio-phone">
          {views.map((view) => <Image key={view.id} className={`studio-screen${selected === view.id ? " is-selected" : ""}`} src={assetPath(`/img/${view.image}`)} alt={selected === view.id ? view.alt : ""} aria-hidden={selected !== view.id} width={1320} height={2868} sizes="(min-width: 900px) 290px, 260px" loading="eager" />)}
        </div>
        <div className="studio-callout callout-personal"><ScanFace size={16} aria-hidden="true" /><span>Made for your photos</span></div>
        </div>
        <ChoiceTabs options={views} value={selected} onChange={setSelected} idPrefix="studio" label="See inside Meluvya" className="studio-tabs" />
        <p className="studio-device-caption">A little creative space. Always with you.</p>
      </Reveal>
      <div className="studio-copy">
        <Reveal><p className="section-kicker">02 / INSIDE MELUVYA</p><h2 id="studio-heading">A whole studio.<br />Already in your pocket.</h2></Reveal>
        <div className="studio-view-panels">
          {views.map((view) => <div key={view.id} className={`studio-view-panel${selected === view.id ? " is-selected" : ""}`} role="tabpanel" id={`studio-panel-${view.id}`} aria-labelledby={`studio-tab-${view.id}`} aria-hidden={selected !== view.id} inert={selected !== view.id} tabIndex={selected === view.id ? 0 : -1}>
            <h3>{view.heading}</h3><p>{view.description}</p>
          </div>)}
        </div>
        <ol className="studio-workflow">
          {workflow.map((step, index) => <li key={step.title}><span aria-hidden="true">0{index + 1}</span><div><h3>{step.title}</h3><p>{step.description}</p></div></li>)}
        </ol>
      </div>
    </div>
  </section>;
}
