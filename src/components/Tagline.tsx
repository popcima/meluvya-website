"use client";

import { useEffect, useRef, type CSSProperties } from "react";

const words = "Your photo. Your style. Explore a different light, a different scene, a whole new mood.".split(" ");

export function Tagline() {
  const paragraph = useRef<HTMLParagraphElement>(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    const elements = paragraph.current?.querySelectorAll<HTMLSpanElement>(".word");
    if (!elements) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("on"); observer.unobserve(entry.target); } });
    }, { rootMargin: "0px 0px -35% 0px" });
    paragraph.current?.classList.add("animated");
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  return <section className="tagline" aria-label="Made to look like you"><div className="wrap"><p ref={paragraph} id="tagline">{words.map((word, index) => <span key={index}><span className="word" style={{ "--word": index } as CSSProperties}>{word}</span>{index < words.length - 1 ? " " : ""}</span>)}</p></div></section>;
}
