"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { BrandIcon } from "@/components/BrandIcon";

export function StoreDialog() {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLElement | null>(null);

  useEffect(() => {
    function openDialog(event: MouseEvent) {
      if (!(event.target instanceof Element)) return;
      const button = event.target.closest<HTMLElement>("[data-store-dialog]");
      if (!button || !dialog.current) return;
      trigger.current = button;
      dialog.current.showModal();
    }
    document.addEventListener("click", openDialog);
    return () => document.removeEventListener("click", openDialog);
  }, []);

  return <dialog ref={dialog} id="download-dialog" className="download-dialog" aria-labelledby="download-dialog-title" aria-describedby="download-dialog-description" onClose={() => trigger.current?.focus()}>
    <button className="dialog-close" type="button" aria-label="Close download information" onClick={() => dialog.current?.close()}><X size={20} aria-hidden="true" /></button>
    <BrandIcon size={56} />
    <p className="dialog-kicker">Meluvya</p>
    <h2 id="download-dialog-title">Your next look is coming soon.</h2>
    <p id="download-dialog-description">Check back soon to get the app and start creating.</p>
    <button className="btn" type="button" onClick={() => dialog.current?.close()}>Got it</button>
  </dialog>;
}
