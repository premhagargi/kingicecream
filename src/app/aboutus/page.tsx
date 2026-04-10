import type {Metadata} from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { TimelineSection } from '@/app/sections/TimelineSection';

export const metadata: Metadata = {
  title: 'About Us - King Ice Cream',
  description: 'Learn about King Ice Cream, a premium ice cream brand from Vijaykant Dairy & Food Products Ltd., bringing royal indulgence to every scoop.',
};

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1497034825429-c343d7c6a68d?w=1920&q=80")',
          }}
          data-ai-hint="ice cream factory"
        />
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-headline text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-4 md:mb-6">
            About Us
          </h1>
          <p className="font-serif text-xl md:text-2xl text-white/90 max-w-2xl mx-auto italic">
            The Royal Story Behind Every Scoop
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl text-foreground mb-6 md:mb-8 text-center">
            The Makers Behind the Crown
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
              Before King Ice Cream ever reached your hands, we spent years perfecting the craft for someone else. <strong className="font-semibold">Vijaykant Dairy & Food Products Ltd.</strong> was the trusted manufacturing partner behind <span className="italic">Hindustan Unilever&apos;s Kwality Walls</span> in the region — producing millions of litres of ice cream to the exacting standards of India&apos;s largest FMCG company. When we decided to launch our own brand in August 2024, we did not start from scratch. We started from mastery.
            </p>
            <p className="text-lg md:text-xl leading-relaxed font-serif">
              Rooted in a 12-acre campus in Neginhal, Bailhongal, beside the fertile banks of the Malaprabha river in Belagavi, Vijaykant Dairy has grown from <span className="font-medium">a modest 5,000 litres per day operation in 2004</span> to procuring <strong className="font-bold">2,00,000 litres of milk daily</strong> from over <strong className="font-bold">1,500 villages</strong>. Our sister brand <span className="italic">Adityaa Milk</span> is a household name across North Karnataka and Goa. With a revenue of Rs. 304 Crore in FY25, King Ice Cream is the crown jewel of this dairy empire.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
            <div className="text-center">
              <div className="font-headline text-3xl sm:text-4xl md:text-5xl text-foreground mb-2 whitespace-nowrap">2L+</div>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground">Litres of Milk Procured Daily</p>
            </div>
            <div className="text-center">
              <div className="font-headline text-3xl sm:text-4xl md:text-5xl text-foreground mb-2">1,500+</div>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground">Villages in Our Network</p>
            </div>
            <div className="text-center">
              <div className="font-headline text-3xl sm:text-4xl md:text-5xl text-foreground mb-2">40K+</div>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground">Farmer Families Supported</p>
            </div>
            <div className="text-center">
              <div className="font-headline text-3xl sm:text-4xl md:text-5xl text-foreground mb-2">15K+</div>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground">Retail Outlets Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <TimelineSection />

      {/* Quality Promise Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl text-foreground mb-6 md:mb-8 text-center">
            Our Promise
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground mb-10">
            <p className="text-lg md:text-xl leading-relaxed font-serif">
              Having manufactured ice cream for Hindustan Unilever, we know what world-class quality demands. That same discipline — <span className="font-medium">rigorous cold chain management, FSSAI compliance, zero palm oil</span>, and 1,00,000 litres per day ice cream capacity — now goes exclusively into King Ice Cream. <strong className="font-bold">Every scoop is a taste of royalty</strong>, backed by institutional-grade processes.
            </p>
          </div>

          {/* Promise Cards */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-card border border-border p-6 md:p-8">
              <h3 className="font-headline text-2xl md:text-3xl text-foreground mb-4">Pure Milk, No Compromise</h3>
              <p className="text-muted-foreground font-serif">
                Made with fresh milk from our own procurement network of 1,500+ villages. No palm oil. No vegetable fat substitutes. Just real dairy, the way it should be.
              </p>
            </div>
            <div className="bg-card border border-border p-6 md:p-8">
              <h3 className="font-headline text-2xl md:text-3xl text-foreground mb-4">HUL-Grade Manufacturing</h3>
              <p className="text-muted-foreground font-serif">
                Our facility manufactured Kwality Walls for Hindustan Unilever. The same world-class processes, cold chain infrastructure, and quality protocols now power King Ice Cream.
              </p>
            </div>
            <div className="bg-card border border-border p-6 md:p-8">
              <h3 className="font-headline text-2xl md:text-3xl text-foreground mb-4">Farmer-First Philosophy</h3>
              <p className="text-muted-foreground font-serif">
                We support 40,000+ farming families across Karnataka and neighbouring states. Fair prices, daily collection, six chilling centres — when farmers thrive, the milk is better, and so is your ice cream.
              </p>
            </div>
            <div className="bg-card border border-border p-6 md:p-8">
              <h3 className="font-headline text-2xl md:text-3xl text-foreground mb-4">Rooted in Tradition, Made for Today</h3>
              <p className="text-muted-foreground font-serif">
                From matka kulfi set in earthen pots to Gudbud inspired by Dharwad&apos;s legendary dessert, we celebrate India&apos;s rich ice cream heritage while delivering modern convenience across 15,000+ retail stores and Zomato.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reach Section */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            From Belagavi to Your Neighbourhood
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-serif">
            King Ice Cream is available across Karnataka, Maharashtra, Goa, and Kerala through 15,000+ retail outlets, exclusive King parlours, and food delivery platforms including Zomato. Our new manufacturing plant ensures we can bring royal flavours to even more families, every day.
          </p>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl text-foreground mb-6 md:mb-8 text-center">
            More Than Just Ice Cream
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-lg md:text-xl leading-relaxed font-serif">
              Every King Ice Cream you enjoy supports a network of <strong className="font-bold">40,000+ farming families</strong>. Our daily milk procurement of 2,00,000 litres flows through six chilling centres, creating thousands of rural livelihoods. When you choose King, you choose a brand that puts farmers at the heart of everything.
            </p>
            <p className="text-lg md:text-xl leading-relaxed mt-6 font-serif">
              Proudly made in Belagavi since 2004, expanding across four states and counting. Whether you are a customer craving something royal, a farmer looking for a reliable dairy partner, or a retailer wanting to stock the region&apos;s fastest-growing ice cream brand — <strong className="font-semibold">you are part of the King family</strong>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}