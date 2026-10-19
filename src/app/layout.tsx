import type { Metadata, Viewport } from "next";
import "./globals.css";
import { assetPath } from "@/lib/assets";
import { pageMetadata, homeDescription, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  ...pageMetadata({ title: "Meluvya — AI Photo Effects & Portraits", description: homeDescription }),
  metadataBase: new URL(`${siteUrl}/`),
  ...(process.env.GOOGLE_SITE_VERIFICATION?.trim() ? { verification: { google: process.env.GOOGLE_SITE_VERIFICATION.trim() } } : {}),
  icons: { icon: assetPath("/img/meluvya-icon.png"), apple: assetPath("/img/meluvya-icon.png") },

};

export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover", themeColor: "#06080c" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className="bg-surface text-primary antialiased">{children}</body></html>;
}
