import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Find a Parlour Near You — 15,000+ Outlets",
  description:
    "Find a King Ice Cream parlour or retail outlet near you. Available across 15,000+ stores in Karnataka (Belagavi, Hubli, Mangaluru, Bengaluru), Goa (Panaji, Margao), Maharashtra (Kolhapur, Pune), and Kerala. Order on Zomato & Swiggy.",
  openGraph: {
    title: "Find King Ice Cream Near You",
    description: "15,000+ outlets across Karnataka, Goa, Maharashtra & Kerala. Find your nearest King Ice Cream parlour or order online via Zomato & Swiggy.",
    url: "https://www.kingicecream.com/locate",
    images: [{ url: "/images/logos/king logo.png", width: 1200, height: 630, alt: "Find King Ice Cream" }],
  },
  twitter: {
    card: "summary",
    title: "Find King Ice Cream Near You — 15,000+ Outlets",
    description: "Find your nearest King Ice Cream parlour across 4 states.",
  },
  alternates: {
    canonical: "https://www.kingicecream.com/locate",
  },
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
      <section className="bg-gradient-to-r from-[#1B4D89] to-[#D4A017] pt-36 sm:pt-44 md:pt-48 pb-10 sm:pb-14 px-6 sm:px-10 md:px-16 lg:px-24">
        <div className="flex items-center gap-4 mb-5">
          <span className="h-[1px] w-8 bg-gold" />
          <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-gold">
            15,000+ Outlets across 4 states
          </span>
        </div>
        <h1 className="font-sans font-black text-4xl sm:text-6xl md:text-7xl text-white leading-[0.95]">
          Find Us
          <br />
          <span className="font-serif italic font-normal text-white">
            near you.
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
      <section className="py-14 sm:py-20 px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-10 sm:mb-14">
            <div className="flex items-center gap-4 mb-5">
              <span className="h-[1px] w-8 bg-gold" />
              <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
                Coverage
              </span>
            </div>
            <h2 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl leading-[1.05] text-foreground">
              Available across
              <br />
              <span className="font-serif italic font-normal">four states.</span>
            </h2>
          </div>

          <div className="space-y-10 sm:space-y-12">
            {regions.map((region) => (
              <div key={region.state}>
                <div className="flex items-baseline justify-between mb-5 pb-4 border-b border-border">
                  <h3 className="font-sans text-xl sm:text-2xl md:text-3xl font-black text-foreground">
                    {region.state}
                  </h3>
                  <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    {region.cities.length} cities
                  </span>
                </div>

                <div className="border-t border-l border-border">
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
                    {region.cities.map((city) => (
                      <div
                        key={city.name}
                        className="group p-4 sm:p-5 md:p-6 border-r border-b border-border hover:bg-[#f5f0e8]/60 transition-colors duration-300"
                      >
                        <MapPin className="w-4 h-4 text-gold mb-3 group-hover:scale-110 transition-transform" />
                        <div className="flex items-start justify-between gap-2">
                          <span className="font-sans text-sm sm:text-base font-bold text-foreground leading-tight block">
                            {city.name}
                          </span>
                          {"flagship" in city && city.flagship && (
                            <span className="font-sans text-[9px] uppercase tracking-wider text-gold shrink-0">
                              ★
                            </span>
                          )}
                        </div>
                        <span className="font-sans text-xs text-muted-foreground mt-1 block">
                          {city.outlets} outlets
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Also Available On — edge-to-edge touching grid */}
      <section className="bg-[#f5f0e8]/60 border-t border-l border-border">
        <div className="grid grid-cols-2 md:grid-cols-3">
          <div className="p-5 sm:p-7 md:p-10 border-r border-b border-border">
            <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-gold block mb-4">
              Order Online
            </span>
            <span className="font-sans text-base sm:text-xl md:text-2xl font-black text-foreground block leading-tight">
              Zomato
            </span>
            <span className="font-sans text-[11px] sm:text-xs text-muted-foreground mt-2 block">
              Doorstep delivery
            </span>
          </div>
          <div className="p-5 sm:p-7 md:p-10 border-r border-b border-border">
            <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-gold block mb-4">
              Retail Chains
            </span>
            <span className="font-sans text-base sm:text-xl md:text-2xl font-black text-foreground block leading-tight">
              15,000+ Stores
            </span>
            <span className="font-sans text-[11px] sm:text-xs text-muted-foreground mt-2 block">
              Across 4 states
            </span>
          </div>
          <div className="col-span-2 md:col-span-1 p-5 sm:p-7 md:p-10 border-r border-b border-border">
            <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-gold block mb-4">
              King Parlours
            </span>
            <span className="font-sans text-base sm:text-xl md:text-2xl font-black text-foreground block leading-tight">
              Exclusive Outlets
            </span>
            <span className="font-sans text-[11px] sm:text-xs text-muted-foreground mt-2 block">
              Full menu experience
            </span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 sm:py-24 px-6 sm:px-10 md:px-16 lg:px-24 bg-gradient-to-br from-[#F5C542] via-gold to-[#B8860B] text-foreground overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
        <div className="relative max-w-3xl">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-[1px] w-8 bg-foreground/70" />
            <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-foreground font-semibold">
              Not Nearby Yet?
            </span>
          </div>
          <h2 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl mb-5 leading-[1.05] text-foreground">
            Can&apos;t find
            <span className="font-serif italic font-normal"> us?</span>
          </h2>
          <p className="font-serif text-base sm:text-lg text-foreground/80 mb-10 leading-relaxed max-w-lg">
            We&apos;re expanding every day. If King Ice Cream isn&apos;t in your
            neighbourhood yet, let us know — or consider opening a franchise.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/franchise"
              className="inline-flex items-center gap-3 font-sans text-xs uppercase tracking-[0.3em] px-8 py-4 bg-foreground text-background hover:bg-background hover:text-foreground border border-foreground transition-all duration-300"
            >
              Open a Franchise
              <span className="h-[1px] w-6 bg-current" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 font-sans text-xs uppercase tracking-[0.3em] px-8 py-4 border border-foreground/40 text-foreground hover:border-foreground transition-all"
            >
              Contact Us
              <span className="h-[1px] w-6 bg-current" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
