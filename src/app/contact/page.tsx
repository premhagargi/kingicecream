import type {Metadata} from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us - King Ice Cream',
  description: 'Contact King Ice Cream for queries, feedback, franchise enquiries, or wholesale opportunities.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=1920&q=80")',
          }}
          data-ai-hint="ice cream contact"
        />
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-sans text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 md:mb-6">
            Contact Us
          </h1>
          <p className="font-serif text-xl md:text-2xl text-white/90 max-w-2xl mx-auto italic">
            Your Royal Court Awaits
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg md:text-xl text-muted-foreground font-serif">
            Whether it&apos;s a flavour suggestion, franchise enquiry, wholesale partnership, or just a compliment about your favourite scoop — we&apos;re all ears. Reach out and become part of the King family.
          </p>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="py-8 md:py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            
            {/* Customer Care Card */}
            <div className="bg-card border border-border p-6 md:p-8">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="font-sans text-base sm:text-lg font-semibold text-foreground mb-2">Customer Care</h3>
              <p className="font-body text-muted-foreground mb-2">We're here to help!</p>
              <a 
                href="tel:9900255556" 
                className="font-body text-lg text-foreground hover:underline"
              >
                99002 55556
              </a>
            </div>

            {/* Email Card */}
            <div className="bg-card border border-border p-6 md:p-8">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="font-sans text-base sm:text-lg font-semibold text-foreground mb-2">Email Us</h3>
              <p className="font-body text-muted-foreground mb-2">For general inquiries</p>
              <a 
                href="mailto:info@kingicecream.com" 
                className="font-body text-lg text-foreground hover:underline"
              >
                info@kingicecream.com
              </a>
            </div>

            {/* Instagram Card */}
            <div className="bg-card border border-border p-6 md:p-8">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4">
                <Instagram className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="font-sans text-base sm:text-lg font-semibold text-foreground mb-2">Follow Us</h3>
              <p className="font-body text-muted-foreground mb-2">Latest flavours & offers</p>
              <a 
                href="https://www.instagram.com/kingicecream.india/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-body text-lg text-foreground hover:underline"
              >
                @kingicecream.india
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Address Section */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-sans text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Manufactured & Marketed By
          </h2>
          <div className="bg-card border border-border p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-foreground" />
              </div>
              <div>
                <h3 className="font-sans text-base sm:text-lg font-semibold text-foreground mb-2">
                  Vijaykant Dairy & Food Products Ltd.
                </h3>
                <p className="font-body text-muted-foreground text-lg">
                  Neginhal village, Bailhongal Taluka,<br />
                  <span className="italic">Dist. Belagavi, Karnataka 591102</span>
                </p>
                <p className="font-body text-muted-foreground mt-4">
                  We are <em className="italic">proudly made in Belagavi</em> and <span className="font-medium">expanding across Karnataka</span> and other states.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours Section */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-sans text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
            Business Hours
          </h2>
          <div className="bg-card border border-border p-6 md:p-8 text-center">
            <p className="font-body text-lg md:text-xl text-muted-foreground">
              Monday - Saturday: 9:00 AM - 7:00 PM
            </p>
            <p className="font-body text-muted-foreground mt-2">
              Sunday: Closed
            </p>
          </div>
        </div>
      </section>

      {/* Find Us Section */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-sans text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
            Find a King Ice Cream Parlour Near You
          </h2>
          <div className="bg-card border border-border p-4">
            <div className="aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.5!2d74.73!3d15.82!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDQ5JzEyLjAiTiA3NMKwNDMnNDguMCJF!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="King Ice Cream - Neginhal Plant, Belagavi"
              />
            </div>
          </div>
          <p className="font-body text-muted-foreground text-center mt-6 max-w-2xl mx-auto">
            Whether you're a happy customer, a farmer partner, or a potential retailer, your message matters to us.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}