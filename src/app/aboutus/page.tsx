import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TimelineSection } from "@/app/sections/TimelineSection";

export const metadata: Metadata = {
  title: "Our Story — 20 Years of Dairy Mastery",
  description:
    "From manufacturing Kwality Walls for Hindustan Unilever to launching our own premium brand — King Ice Cream by Vijaykant Dairy & Food Products Ltd., Belagavi. 40,000+ farmer families, 1,500+ villages, 100% pure milk.",
  openGraph: {
    title: "Our Story — King Ice Cream",
    description: "Two decades of dairy mastery. From HUL partnership to India's fastest-growing premium ice cream brand. 40,000+ farmer families, zero palm oil.",
    url: "https://www.kingicecream.com/aboutus",
    images: [{ url: "/images/logos/king logo.png", width: 1200, height: 630, alt: "King Ice Cream Story" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Story — King Ice Cream",
    description: "Two decades of dairy mastery. From HUL partnership to India's fastest-growing premium ice cream brand.",
  },
  alternates: {
    canonical: "https://www.kingicecream.com/aboutus",
  },
};

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />

      {/* Hero — compact */}
      <section className="min-h-[70vh] sm:min-h-[75vh] flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-24 bg-[linear-gradient(45deg,#1B4D89_0%,#26609E_50%,#D4A017_100%)] relative pt-28">
        <div className="max-w-5xl">
          <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-gold block mb-4">
            Our Story
          </span>
          <h1 className="font-sans font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05]">
            Two decades of
            <br />
            <span className="font-serif italic font-normal text-white">dairy mastery.</span>
            <br />
            One crown to
            <br />
            <span className="text-gold">rule them all.</span>
          </h1>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-12 bg-white/20" />
      </section>

      {/* Opening statement */}
      <section className="py-16 sm:py-24 px-6 sm:px-10 md:px-16 lg:px-24">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-8">
            <span className="h-[1px] w-8 bg-gold" />
            <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
              The Beginning
            </span>
          </div>
          <p className="font-serif text-xl sm:text-2xl md:text-3xl leading-[1.5] text-foreground">
            Before King Ice Cream ever reached your hands, we spent years perfecting
            the craft for someone else — producing millions of litres to the exacting
            standards of India&apos;s largest FMCG company.
          </p>
          <p className="font-sans font-black text-2xl sm:text-3xl md:text-4xl text-foreground mt-8 leading-tight">
            We didn&apos;t start from scratch.
            <br />
            <span className="text-gold">We started from mastery.</span>
          </p>
        </div>
      </section>

      {/* Stats strip — edge-to-edge touching grid */}
      <section className="bg-[#f5f0e8]/50 border-t border-l border-border">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {[
            { num: "2L+", label: "Litres procured daily" },
            { num: "1,500+", label: "Villages in network" },
            { num: "40K+", label: "Farmer families" },
            { num: "15K+", label: "Retail outlets" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="p-5 sm:p-7 md:p-10 border-r border-b border-border hover:bg-background transition-colors"
            >
              <div className="font-sans text-2xl sm:text-3xl md:text-5xl font-black text-foreground leading-none">
                {stat.num}
              </div>
              <p className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.15em] text-muted-foreground mt-3 sm:mt-4">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Origin story — asymmetric layout */}
      <section className="py-16 sm:py-24 px-6 sm:px-10 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 max-w-7xl">
          <div className="md:col-span-5">
            <div className="flex items-center gap-4 mb-5">
              <span className="h-[1px] w-8 bg-gold" />
              <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
                Origin
              </span>
            </div>
            <h2 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl leading-[1.05] text-foreground">
              Rooted in
              <br />
              <span className="font-serif italic font-normal text-foreground">Belagavi.</span>
            </h2>
          </div>

          <div className="md:col-span-7">
            <p className="font-serif text-base sm:text-lg text-foreground leading-[1.7] mb-5">
              Our 12-acre campus sits in Neginhal, Bailhongal, beside the fertile banks
              of the Malaprabha river. What began as a modest 5,000 litres per day
              operation in 2004 has grown into a dairy network spanning{" "}
              <span className="text-foreground font-semibold">1,500+ villages</span>{" "}
              across Karnataka, Maharashtra, Goa, and Kerala.
            </p>
            <p className="font-serif text-base sm:text-lg text-muted-foreground leading-[1.7]">
              Our sister brand Adityaa Milk is a household name across North Karnataka
              and Goa. With a revenue of{" "}
              <span className="text-foreground font-semibold">Rs. 304 Crore in FY25</span>,
              King Ice Cream is the crown jewel of the Vijaykant Dairy empire.
            </p>
          </div>
        </div>
      </section>

      {/* Promise — brand navy gradient with boxed 4-col grid */}
      <section className="relative bg-gradient-to-br from-[#1B4D89] via-[#163E6F] to-[#0E2A4D] text-background py-16 sm:py-24 px-4 sm:px-6 md:px-10 lg:px-16 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-gold/10 blur-[120px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12 sm:mb-16 px-2 sm:px-4">
            <div className="flex items-center gap-4 mb-5">
              <span className="h-[1px] w-8 bg-gold" />
              <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-gold">
                Our Promise
              </span>
            </div>
            <h2 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl text-background leading-[1.05]">
              What we
              <span className="font-serif italic font-normal text-gold"> stand for.</span>
            </h2>
          </div>

          <div className="border-t border-l border-background/15">
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {[
                {
                  num: "01",
                  title: "Pure Milk, No Compromise",
                  desc: "Fresh milk from 1,500+ villages. No palm oil. No vegetable fat.",
                },
                {
                  num: "02",
                  title: "HUL-Grade Manufacturing",
                  desc: "World-class cold chain, FSSAI compliance, 1 lakh L/day capacity.",
                },
                {
                  num: "03",
                  title: "Farmer-First Philosophy",
                  desc: "40,000+ families supported. Fair prices. Six chilling centres.",
                },
                {
                  num: "04",
                  title: "Tradition Meets Today",
                  desc: "From matka kulfi to Gudbud — delivered across 15,000+ stores.",
                },
              ].map((item) => (
                <div
                  key={item.num}
                  className="group p-5 sm:p-7 md:p-8 border-r border-b border-background/15 hover:bg-background/[0.05] transition-colors duration-300"
                >
                  <span className="font-display text-2xl sm:text-3xl md:text-4xl text-gold block mb-4 sm:mb-5 leading-none">
                    {item.num}
                  </span>
                  <h3 className="font-sans font-bold text-sm sm:text-base md:text-lg text-background mb-2 sm:mb-2.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="font-serif text-xs sm:text-sm text-background/75 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <TimelineSection />

      {/* Reach + Community — combined compact section */}
      <section className="py-16 sm:py-24 px-6 sm:px-10 md:px-16 lg:px-24 bg-[#f5f0e8]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 max-w-7xl">
          <div className="md:col-span-5">
            <div className="flex items-center gap-4 mb-5">
              <span className="h-[1px] w-8 bg-gold" />
              <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
                Reach & Community
              </span>
            </div>
            <h2 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl leading-[1.05] text-foreground mb-6">
              More than
              <br />
              <span className="font-serif italic font-normal">just ice cream.</span>
            </h2>
            <p className="font-sans font-black text-xl sm:text-2xl text-foreground leading-tight">
              15,000+ outlets.
              <br />
              <span className="text-gold">4 states and growing.</span>
            </p>
          </div>
          <div className="md:col-span-7 space-y-5">
            <p className="font-serif text-base sm:text-lg text-foreground leading-[1.7]">
              Every King Ice Cream you enjoy supports{" "}
              <span className="font-semibold">40,000+ farming families</span>. Our daily
              procurement of 2,00,000 litres flows through six chilling centres, creating
              thousands of rural livelihoods.
            </p>
            <p className="font-serif text-base sm:text-lg text-muted-foreground leading-[1.7]">
              Proudly made in Belagavi since 2004. Whether you&apos;re a customer, a farmer
              partner, or a retailer — you are part of the King family.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
