import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us — Get in Touch with King Ice Cream",
  description:
    "Reach out to King Ice Cream for queries, feedback, franchise enquiries, wholesale partnerships, or bulk orders. Call 99002 55556 or email info@kingicecream.com. Vijaykant Dairy, Belagavi.",
  openGraph: {
    title: "Contact Us — King Ice Cream",
    description: "Get in touch with King Ice Cream. Call 99002 55556, email info@kingicecream.com, or message us on WhatsApp for franchise enquiries, bulk orders, and more.",
    url: "https://www.kingicecream.com/contact",
    images: [{ url: "/images/logos/king logo.png", width: 1200, height: 630, alt: "Contact King Ice Cream" }],
  },
  twitter: {
    card: "summary",
    title: "Contact Us — King Ice Cream",
    description: "Get in touch with King Ice Cream. Call 99002 55556 or email info@kingicecream.com.",
  },
  alternates: {
    canonical: "https://www.kingicecream.com/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />

      {/* Hero — split layout: left heading, right intro */}
      <section className="min-h-[60vh] sm:min-h-[65vh] flex items-end bg-[#f5f0e8] px-6 sm:px-10 md:px-16 lg:px-24 pb-12 sm:pb-16 pt-28 sm:pt-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 w-full max-w-7xl">
          <div className="md:col-span-7">
            <div className="flex items-center gap-4 mb-5">
              <span className="h-[1px] w-8 bg-gold" />
              <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-foreground">
                Get in Touch
              </span>
            </div>
            <h1 className="font-sans font-black text-4xl sm:text-6xl md:text-7xl leading-[0.95] text-foreground">
              Let&apos;s
              <br />
              <span className="font-serif italic font-normal">talk.</span>
            </h1>
          </div>
          <div className="md:col-span-5 flex items-end">
            <p className="font-serif text-base sm:text-lg text-foreground leading-[1.7]">
              Whether it&apos;s a flavour suggestion, franchise enquiry, wholesale
              partnership, or just a compliment about your favourite scoop —
              we&apos;re all ears.
            </p>
          </div>
        </div>
      </section>

      {/* Contact details — boxed cards */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
          <a
            href="tel:9900255556"
            className="group p-6 sm:p-8 rounded-2xl border border-border bg-[#f5f0e8]/50 hover:bg-[#f5f0e8] hover:border-gold/60 hover:shadow-sm transition-all duration-300"
          >
            <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-gold block mb-5">
              Call
            </span>
            <span className="font-sans text-xl sm:text-2xl font-black text-foreground group-hover:text-gold transition-colors block leading-tight">
              99002 55556
            </span>
            <span className="font-sans text-xs text-muted-foreground mt-2 block">
              Tap to dial
            </span>
          </a>
          <a
            href="mailto:info@kingicecream.com"
            className="group p-6 sm:p-8 rounded-2xl border border-border bg-[#f5f0e8]/50 hover:bg-[#f5f0e8] hover:border-gold/60 hover:shadow-sm transition-all duration-300"
          >
            <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-gold block mb-5">
              Email
            </span>
            <span className="font-sans text-base sm:text-lg font-black text-foreground group-hover:text-gold transition-colors block leading-tight break-all">
              info@kingicecream.com
            </span>
            <span className="font-sans text-xs text-muted-foreground mt-2 block">
              We reply within 48 hours
            </span>
          </a>
          <a
            href="https://www.instagram.com/kingicecream.india/"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 sm:p-8 rounded-2xl border border-border bg-[#f5f0e8]/50 hover:bg-[#f5f0e8] hover:border-gold/60 hover:shadow-sm transition-all duration-300"
          >
            <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-gold block mb-5">
              Instagram
            </span>
            <span className="font-sans text-xl sm:text-2xl font-black text-foreground group-hover:text-gold transition-colors block leading-tight">
              @kingicecream.india
            </span>
            <span className="font-sans text-xs text-muted-foreground mt-2 block">
              Behind the scenes
            </span>
          </a>
        </div>
      </section>

      {/* Address + Hours — two column boxes */}
      <section className="pb-12 sm:pb-16 px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          <div className="p-6 sm:p-8 rounded-2xl border border-border bg-background">
            <div className="flex items-center gap-4 mb-5">
              <span className="h-[1px] w-8 bg-gold" />
              <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
                Head Office
              </span>
            </div>
            <h2 className="font-sans font-black text-lg sm:text-xl text-foreground mb-3 leading-tight">
              Vijaykant Dairy &amp; Food Products Ltd.
            </h2>
            <p className="font-serif text-base text-muted-foreground leading-[1.7]">
              Neginhal Village, Bailhongal Taluka,
              <br />
              Dist. Belagavi, Karnataka 591102
            </p>
            <p className="font-serif italic text-sm text-foreground mt-4">
              Proudly made in Belagavi since 2004.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl border border-border bg-background">
            <div className="flex items-center gap-4 mb-5">
              <span className="h-[1px] w-8 bg-gold" />
              <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
                Business Hours
              </span>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-baseline">
                <span className="font-sans text-base font-bold text-foreground">Mon — Sat</span>
                <span className="font-sans text-base text-muted-foreground">9 AM — 7 PM</span>
              </div>
              <div className="h-[1px] bg-border" />
              <div className="flex justify-between items-baseline">
                <span className="font-sans text-base font-bold text-foreground">Sunday</span>
                <span className="font-sans text-base text-muted-foreground">Closed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 sm:py-24 px-6 sm:px-10 md:px-16 lg:px-24 bg-[#f5f0e8]">
        <div className="max-w-2xl">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-[1px] w-8 bg-gold" />
            <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
              Send Us a Message
            </span>
          </div>

          <h2 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl mb-5 leading-[1.05] text-foreground">
            Write to
            <span className="font-serif italic font-normal"> us.</span>
          </h2>
          <p className="font-serif text-base sm:text-lg text-muted-foreground mb-10 leading-relaxed max-w-lg">
            Fill in your details and we&apos;ll open your email client with everything ready to send.
          </p>

          <ContactForm />
        </div>
      </section>

      {/* Map — full bleed */}
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
            title="King Ice Cream - Belagavi"
          />
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="relative py-16 sm:py-24 px-6 sm:px-10 md:px-16 lg:px-24 bg-gradient-to-br from-[#F5C542] via-gold to-[#B8860B] text-foreground overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
        <div className="relative max-w-3xl">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-[1px] w-8 bg-foreground/70" />
            <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-foreground font-semibold">
              Quick Connect
            </span>
          </div>
          <h2 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl mb-5 leading-[1.05] text-foreground">
            Prefer
            <span className="font-serif italic font-normal"> WhatsApp?</span>
          </h2>
          <p className="font-serif text-base sm:text-lg text-foreground/80 mb-10 leading-relaxed max-w-lg">
            Drop us a message for franchise enquiries, bulk orders, or just to say hello.
          </p>
          <a
            href="https://wa.me/919900255556"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-sans text-xs uppercase tracking-[0.3em] px-8 py-4 bg-foreground text-background hover:bg-background hover:text-foreground border border-foreground transition-all duration-300"
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
