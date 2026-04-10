
"use client"
import { motion } from "framer-motion"
import { Facebook, Instagram, Twitter } from "lucide-react"
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
            <a href="https://instagram.com/kingicecream.india" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-gold transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-foreground hover:text-gold transition-colors"><Twitter size={20} /></a>
            <a href="#" className="text-foreground hover:text-gold transition-colors"><Facebook size={20} /></a>
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
      <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} King Ice Cream. All Rights Reserved.</p>
      </div>
    </motion.footer>
  )
}
