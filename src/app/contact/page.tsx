import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Us - King Ice Cream",
  description:
    "Contact King Ice Cream for queries, feedback, franchise enquiries, or wholesale opportunities.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />

      {/* Hero — split layout: left heading, right intro */}
      <section className="min-h-[70vh] sm:min-h-[80vh] flex items-end bg-[#f5f0e8] px-6 sm:px-10 md:px-16 lg:px-24 pb-12 sm:pb-16 pt-32 sm:pt-40">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 w-full max-w-7xl">
          <div className="md:col-span-7">
            <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-foreground/40 block mb-4">
              Get in Touch
            </span>
            <h1 className="font-sans font-black text-3xl sm:text-5xl md:text-6xl leading-[1.05]">
              Let&apos;s
              <br />
              <span className="font-serif italic font-normal text-foreground/50">talk.</span>
            </h1>
          </div>
          <div className="md:col-span-5 flex items-end">
            <p className="font-serif text-base sm:text-lg text-foreground/50 leading-relaxed">
              Whether it&apos;s a flavour suggestion, franchise enquiry, wholesale
              partnership, or just a compliment about your favourite scoop —
              we&apos;re all ears.
            </p>
          </div>
        </div>
      </section>

      {/* Contact details — horizontal strip */}
      <section className="border-b border-border">
        <div className="grid grid-cols-1 sm:grid-cols-3">
          <a
            href="tel:9900255556"
            className="group p-6 sm:p-8 md:p-10 border-b sm:border-b-0 sm:border-r border-border hover:bg-foreground/[0.02] transition-colors"
          >
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-muted-foreground/50 block mb-3">
              Call
            </span>
            <span className="font-sans text-lg sm:text-xl md:text-2xl font-semibold text-foreground group-hover:text-gold transition-colors">
              99002 55556
            </span>
          </a>
          <a
            href="mailto:info@kingicecream.com"
            className="group p-6 sm:p-8 md:p-10 border-b sm:border-b-0 sm:border-r border-border hover:bg-foreground/[0.02] transition-colors"
          >
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-muted-foreground/50 block mb-3">
              Email
            </span>
            <span className="font-sans text-lg sm:text-xl md:text-2xl font-semibold text-foreground group-hover:text-gold transition-colors">
              info@kingicecream.com
            </span>
          </a>
          <a
            href="https://www.instagram.com/kingicecream.india/"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 sm:p-8 md:p-10 hover:bg-foreground/[0.02] transition-colors"
          >
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-muted-foreground/50 block mb-3">
              Instagram
            </span>
            <span className="font-sans text-lg sm:text-xl md:text-2xl font-semibold text-foreground group-hover:text-gold transition-colors">
              @kingicecream.india
            </span>
          </a>
        </div>
      </section>

      {/* Address + Hours — two column */}
      <section className="py-16 sm:py-24 px-6 sm:px-10 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 max-w-7xl">
          {/* Address */}
          <div className="md:col-span-7">
            <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-muted-foreground/50 block mb-4">
              Manufactured &amp; Marketed By
            </span>
            <h2 className="font-sans font-bold text-base sm:text-lg text-foreground mb-3">
              Vijaykant Dairy &amp; Food Products Ltd.
            </h2>
            <p className="font-serif text-muted-foreground leading-relaxed">
              Neginhal Village, Bailhongal Taluka,
              <br />
              Dist. Belagavi, Karnataka 591102
            </p>
            <p className="font-serif text-muted-foreground/60 mt-4 text-sm">
              Proudly made in Belagavi. Expanding across four states.
            </p>
          </div>

          {/* Hours */}
          <div className="md:col-span-4 md:col-start-9">
            <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-muted-foreground/50 block mb-4">
              Business Hours
            </span>
            <div className="space-y-3">
              <div className="flex justify-between items-baseline">
                <span className="font-sans text-sm text-foreground">Monday — Saturday</span>
                <span className="font-sans text-sm text-muted-foreground">9:00 AM — 7:00 PM</span>
              </div>
              <div className="h-[1px] bg-border" />
              <div className="flex justify-between items-baseline">
                <span className="font-sans text-sm text-foreground">Sunday</span>
                <span className="font-sans text-sm text-muted-foreground">Closed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map — full bleed */}
      <section className="bg-black">
        <div className="aspect-[21/9] sm:aspect-[21/7] w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245615.67498339!2d74.4!3d15.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf65f1e1c0a7e5%3A0x4b1e3e1c2e3f2b2!2sBelagavi%2C+Karnataka!5e0!3m2!1sen!2sin!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) grayscale(20%)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="King Ice Cream - Belagavi"
          />
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-16 sm:py-24 px-6 sm:px-10 md:px-16 lg:px-24 bg-foreground text-background">
        <div className="max-w-3xl">
          <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-gold block mb-6">
            Quick Connect
          </span>
          <h2 className="font-sans font-black text-2xl sm:text-3xl md:text-4xl mb-4">
            Prefer WhatsApp?
          </h2>
          <p className="font-serif text-background/40 mb-8">
            Drop us a message for franchise enquiries, bulk orders, or just to say hello.
          </p>
          <a
            href="https://wa.me/919900255556"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-sans text-xs uppercase tracking-[0.3em] px-8 py-4 border border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300"
          >
            Message us on WhatsApp
            <span className="h-[1px] w-6 bg-current" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
