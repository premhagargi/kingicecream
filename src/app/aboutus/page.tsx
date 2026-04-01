import type {Metadata} from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

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
          <h1 className="font-headline text-6xl md:text-8xl lg:text-9xl text-white mb-4 md:mb-6">
            About Us
          </h1>
          <p className="font-body text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            The Royal Story Behind Every Scoop
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 md:mb-8 text-center">
            A Legacy of Purity & Excellence
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              King Ice Cream is the royal new venture from <strong className="font-semibold">Vijaykant Dairy & Food Products Ltd.</strong>, <span className="italic">a trusted name in dairy since the mid-2000s</span> in Belagavi, Karnataka. <em className="font-medium">Inspired by the success and quality focus</em> of our sister brand <strong className="font-semibold">Adityaa Milk</strong>, we bring the same dedication to excellence, purity, and community to every scoop.
            </p>
            <p className="text-lg md:text-xl leading-relaxed">
              Rooted in the fertile lands beside the Malaprabha river in Belagavi, Vijaykant Dairy began with <span className="font-medium">a modest collection of 5,000 litres of milk per day</span>. Today, we proudly collect <strong className="font-bold">100,000 litres daily</strong> from over <strong className="font-bold">1,500 villages</strong> through six chilling centres, supporting <span className="italic">40,000+ farmers</span> and creating thousands of jobs for rural youth.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className="text-center">
              <div className="font-headline text-4xl md:text-5xl lg:text-6xl text-foreground mb-2">100K+</div>
              <p className="font-body text-sm md:text-base text-muted-foreground">Litres Collected Daily</p>
            </div>
            <div className="text-center">
              <div className="font-headline text-4xl md:text-5xl lg:text-6xl text-foreground mb-2">1,500+</div>
              <p className="font-body text-sm md:text-base text-muted-foreground">Villages Served</p>
            </div>
            <div className="text-center">
              <div className="font-headline text-4xl md:text-5xl lg:text-6xl text-foreground mb-2">40K+</div>
              <p className="font-body text-sm md:text-base text-muted-foreground">Farmer Partners</p>
            </div>
            <div className="text-center">
              <div className="font-headline text-4xl md:text-5xl lg:text-6xl text-foreground mb-2">120+</div>
              <p className="font-body text-sm md:text-base text-muted-foreground">Ice Cream Flavours</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Promise Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 md:mb-8 text-center">
            Our Promise
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground mb-10">
            <p className="text-lg md:text-xl leading-relaxed">
              This strong foundation of tradition, <span className="font-medium">stringent quality controls</span>, and state-of-the-art infrastructure allows us to deliver ice creams that combine <em className="italic">authentic Indian flavours</em> with modern indulgence. At King Ice Cream, we <strong className="font-bold">believe every scoop should feel like a taste of royalty</strong>.
            </p>
          </div>
          
          {/* Promise Cards */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-card border border-border p-6 md:p-8">
              <h3 className="font-headline text-2xl md:text-3xl text-foreground mb-4">Pure Ingredients</h3>
              <p className="font-body text-muted-foreground">
                We use <span className="font-medium">pure milk (no palm oil)</span> and premium ingredients to create ice creams that are both <em className="italic">delicious and wholesome</em>.
              </p>
            </div>
            <div className="bg-card border border-border p-6 md:p-8">
              <h3 className="font-headline text-2xl md:text-3xl text-foreground mb-4">Royal Taste</h3>
              <p className="font-body text-muted-foreground">
                From classic Cassata to <span className="font-medium">creamy Stick varieties</span> and beloved local favourites like Gudbud, every flavour is <strong className="font-bold">crafted to perfection</strong>.
              </p>
            </div>
            <div className="bg-card border border-border p-6 md:p-8">
              <h3 className="font-headline text-2xl md:text-3xl text-foreground mb-4">Farmer-First Philosophy</h3>
              <p className="font-body text-muted-foreground">
                We empower <em className="italic">local farmers</em> and deliver consistent quality, continuing the legacy of Vijaykant Dairy while <span className="font-medium">creating sweet moments</span>.
              </p>
            </div>
            <div className="bg-card border border-border p-6 md:p-8">
              <h3 className="font-headline text-2xl md:text-3xl text-foreground mb-4">Innovation Rooted in Tradition</h3>
              <p className="font-body text-muted-foreground">
                We blend <span className="font-medium">authentic Indian flavours</span> with modern indulgence, bringing <strong className="font-bold">innovative recipes</strong> that celebrate life's little celebrations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reach Section */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Available Across Karnataka & Beyond
          </h2>
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            From Belagavi to Mangaluru, Kerala, and more, King Ice Cream parlours are becoming the go-to destination for regal indulgence.
          </p>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 md:mb-8 text-center">
            More Than Just Ice Cream
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-lg md:text-xl leading-relaxed">
              We are <em className="italic">more than just an ice cream brand</em> — we are a community partner. By empowering <span className="font-medium">local farmers</span> and delivering consistent quality, we continue the legacy of Vijaykant Dairy while creating <strong className="font-bold">sweet moments</strong> that celebrate life's little celebrations.
            </p>
            <p className="text-lg md:text-xl leading-relaxed mt-6">
              We are <span className="italic">proudly made in Belagavi</span> and expanding across Karnataka and other states. Whether you're a happy customer, a farmer partner, or a potential retailer, <strong className="font-semibold">your message matters to us</strong>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}