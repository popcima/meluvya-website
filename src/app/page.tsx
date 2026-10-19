import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Moodboard } from "@/components/Moodboard";
import { ProductStory } from "@/components/ProductStory";
import { FAQ } from "@/components/FAQ";
import { DownloadCTA } from "@/components/DownloadCTA";
import { Footer } from "@/components/Footer";
import { StoreDialog } from "@/components/StoreDialog";

export default function Home() {
  return <>
    <a className="skip" href="#main">Skip to content</a>
    <Header />
    <main id="main"><Hero /><Moodboard /><ProductStory /><FAQ /><DownloadCTA /></main>
    <Footer />
    <StoreDialog />
  </>;
}
