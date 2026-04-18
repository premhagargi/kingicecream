import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Find a Parlour — King Ice Cream",
  description:
    "Find a King Ice Cream parlour or retail outlet near you. Available across Karnataka, Maharashtra, Goa & Kerala.",
};

const regions = [
  {
    state: "Karnataka",
    cities: [
      { name: "Belagavi", outlets: "200+", flagship: true },
      { name: "Hubli-Dharwad", outlets: "150+", flagship: true },
      { name: "Mangaluru", outlets: "80+" },
      { name: "Bengaluru", outlets: "50+" },
      { name: "Davangere", outlets: "40+" },
      { name: "Bagalkot", outlets: "35+" },
      { name: "Gadag", outlets: "30+" },
      { name: "Haveri", outlets: "25+" },
    ],
  },
  {
    state: "Goa",
    cities: [
      { name: "Panaji", outlets: "40+" },
      { name: "Margao", outlets: "35+" },
      { name: "Vasco", outlets: "20+" },
    ],
  },
  {
    state: "Maharashtra",
    cities: [
      { name: "Kolhapur", outlets: "60+" },
      { name: "Sangli", outlets: "30+" },
      { name: "Pune", outlets: "20+" },
    ],
  },
  {
    state: "Kerala",
    cities: [
      { name: "Kasaragod", outlets: "25+" },
      { name: "Kannur", outlets: "15+" },
    ],
  },
];

export default function LocatePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero — minimal, map-focused */}
      <section className="bg-[#2596be] pt-32 sm:pt-40 pb-8 sm:pb-10 px-6 sm:px-10 md:px-16 lg:px-24">
        <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-gold mb-4 block">
          15,000+ Outlets
        </span>
        <h1 className="font-sans font-black text-3xl sm:text-5xl md:text-6xl text-white leading-[0.95]">
          Find Us
          <br />
          <span className="font-serif italic font-normal text-white">
            Near You
          </span>
        </h1>
      </section>

      {/* Map */}
      <section className="bg-[#f3eee8]">
        <div className="aspect-[21/9] sm:aspect-[21/7] w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245615.67498339!2d74.4!3d15.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf65f1e1c0a7e5%3A0x4b1e3e1c2e3f2b2!2sBelagavi%2C+Karnataka!5e0!3m2!1sen!2sin!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="King Ice Cream Locations"
          />
        </div>
      </section>

      {/* Regions */}
      <section className="py-16 sm:py-24 px-6 sm:px-10 md:px-16 lg:px-24">
        <div className="flex items-center gap-4 mb-12">
          <span className="h-[1px] w-8 bg-gold" />
          <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
            Available in 4 states
          </span>
        </div>

        <div className="space-y-16">
          {regions.map((region) => (
            <div key={region.state}>
              <h2 className="font-sans text-base sm:text-lg md:text-xl font-bold uppercase tracking-normal mb-4">
                {region.state}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0 border-t border-border">
                {region.cities.map((city) => (
                  <div
                    key={city.name}
                    className="flex items-start gap-3 py-5 pr-6 border-b border-border"
                  >
                    <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                    <div>
                      <span className="font-sans text-xs sm:text-sm uppercase tracking-wider block">
                        {city.name}
                      </span>
                      <span className="font-sans text-xs text-muted-foreground">
                        {city.outlets} outlets
                      </span>
                      {"flagship" in city && city.flagship && (
                        <span className="font-sans text-[9px] uppercase tracking-wider text-gold ml-2">
                          Flagship
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Also Available On */}
      <section className="border-t border-border">
        <div className="grid grid-cols-1 sm:grid-cols-3">
          <div className="p-6 sm:p-10 border-b sm:border-b-0 sm:border-r border-border">
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-muted-foreground block mb-2">
              Order Online
            </span>
            <span className="font-sans text-xs sm:text-sm font-semibold uppercase tracking-normal">Zomato</span>
          </div>
          <div className="p-6 sm:p-10 border-b sm:border-b-0 sm:border-r border-border">
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-muted-foreground block mb-2">
              Retail Chains
            </span>
            <span className="font-sans text-xs sm:text-sm font-semibold uppercase tracking-normal">15,000+ Stores</span>
          </div>
          <div className="p-6 sm:p-10">
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-muted-foreground block mb-2">
              King Parlours
            </span>
            <span className="font-sans text-xs sm:text-sm font-semibold uppercase tracking-normal">Exclusive Outlets</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 px-6 sm:px-10 md:px-16 lg:px-24 bg-foreground text-background">
        <div className="max-w-2xl">
          <h2 className="font-sans font-bold text-xl sm:text-2xl mb-4">
            Can&apos;t Find Us?
          </h2>
          <p className="font-serif italic text-background mb-8">
            We&apos;re expanding every day. If King Ice Cream isn&apos;t in your
            neighbourhood yet, let us know — or consider opening a franchise.
          </p>
          <div className="flex flex-wrap gap-6">
            <a
              href="/franchise"
              className="inline-flex items-center gap-3 font-sans text-xs uppercase tracking-[0.3em] px-8 py-4 border border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300"
            >
              Open a Franchise
              <span className="h-[1px] w-6 bg-current" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 font-sans text-xs uppercase tracking-[0.3em] text-background hover:text-background transition-colors"
            >
              <span className="h-[1px] w-6 bg-background/30" />
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
