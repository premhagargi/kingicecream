
"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { Instagram, Phone, MapPin } from "lucide-react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-background text-foreground py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <h2 className="font-headline font-bold text-2xl">King Ice Cream</h2>
          <p className="mt-2 text-sm text-muted-foreground font-serif italic">Royalty in Every Scoop</p>
          <div className="flex space-x-4 mt-4">
            <a href="https://www.instagram.com/kingicecream.india/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-gold transition-colors" aria-label="Instagram"><Instagram size={20} /></a>
            <a href="https://wa.me/919900255556" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-gold transition-colors" aria-label="WhatsApp"><Phone size={20} /></a>
            <a href="https://www.zomato.com/belgaum/king-ice-cream-25-belgaum-locality/order" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-gold transition-colors" aria-label="Zomato"><MapPin size={20} /></a>
          </div>
        </div>

        <div>
          <h3 className="font-headline uppercase tracking-widest text-sm">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="/products" className="hover:text-gold transition-colors">Products</a></li>
            <li><a href="/aboutus" className="hover:text-gold transition-colors">Our Story</a></li>
            <li><a href="/franchise" className="hover:text-gold transition-colors">Franchise</a></li>
            <li><a href="/locate" className="hover:text-gold transition-colors">Find a Parlour</a></li>
            <li><a href="/contact" className="hover:text-gold transition-colors">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-headline uppercase tracking-widest text-sm">Newsletter</h3>
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
              src="/images/logos/Swiggy_Lsogo_2024.webp"
              alt="Order on Swiggy"
              width={250}
              height={60}
              className="h-10 sm:h-10 w-auto object-contain"
            />
          </a>
        </div>
      </div>

      <div className="border-t border-border pt-6 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} King Ice Cream. All Rights Reserved.</p>
      </div>
    </motion.footer>
  )
}
