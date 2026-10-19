import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LooksGallery } from "@/components/LooksGallery";
import { Tagline } from "@/components/Tagline";
import { Steps } from "@/components/Steps";
import { FAQ } from "@/components/FAQ";
import { DownloadCTA } from "@/components/DownloadCTA";
import { Footer } from "@/components/Footer";
import { StoreDialog } from "@/components/StoreDialog";

export default function Home() {
  return <>
    <a className="skip" href="#main">Skip to content</a>
    <Header />
    <main id="main"><Hero /><LooksGallery /><Tagline /><Steps /><FAQ /><DownloadCTA /></main>
    <Footer />
    <StoreDialog />
  </>;
}
