import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TimelineSection } from "@/app/sections/TimelineSection";

export const metadata: Metadata = {
  title: "About Us - King Ice Cream",
  description:
    "Learn about King Ice Cream, a premium ice cream brand from Vijaykant Dairy & Food Products Ltd.",
};

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />

      {/* Hero — full height, just text, no image */}
      <section className="min-h-screen flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-24 bg-black relative">
        <div className="max-w-5xl">
          <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-gold block mb-6">
            Our Story
          </span>
          <h1 className="font-sans font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05]">
            Two decades of
            <br />
            <span className="font-serif italic font-normal text-white/50">dairy mastery.</span>
            <br />
            One crown to
            <br />
            <span className="text-gold">rule them all.</span>
          </h1>
        </div>

        {/* Scroll line */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-16 bg-white/20" />
      </section>

      {/* Opening statement */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 md:px-16 lg:px-24">
        <div className="max-w-3xl">
          <p className="font-serif text-xl sm:text-2xl md:text-3xl leading-relaxed text-foreground/70">
            Before King Ice Cream ever reached your hands, we spent years perfecting
            the craft for someone else — producing millions of litres to the exacting
            standards of India&apos;s largest FMCG company. When we launched our own
            brand in August 2024, we didn&apos;t start from scratch.
            <span className="text-foreground font-medium"> We started from mastery.</span>
          </p>
        </div>
      </section>

      {/* Stats strip — edge to edge */}
      <section className="border-y border-border">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {[
            { num: "2L+", label: "Litres procured daily" },
            { num: "1,500+", label: "Villages in network" },
            { num: "40K+", label: "Farmer families" },
            { num: "15K+", label: "Retail outlets" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="p-6 sm:p-8 md:p-10 border-r border-b md:border-b-0 border-border last:border-r-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r"
            >
              <div className="font-sans text-2xl sm:text-3xl md:text-4xl font-black text-foreground">
                {stat.num}
              </div>
              <p className="font-sans text-xs sm:text-sm text-muted-foreground mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Origin story — asymmetric layout */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          {/* Left — label + heading */}
          <div className="md:col-span-4">
            <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-muted-foreground block mb-4">
              Origin
            </span>
            <h2 className="font-sans font-black text-2xl sm:text-3xl md:text-4xl leading-tight">
              Rooted in
              <br />
              <span className="font-serif italic font-normal text-foreground/50">Belagavi</span>
            </h2>
          </div>

          {/* Right — body text */}
          <div className="md:col-span-7 md:col-start-6">
            <p className="font-serif text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
              Our 12-acre campus sits in Neginhal, Bailhongal, beside the fertile banks
              of the Malaprabha river. What began as a modest 5,000 litres per day
              operation in 2004 has grown into a dairy network spanning 1,500+ villages
              across Karnataka, Maharashtra, Goa, and Kerala.
            </p>
            <p className="font-serif text-base sm:text-lg text-muted-foreground leading-relaxed">
              Our sister brand Adityaa Milk is a household name across North Karnataka
              and Goa. With a revenue of Rs. 304 Crore in FY25, King Ice Cream is the
              crown jewel of the Vijaykant Dairy empire.
            </p>
          </div>
        </div>
      </section>

      {/* Promise — dark section */}
      <section className="bg-foreground text-background py-20 sm:py-28 px-6 sm:px-10 md:px-16 lg:px-24">
        <div className="max-w-5xl">
          <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-gold block mb-6">
            Our Promise
          </span>
          <h2 className="font-serif italic text-xl sm:text-2xl md:text-3xl text-background/60 leading-relaxed max-w-3xl mb-16">
            The same discipline that satisfied Hindustan Unilever now goes
            exclusively into King Ice Cream.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border-t border-background/10">
          {[
            {
              num: "01",
              title: "Pure Milk, No Compromise",
              desc: "Fresh milk from 1,500+ villages. No palm oil. No vegetable fat. Just real dairy.",
            },
            {
              num: "02",
              title: "HUL-Grade Manufacturing",
              desc: "World-class cold chain, FSSAI compliance, and 1 lakh litres per day capacity.",
            },
            {
              num: "03",
              title: "Farmer-First Philosophy",
              desc: "40,000+ farming families supported. Fair prices. Daily collection. Six chilling centres.",
            },
            {
              num: "04",
              title: "Tradition Meets Today",
              desc: "From matka kulfi to Gudbud — India's ice cream heritage, delivered across 15,000+ stores.",
            },
          ].map((item) => (
            <div
              key={item.num}
              className="p-6 sm:p-8 md:p-10 border-b border-r border-background/10 last:border-r-0 [&:nth-child(odd):last-child]:col-span-2 sm:[&:nth-child(odd):last-child]:col-span-1"
            >
              <span className="font-sans text-[10px] text-gold block mb-4">
                {item.num}
              </span>
              <h3 className="font-sans font-semibold text-sm sm:text-base text-background mb-3">
                {item.title}
              </h3>
              <p className="font-serif text-sm text-background/40 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <TimelineSection />

      {/* Reach — simple statement */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 md:px-16 lg:px-24 bg-[#f5f0e8]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-muted-foreground block mb-6">
            Reach
          </span>
          <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-foreground/70 leading-relaxed">
            Karnataka. Maharashtra. Goa. Kerala.
            <br />
            <span className="text-foreground not-italic font-sans font-black">
              15,000+ outlets and growing.
            </span>
          </p>
        </div>
      </section>

      {/* Community — closing statement */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 md:px-16 lg:px-24">
        <div className="max-w-3xl">
          <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-muted-foreground block mb-6">
            Community
          </span>
          <h2 className="font-sans font-black text-2xl sm:text-3xl md:text-4xl leading-tight mb-8">
            More than
            <br />
            <span className="font-serif italic font-normal text-foreground/50">just ice cream.</span>
          </h2>
          <p className="font-serif text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
            Every King Ice Cream you enjoy supports 40,000+ farming families. Our daily
            procurement of 2,00,000 litres flows through six chilling centres, creating
            thousands of rural livelihoods.
          </p>
          <p className="font-serif text-base sm:text-lg text-muted-foreground leading-relaxed">
            Proudly made in Belagavi since 2004. Whether you&apos;re a customer, a farmer
            partner, or a retailer — you are part of the King family.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
