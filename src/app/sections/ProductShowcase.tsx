"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from "next/link";

const featuredIds = ["product-1", "product-2", "product-3", "product-4"];
const products = PlaceHolderImages.filter((img) => featuredIds.includes(img.id));

// Asymmetric grid positions — each product gets a unique layout personality
const layouts = [
  "col-span-2 row-span-2",         // Large hero card
  "col-span-1 row-span-1",         // Small
  "col-span-1 row-span-1",         // Small
  "col-span-2 row-span-1",         // Wide
];

export function ProductShowcase() {
  return (
    <section id="products" className="py-20 sm:py-28 px-6 sm:px-10 md:px-16 lg:px-24 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header — left-aligned, not centered */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 sm:mb-16">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-sans text-[10px] uppercase tracking-[0.4em] text-muted-foreground"
            >
              Our Selection
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-display font-bold text-3xl sm:text-5xl md:text-6xl mt-2"
            >
              Royal Creations
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="/products"
              className="group inline-flex items-center gap-3 font-sans text-xs uppercase tracking-[0.3em] text-muted-foreground hover:text-foreground transition-colors"
              data-cursor-text="All"
            >
              View all products
              <span className="h-[1px] w-6 bg-foreground/30 group-hover:w-12 transition-all duration-500" />
            </Link>
          </motion.div>
        </div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[280px] sm:auto-rows-[320px] md:auto-rows-[300px] gap-3 sm:gap-4">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.9,
                delay: i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`group relative overflow-hidden bg-secondary ${layouts[i]}`}
              data-cursor-text="View"
            >
              {/* Image */}
              <div className="absolute inset-0">
                <Image
                  src={product.imageUrl}
                  alt={product.name || "Ice cream product"}
                  data-ai-hint={product.imageHint}
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              </div>

              {/* Text overlay — bottom left, not centered */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 z-10">
                <h3 className="font-display text-white text-lg sm:text-xl uppercase tracking-wider">
                  {product.name}
                </h3>
                <p className="font-serif italic text-white/50 text-sm mt-1 line-clamp-1">
                  {product.description}
                </p>
              </div>

              {/* Number overlay — top right */}
              <span className="absolute top-4 right-4 font-display text-white/10 text-4xl sm:text-5xl select-none">
                {String(i + 1).padStart(2, "0")}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
