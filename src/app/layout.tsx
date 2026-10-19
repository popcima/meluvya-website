import type { Metadata, Viewport } from "next";
import "./globals.css";
import { assetPath } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Meluvya — AI Photo Effects & Portraits",
  icons: { icon: assetPath("/img/meluvya-icon.png"), apple: assetPath("/img/meluvya-icon.png") },
  description: "Make your photos your own with Meluvya. Explore AI photo effects, portrait templates, and editing tools to create a whole new mood.",
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover", themeColor: "#06080c" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className="bg-surface text-primary antialiased">{children}</body></html>;
}
