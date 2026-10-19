import Image from "next/image";
import { assetPath } from "@/lib/assets";

export function BrandIcon({ size = 32, decorative = false }: { size?: number; decorative?: boolean }) {
  return <Image className="brand-icon" src={assetPath("/img/meluvya-icon.png")} width={size} height={size} alt={decorative ? "" : "Meluvya app icon"} />;
}
