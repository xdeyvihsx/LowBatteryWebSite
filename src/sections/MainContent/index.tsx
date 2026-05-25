import { HeroSection } from "@/sections/HeroSection";
import { StorySection } from "@/sections/StorySection";
import { FeaturesSection } from "@/sections/FeaturesSection";
import { PurchaseSection } from "@/sections/PurchaseSection";
import { ChampionsSection } from "@/sections/ChampionsSection";
import { GallerySection } from "@/sections/GallerySection";
import { NewsletterSection } from "@/sections/NewsletterSection";
import { StudioSection } from "@/sections/StudioSection";
import { OtherGamesSection } from "@/sections/OtherGamesSection";

export const MainContent = () => {
  return (
    <div className="box-border caret-transparent">
      <div className="box-border caret-transparent">
        <main className="bg-black box-border caret-transparent overflow-hidden font-proximanova_regular">
          <section id="inicio"><HeroSection /></section>
          <section id="historia"><StorySection /></section>
          <section id="caracteristicas"><FeaturesSection /></section>
          <section id="demo"><PurchaseSection /></section>
          <section id="personaje"><ChampionsSection /></section>
          <section id="galeria"><GallerySection /></section>
          <NewsletterSection />
          <section id="equipo"><StudioSection /></section>
          <OtherGamesSection />
        </main>
      </div>
    </div>
  );
};
