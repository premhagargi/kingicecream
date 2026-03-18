
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
          <h2 className="font-headline text-2xl">King Ice Cream</h2>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-foreground hover:text-muted-foreground transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-foreground hover:text-muted-foreground transition-colors"><Twitter size={20} /></a>
            <a href="#" className="text-foreground hover:text-muted-foreground transition-colors"><Facebook size={20} /></a>
          </div>
        </div>
        
        <div>
          <h3 className="font-supplemental uppercase tracking-widest">Explore</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="hover:underline">Flavors</a></li>
            <li><a href="#" className="hover:underline">Our Story</a></li>
            <li><a href="#" className="hover:underline">Locations</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-supplemental uppercase tracking-widest">Newsletter</h3>
          <p className="mt-4 text-sm text-muted-foreground">Stay up to date with our latest creations.</p>
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
