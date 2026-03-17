"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

const collections = ["Gelato", "Ice Pops", "Sorbets", "Classics", "Seasonal", "Limited Edition", "Vegan"];

export function CollectionStrip() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="collections" className="py-16 sm:py-24 bg-background">
      <div className="relative">
        <div ref={scrollRef} className="flex overflow-x-auto no-scrollbar scroll-snap-x-mandatory">
          {collections.map((collection, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ root: scrollRef, once: false }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 h-64 flex items-center justify-center scroll-snap-align-center"
            >
              <h3 className="font-headline text-6xl sm:text-8xl text-foreground/10 hover:text-foreground transition-colors duration-300 cursor-pointer">
                {collection}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scroll-snap-x-mandatory {
          scroll-snap-type: x mandatory;
        }
        .scroll-snap-align-center {
          scroll-snap-align: center;
        }
      `}</style>
    </section>
  );
}
