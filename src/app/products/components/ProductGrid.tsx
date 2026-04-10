"use client";

import { motion } from "framer-motion";
import { ProductCard } from "./ProductCard";
import type { ImagePlaceholder } from "@/lib/placeholder-images";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

export function ProductGrid({ products }: { products: ImagePlaceholder[] }) {
  return (
    <section className="pb-16 sm:pb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6"
        >
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
        {products.length === 0 && (
          <div className="text-center py-20">
            <p className="font-serif italic text-muted-foreground text-lg">No products found matching your selection.</p>
          </div>
        )}
      </div>
    </section>
  );
}
