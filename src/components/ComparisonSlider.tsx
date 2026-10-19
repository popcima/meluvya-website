"use client";

import Image from "next/image";
import { assetPath } from "@/lib/assets";
import { useEffect, useRef, useState, type CSSProperties, type PointerEvent } from "react";

export function ComparisonSlider() {
  const [position, setPosition] = useState(42);
  const interrupted = useRef(false);
  const range = useRef<HTMLInputElement>(null);
  const activePointer = useRef<number | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
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
  }, []);

  function updateFromPointer(event: PointerEvent<HTMLDivElement>) {
    interrupted.current = true;
    const box = event.currentTarget.getBoundingClientRect();
    setPosition(Math.max(0, Math.min(100, ((event.clientX - box.left) / box.width) * 100)));
  }

  return <div className="compare" id="compare" style={{ "--pos": `${position}%` } as CSSProperties}>
    <div className="frame"
      onPointerDown={(event) => {
        activePointer.current = event.pointerId;
        event.currentTarget.setPointerCapture(event.pointerId);
        range.current?.focus({ preventScroll: true });
        updateFromPointer(event);
      }}
      onPointerMove={(event) => { if (activePointer.current === event.pointerId) updateFromPointer(event); }}
      onPointerUp={() => { activePointer.current = null; }}
      onPointerCancel={() => { activePointer.current = null; }}>
      <Image className="before" src={assetPath("/img/golden_hour_before.jpg")} alt="Original selfie by a wooden fence under a flat afternoon sky" fill sizes="380px" priority draggable={false} />
      <Image className="after" src={assetPath("/img/golden_hour_after.jpg")} alt="The same selfie after the Golden hour look, lit by warm sunset light" fill sizes="380px" priority draggable={false} />
      <div className="line" aria-hidden="true" />
      <span className="tag b" aria-hidden="true">Before</span><span className="tag a" aria-hidden="true">After</span>
      <input ref={range} id="compare-range" type="range" min={0} max={100} step={1} value={position} aria-label="Drag to compare before and after" aria-valuetext={`${Math.round(position)}% before, ${Math.round(100 - position)}% after`} onChange={(event) => { interrupted.current = true; setPosition(Number(event.target.value)); }} />
      <div className="knob" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l-5 6 5 6M15 6l5 6-5 6" /></svg></div>
    </div>
  </div>;
}
