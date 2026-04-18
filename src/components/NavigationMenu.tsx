"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { TransitionLink } from "./TransitionLink";

const menuItems = [
  { text: "Products", href: "/products", desc: "Browse our royal collection" },
  { text: "Our Story", href: "/aboutus", desc: "The makers behind the crown" },
  { text: "Franchise", href: "/franchise", desc: "Own a King Ice Cream parlour" },
  { text: "Find Us", href: "/locate", desc: "15,000+ outlets across 4 states" },
  { text: "Contact", href: "/contact", desc: "Get in touch with us" },
];

const socialLinks = [
  { text: "Instagram", href: "https://www.instagram.com/kingicecream.india/" },
  { text: "WhatsApp", href: "https://wa.me/919900255556" },
  { text: "Zomato", href: "https://www.zomato.com/belgaum/king-ice-cream-25-belgaum-locality/order" },
  { text: "Email", href: "mailto:info@kingicecream.com" },
];

export function NavigationMenu({ closeMenu }: { closeMenu: () => void }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ clipPath: "inset(0 0 100% 0)" }}
      animate={{ clipPath: "inset(0 0 0% 0)" }}
      exit={{ clipPath: "inset(0 0 100% 0)" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 bg-[#0a0a0a] z-40 flex flex-col overflow-hidden"
    >
      {/* Top spacer for header */}
      <div className="h-16 sm:h-20 shrink-0" />

      {/* Main content */}
      <div className="flex-1 flex flex-col justify-between px-6 sm:px-10 md:px-16 lg:px-24 pb-8">
        {/* Navigation links */}
        <nav className="flex-1 flex flex-col justify-center">
          <ul className="space-y-0 divide-y divide-white/[0.06]">
            {menuItems.map((item, i) => (
              <motion.li
                key={item.href}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + i * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <TransitionLink
                  href={item.href}
                  onBeforeNavigate={closeMenu}
                  className="group flex items-center justify-between py-5 sm:py-6"
                >
                  <div className="flex items-baseline gap-4 sm:gap-6">
                    <span className="font-sans text-[10px] text-white/70 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`font-sans text-lg sm:text-xl md:text-3xl font-bold uppercase tracking-normal transition-colors duration-300 ${
                        hovered === null || hovered === i
                          ? "text-white"
                          : "text-white/70"
                      }`}
                    >
                      {item.text}
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="hidden sm:block font-serif italic text-sm text-white group-hover:text-white transition-colors">
                      {item.desc}
                    </span>
                    <span className="w-0 group-hover:w-8 h-[1px] bg-gold transition-all duration-400 overflow-hidden" />
                  </div>
                </TransitionLink>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pt-6 border-t border-white/[0.06]"
        >
          {/* Social links */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {socialLinks.map((link) => (
              <a
                key={link.text}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-[11px] uppercase tracking-[0.15em] text-white hover:text-gold transition-colors duration-300"
              >
                {link.text}
              </a>
            ))}
          </div>

          {/* Brand mark */}
          <div className="flex flex-col items-end gap-1">
            <Image
              src="/images/logos/king logo.png"
              alt="King Ice Cream"
              width={250}
              height={80}
              className="h-14 w-auto object-contain"
            />
            <span className="font-serif italic text-[11px] text-white">
              Belagavi, Karnataka
            </span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
