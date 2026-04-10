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
  title: "Franchise — King Ice Cream",
  description:
    "Partner with King Ice Cream. Open a franchise backed by Vijaykant Dairy — 20 years of dairy mastery, HUL-grade manufacturing, and 15,000+ outlets.",
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
      <section className="relative min-h-[60vh] flex items-end overflow-hidden bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1516559828984-fb3b99548b21?w=1920&q=80")',
          }}
          data-ai-hint="ice cream parlour storefront"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

        <div className="relative z-10 px-6 sm:px-10 md:px-16 lg:px-24 pb-16 sm:pb-20 pt-32">
          <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-gold mb-4 block">
            Partner With Us
          </span>
          <h1 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl text-white leading-[0.9]">
            Own a King
            <br />
            <span className="font-serif italic font-normal text-white/60">
              Ice Cream Parlour
            </span>
          </h1>
          <p className="font-serif text-white/40 text-base sm:text-lg mt-6 max-w-lg leading-relaxed">
            Join India&apos;s fastest-growing premium ice cream brand — backed
            by 20 years of Vijaykant Dairy&apos;s manufacturing excellence.
          </p>
        </div>
      </section>

      {/* Why Franchise with King */}
      <section className="border-b border-border">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className="p-6 sm:p-8 md:p-10 border-b sm:border-b-0 sm:border-r border-border last:border-r-0 [&:nth-child(2)]:border-r-0 sm:[&:nth-child(2)]:border-r lg:[&:nth-child(2)]:border-r"
            >
              <b.icon className="w-5 h-5 text-gold mb-5" />
              <h3 className="font-display text-base uppercase tracking-wider mb-3">
                {b.title}
              </h3>
              <p className="font-serif text-sm text-muted-foreground leading-relaxed">
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 sm:py-24 px-6 sm:px-10 md:px-16 lg:px-24">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 mb-8">
            <span className="h-[1px] w-8 bg-gold" />
            <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
              How it works
            </span>
          </div>

          <div className="space-y-10">
            {[
              {
                step: "01",
                title: "Submit Your Interest",
                desc: "Fill out the form below with your details and preferred location. Our franchise team reviews every application.",
              },
              {
                step: "02",
                title: "Discovery Call",
                desc: "We'll schedule a call to discuss investment details, location requirements, and answer all your questions.",
              },
              {
                step: "03",
                title: "Site & Agreement",
                desc: "Once approved, we help you find the right location, finalise the agreement, and begin store design.",
              },
              {
                step: "04",
                title: "Launch",
                desc: "Full training, stock delivery, marketing launch support — your King Ice Cream parlour opens its doors.",
              },
            ].map((s) => (
              <div key={s.step} className="flex gap-6">
                <span className="font-display text-3xl sm:text-4xl text-gold/30 shrink-0 leading-none">
                  {s.step}
                </span>
                <div>
                  <h3 className="font-display text-lg sm:text-xl uppercase tracking-wider mb-2">
                    {s.title}
                  </h3>
                  <p className="font-serif text-muted-foreground leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="py-16 sm:py-24 px-6 sm:px-10 md:px-16 lg:px-24 bg-foreground text-background">
        <div className="max-w-2xl">
          <div className="flex items-center gap-4 mb-8">
            <span className="h-[1px] w-8 bg-gold" />
            <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-gold">
              Franchise Enquiry
            </span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
            Get Started
          </h2>
          <p className="font-serif italic text-background/50 mb-10">
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
