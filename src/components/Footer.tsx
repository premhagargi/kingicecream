
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

      {/* Manufacturer & legal details — continuous navy → gold gradient with a soft top fade */}
      <div className="relative mt-16 sm:mt-20 -mx-4 sm:-mx-6 lg:-mx-8 pt-32 sm:pt-40 bg-[linear-gradient(180deg,#0F3A6E_0%,#1B4D89_45%,#B8860B_100%)]">
        {/* Soft fade-in from page background at the top so the gradient doesn't start abruptly */}
        <div
          aria-hidden
          className="absolute top-0 left-0 right-0 h-32 sm:h-40 pointer-events-none bg-gradient-to-b from-background to-transparent"
        />

        <div className="relative">
          <div className="relative px-4 sm:px-6 pb-8">
            <div className="max-w-4xl mx-auto text-center">
              <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-[#FFD86B] mb-3 font-semibold drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                Manufactured &amp; Marketed By
              </p>
              <p className="font-sans text-base sm:text-lg font-black text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.55)]">
                Vijaykant Dairy &amp; Food Products Ltd.
              </p>
              <p className="font-serif text-xs sm:text-sm text-white mt-2 leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                Neginhal Village, Bailhongal Taluka, Dist. Belagavi (Karnataka) 591102
              </p>
              <p className="font-sans text-xs sm:text-sm text-white mt-3 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                Customer Care:{" "}
                <a href="tel:9900255556" className="text-white font-bold underline-offset-2 hover:text-[#FFD86B] transition-colors">
                  99002 55556
                </a>
              </p>
            </div>
          </div>
          <div className="relative border-t border-white/25 px-4 py-5 text-center">
            <p className="font-sans text-xs text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
              &copy; {new Date().getFullYear()} King Ice Cream. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
