import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FranchiseForm } from "./FranchiseForm";
import {
  TrendingUp,
  ShieldCheck,
  Truck,
  GraduationCap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Franchise Opportunities — Own a King Ice Cream Parlour",
  description:
    "Open a King Ice Cream franchise. Backed by Vijaykant Dairy's 20 years of dairy expertise, HUL-grade manufacturing, end-to-end supply chain, and a brand already in 15,000+ outlets across 4 states. Apply today.",
  openGraph: {
    title: "Own a King Ice Cream Franchise",
    description: "Partner with India's fastest-growing premium ice cream brand. HUL-grade quality, proven demand across 15,000+ outlets, full training & supply chain support.",
    url: "https://www.kingicecream.com/franchise",
    images: [{ url: "/images/logos/king logo.png", width: 1200, height: 630, alt: "King Ice Cream Franchise" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Own a King Ice Cream Franchise",
    description: "Partner with India's fastest-growing premium ice cream brand. HUL-grade quality, 15,000+ outlets, full support.",
  },
  alternates: {
    canonical: "https://www.kingicecream.com/franchise",
  },
};

const benefits = [
  {
    icon: ShieldCheck,
    title: "HUL-Grade Quality",
    desc: "Our facility manufactured for Hindustan Unilever. You get the same world-class product and processes.",
  },
  {
    icon: TrendingUp,
    title: "Proven Demand",
    desc: "15,000+ retail outlets already serving King Ice Cream across 4 states. The brand is growing fast.",
  },
  {
    icon: Truck,
    title: "End-to-End Supply",
    desc: "Cold chain logistics, marketing support, and consistent stock from our 1 lakh litres/day facility.",
  },
  {
    icon: GraduationCap,
    title: "Full Training & Support",
    desc: "From store setup to staff training to launch marketing — we walk with you every step.",
  },
];

export default function FranchisePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[50vh] sm:min-h-[55vh] flex items-end overflow-hidden bg-[linear-gradient(135deg,#1B4D89_0%,#26609E_50%,#D4A017_100%)]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1516559828984-fb3b99548b21?w=1920&q=80")',
          }}
          data-ai-hint="ice cream parlour storefront"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B4D89] via-[#1B4D89]/50 to-transparent" />

        <div className="relative z-10 px-6 sm:px-10 md:px-16 lg:px-24 pb-12 sm:pb-16 pt-28">
          <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-gold mb-3 block">
            Partner With Us
          </span>
          <h1 className="font-sans font-black text-3xl sm:text-5xl md:text-6xl text-white leading-[0.95]">
            Own a King
            <br />
            <span className="font-serif italic font-normal text-white">
              Ice Cream Parlour
            </span>
          </h1>
          <p className="font-serif text-white text-sm sm:text-base mt-4 max-w-lg leading-relaxed">
            Join India&apos;s fastest-growing premium ice cream brand — backed
            by 20 years of Vijaykant Dairy&apos;s manufacturing excellence.
          </p>
        </div>
      </section>

      {/* Why Franchise with King */}
      <section className="py-14 sm:py-20 bg-[#f5f0e8]/40">
        <div className="px-4 sm:px-6 md:px-10 lg:px-16 mb-10 sm:mb-14">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-5">
              <span className="h-[1px] w-8 bg-gold" />
              <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
                Why Partner With Us
              </span>
            </div>
            <h2 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl leading-[1.05] text-foreground">
              Built on twenty years of
              <br />
              <span className="font-serif italic font-normal text-foreground">dairy mastery.</span>
            </h2>
          </div>
        </div>

        <div className="border-t border-l border-border">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="group p-5 sm:p-7 md:p-8 border-r border-b border-border hover:bg-background transition-colors duration-300"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gold/10 flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-gold/20 transition-colors">
                  <b.icon className="w-4 h-4 sm:w-5 sm:h-5 text-gold" />
                </div>
                <h3 className="font-sans text-sm sm:text-base md:text-lg font-bold text-foreground mb-2 leading-snug">
                  {b.title}
                </h3>
                <p className="font-serif text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-14 sm:py-20 bg-background">
        <div className="px-4 sm:px-6 md:px-10 lg:px-16 mb-10 sm:mb-14">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-5">
              <span className="h-[1px] w-8 bg-gold" />
              <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
                The Journey
              </span>
            </div>
            <h2 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl leading-[1.05] text-foreground">
              From enquiry to
              <br />
              <span className="font-serif italic font-normal text-foreground">opening day.</span>
            </h2>
          </div>
        </div>

        <div className="border-t border-l border-border">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Submit Interest",
                desc: "Fill the form with your details and preferred location.",
              },
              {
                step: "02",
                title: "Discovery Call",
                desc: "We discuss investment, location needs and your questions.",
              },
              {
                step: "03",
                title: "Site & Agreement",
                desc: "We help finalise location, agreement and store design.",
              },
              {
                step: "04",
                title: "Launch",
                desc: "Training, stock delivery and launch marketing support.",
              },
            ].map((s) => (
              <div
                key={s.step}
                className="group p-5 sm:p-7 md:p-8 border-r border-b border-border hover:bg-[#f5f0e8]/60 transition-colors duration-300"
              >
                <div className="flex items-baseline justify-between mb-4 sm:mb-5">
                  <span className="font-display text-2xl sm:text-3xl md:text-4xl text-gold leading-none">
                    {s.step}
                  </span>
                  <span className="h-[1px] w-8 sm:w-10 bg-border group-hover:bg-gold transition-colors" />
                </div>
                <h3 className="font-sans text-sm sm:text-base md:text-lg font-bold text-foreground mb-2 leading-snug">
                  {s.title}
                </h3>
                <p className="font-serif text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="relative py-16 sm:py-24 px-6 sm:px-10 md:px-16 lg:px-24 bg-gradient-to-br from-[#1B4D89] via-[#163E6F] to-[#0E2A4D] text-background overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gold/10 blur-[120px] pointer-events-none" />
        <div className="relative max-w-2xl">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-[1px] w-8 bg-gold" />
            <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-gold">
              Franchise Enquiry
            </span>
          </div>

          <h2 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl mb-5 leading-[1.05]">
            Get
            <span className="font-serif italic font-normal text-gold"> started.</span>
          </h2>
          <p className="font-serif text-base sm:text-lg text-background/80 mb-10 leading-relaxed max-w-lg">
            Fill in your details and our franchise team will get back to you
            within 48 hours.
          </p>

          <FranchiseForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
