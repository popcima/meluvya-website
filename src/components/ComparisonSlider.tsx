"use client";

import Image from "next/image";
import { assetPath } from "@/lib/assets";
import { useEffect, useRef, useState, type CSSProperties, type PointerEvent } from "react";

type ComparisonSliderProps = {
  id?: string;
  variant?: "hero" | "mood";
  before?: string;
  after?: string;
  beforeAlt?: string;
  afterAlt?: string;
  label?: string;
};

export function ComparisonSlider({
  id = "compare",
  variant = "hero",
  before = "golden_hour_before.jpg",
  after = "golden_hour_after.jpg",
  beforeAlt = "Original selfie by a wooden fence under a flat afternoon sky",
  afterAlt = "The same selfie after the Golden hour look, lit by warm sunset light",
  label = "Drag to compare before and after",
}: ComparisonSliderProps) {
  const [position, setPosition] = useState(42);
  const interrupted = useRef(false);
  const range = useRef<HTMLInputElement>(null);
  const activePointer = useRef<number | null>(null);
  const isMood = variant === "mood";

  useEffect(() => {
    // Only the original hero has a one-time introduction. Mood previews are manual.
    if (isMood || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let animation: number;
    const start = performance.now() + 400;
    function sweep(now: number) {
      if (interrupted.current) return;
      const progress = Math.max(0, Math.min(1, (now - start) / 1600));
      setPosition(100 - 58 * (1 - (1 - progress) ** 3));
      if (progress < 1) animation = requestAnimationFrame(sweep);
    }
    animation = requestAnimationFrame(sweep);
    return () => cancelAnimationFrame(animation);
  }, [isMood]);

  function updateFromPointer(event: PointerEvent<HTMLDivElement>) {
    interrupted.current = true;
    const box = event.currentTarget.getBoundingClientRect();
    setPosition(Math.max(0, Math.min(100, ((event.clientX - box.left) / box.width) * 100)));
  }

  return <div className={`compare${isMood ? " compare-mood" : ""}`} id={id} style={{ "--pos": `${position}%` } as CSSProperties}>
    <div className="frame"
      onPointerDown={(event) => {
        if (event.pointerType === "mouse" && event.button !== 0) return;
        activePointer.current = event.pointerId;
        event.currentTarget.setPointerCapture(event.pointerId);
        range.current?.focus({ preventScroll: true });
        updateFromPointer(event);
      }}
      onPointerMove={(event) => { if (activePointer.current === event.pointerId) updateFromPointer(event); }}
      onPointerUp={() => { activePointer.current = null; }}
      onPointerCancel={() => { activePointer.current = null; }}
      onLostPointerCapture={() => { activePointer.current = null; }}>
      <Image className="before" src={assetPath(`/img/${before}`)} alt={beforeAlt} fill sizes={isMood ? "(min-width: 900px) 380px, 58vw" : "380px"} priority={!isMood} loading={isMood ? "eager" : undefined} draggable={false} />
      <Image className="after" src={assetPath(`/img/${after}`)} alt={afterAlt} fill sizes={isMood ? "(min-width: 900px) 380px, 58vw" : "380px"} priority={!isMood} loading={isMood ? "eager" : undefined} draggable={false} />
      <div className="line" aria-hidden="true" />
      <span className="tag b" aria-hidden="true">{isMood ? "Original" : "Before"}</span><span className="tag a" aria-hidden="true">{isMood ? "With Meluvya" : "After"}</span>
      <input ref={range} id={`${id}-range`} type="range" min={0} max={100} step={1} value={position} aria-label={label} aria-valuetext={`${Math.round(position)}% original, ${Math.round(100 - position)}% with Meluvya`} onFocus={() => { interrupted.current = true; }} onChange={(event) => { interrupted.current = true; setPosition(Number(event.target.value)); }} />
      <div className="knob" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M8 8l-4 4 4 4M16 8l4 4-4 4M12 7v10" /></svg></div>
    </div>
  </div>;
}
