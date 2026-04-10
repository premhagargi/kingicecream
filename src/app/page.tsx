import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/app/sections/HeroSection';
import { ProductShowcase } from '@/app/sections/ProductShowcase';
import { StorySection } from '@/app/sections/StorySection';
import { CollectionStrip } from '@/app/sections/CollectionStrip';
import { BrandExperienceSection } from '@/app/sections/BrandExperienceSection';
import { NewsTicker } from '@/app/sections/NewsTicker';
import { TestimonialsSection } from '@/app/sections/TestimonialsSection';
import { WhyKingSection } from '@/app/sections/WhyKingSection';
import { InstagramSection } from '@/app/sections/InstagramSection';
import { SplashScreen } from '@/components/SplashScreen';
import { CustomCursor } from '@/components/CustomCursor';

export default function Home() {
  return (
    <SplashScreen>
      <div className="bg-background overflow-x-hidden">
        <CustomCursor />
        <Header />
        <main>
          <HeroSection />
          <ProductShowcase />
          <WhyKingSection />
          <StorySection />
          <TestimonialsSection />
          <CollectionStrip />
          <BrandExperienceSection />
          <InstagramSection />
          <NewsTicker />
        </main>
        <Footer />
      </div>
    </SplashScreen>
  );
}
