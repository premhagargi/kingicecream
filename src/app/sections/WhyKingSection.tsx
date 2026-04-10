"use client";

import { motion } from "framer-motion";

const stats = [
  { number: "0%", label: "Palm Oil", detail: "Pure milk from 1,500+ villages" },
  { number: "40K+", label: "Farmers", detail: "Families supported daily" },
  { number: "HUL", label: "Heritage", detail: "Ex-Kwality Walls manufacturer" },
  { number: "15K+", label: "Outlets", detail: "Across 4 states" },
];

export function WhyKingSection() {
  return (
    <section className="relative bg-foreground text-background overflow-hidden">
      {/* Top divider text */}
      <div className="px-6 sm:px-10 md:px-16 lg:px-24 pt-16 sm:pt-20 pb-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-4"
        >
          <span className="h-[1px] w-8 bg-gold" />
          <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-gold">
            Why choose King
          </span>
        </motion.div>
      </div>

      {/* Big statement */}
      <div className="px-6 sm:px-10 md:px-16 lg:px-24 pb-12 sm:pb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif italic text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug max-w-3xl text-background/80"
        >
          Two decades of dairy mastery.
          <br className="hidden sm:block" />
          <span className="text-gold not-italic">One royal promise.</span>
        </motion.h2>
      </div>

      {/* Stats strip — horizontal, edge-to-edge */}
      <div className="border-t border-background/10">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="p-6 sm:p-8 md:p-10 border-r border-b md:border-b-0 border-background/10 last:border-r-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r"
            >
              <div className="font-display text-3xl sm:text-4xl md:text-5xl text-gold leading-none whitespace-nowrap">
                {stat.number}
              </div>
              <div className="font-display text-sm uppercase tracking-[0.2em] mt-3 text-background/90">
                {stat.label}
              </div>
              <p className="font-serif italic text-background/40 text-sm mt-2">
                {stat.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
