
"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { Instagram, Phone, MapPin } from "lucide-react"
import { TransitionLink } from "./TransitionLink"
import { Input } from "./ui/input"
import { Button } from "./ui/button"

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-background text-foreground pt-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <Image
            src="/images/logos/king logo.png"
            alt="King Ice Cream"
            width={500}
            height={180}
            className="h-16 sm:h-20 w-auto object-contain"
          />
          <p className="mt-2 text-sm text-muted-foreground font-serif italic">Taste of Royalty</p>
          <div className="flex space-x-4 mt-4">
            <a href="https://www.instagram.com/kingicecream.india/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-gold transition-colors" aria-label="Instagram"><Instagram size={20} /></a>
            <a href="https://wa.me/919900255556" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-gold transition-colors" aria-label="WhatsApp"><Phone size={20} /></a>
            <a href="https://www.zomato.com/belgaum/king-ice-cream-25-belgaum-locality/order" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-gold transition-colors" aria-label="Zomato"><MapPin size={20} /></a>
          </div>
        </div>

        <div>
          <h3 className="font-sans font-semibold uppercase tracking-wider text-xs">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><TransitionLink href="/products" className="hover:text-gold transition-colors">Products</TransitionLink></li>
            <li><TransitionLink href="/aboutus" className="hover:text-gold transition-colors">Our Story</TransitionLink></li>
            <li><TransitionLink href="/blog" className="hover:text-gold transition-colors">The Journal</TransitionLink></li>
            <li><TransitionLink href="/franchise" className="hover:text-gold transition-colors">Franchise</TransitionLink></li>
            <li><TransitionLink href="/locate" className="hover:text-gold transition-colors">Find a Parlour</TransitionLink></li>
            <li><TransitionLink href="/contact" className="hover:text-gold transition-colors">Contact Us</TransitionLink></li>
          </ul>
        </div>

        <div>
          <h3 className="font-sans font-semibold uppercase tracking-wider text-xs">Newsletter</h3>
          <p className="mt-4 text-sm text-muted-foreground">Be the first to know about new flavours, seasonal specials, and store openings.</p>
          <form className="mt-4 flex">
            <Input type="email" placeholder="Your Email" className="flex-grow" />
            <Button type="submit" variant="default" className="ml-2">Subscribe</Button>
          </form>
        </div>
      </div>
      {/* Order Now — Zomato & Swiggy logos */}
      <div className="mt-12 border-t border-border pt-10 pb-8">
        <p className="text-center font-sans text-[10px] uppercase tracking-[0.4em] text-muted-foreground mb-6">
          Order Online
        </p>
        <div className="flex items-center justify-center gap-10 sm:gap-14">
          {/* Zomato */}
          <a
            href="https://www.zomato.com/belgaum/king-ice-cream-25-belgaum-locality/order"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:opacity-100 transition-opacity duration-300"
            aria-label="Order on Zomato"
          >
            <Image
              src="/images/logos/Zomato-Logo-700x394.png"
              alt="Order on Zomato"
              width={250}
              height={60}
              className="h-10 sm:h-10 w-auto object-contain"
            />
          </a>

          <span className="w-[1px] h-10 bg-border" />

          {/* Swiggy */}
          <a
            href="https://www.swiggy.com/city/belgaum/king-ice-cream-camp-camp-area-rest1077734"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-100 transition-opacity duration-300"
            aria-label="Order on Swiggy"
          >
            <Image
              src="/images/logos/Swiggy_Logo_2024.webp"
              alt="Order on Swiggy"
              width={250}
              height={60}
              className="h-10 sm:h-10 w-auto object-contain"
            />
          </a>
        </div>
      </div>

      {/* Manufacturer & legal details — navy ↔ gold gradient, unique 210° angle, full-bleed with upward feather */}
      <div className="relative mt-10 -mx-4 sm:-mx-6 lg:-mx-8">
        {/* Upward bleed — gradient fades to transparent above the block */}
        <div
          aria-hidden
          className="absolute -top-8 left-0 right-0 h-8 bg-[linear-gradient(210deg,#1B4D89_0%,#26609E_35%,#D4A017_100%)] pointer-events-none"
          style={{
            maskImage: "linear-gradient(to top, black, transparent)",
            WebkitMaskImage: "linear-gradient(to top, black, transparent)",
          }}
        />

        <div className="relative overflow-hidden bg-[linear-gradient(210deg,#1B4D89_0%,#26609E_35%,#D4A017_100%)] text-background">
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
          <div className="relative px-4 sm:px-6 pt-10 pb-8">
            <div className="max-w-4xl mx-auto text-center">
              <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-gold mb-3 font-semibold">
                Manufactured &amp; Marketed By
              </p>
              <p className="font-sans text-base sm:text-lg font-black text-background">
                Vijaykant Dairy &amp; Food Products Ltd.
              </p>
              <p className="font-serif text-xs sm:text-sm text-background/85 mt-2 leading-relaxed">
                Neginhal Village, Bailhongal Taluka, Dist. Belagavi (Karnataka) 591102
              </p>
              <p className="font-sans text-xs sm:text-sm text-background/85 mt-3">
                Customer Care:{" "}
                <a href="tel:9900255556" className="text-background font-bold hover:text-gold transition-colors">
                  99002 55556
                </a>
              </p>
            </div>
          </div>
          <div className="relative border-t border-background/15 px-4 py-5 text-center">
            <p className="font-sans text-xs text-background/80">
              &copy; {new Date().getFullYear()} King Ice Cream. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
