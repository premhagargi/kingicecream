import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/app/sections/HeroSection';
import { ProductShowcase } from '@/app/sections/ProductShowcase';
import { StorySection } from '@/app/sections/StorySection';
import { CollectionStrip } from '@/app/sections/CollectionStrip';
import { BrandExperienceSection } from '@/app/sections/BrandExperienceSection';
import { NewsTicker } from '@/app/sections/NewsTicker';

export default function Home() {
  return (
    <div className="bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProductShowcase />
        <StorySection />
        <CollectionStrip />
        <BrandExperienceSection />
        <NewsTicker />
      </main>
      <Footer />
    </div>
  );
}
