
"use client";

import { motion } from "framer-motion";
import { ProductCard } from "./ProductCard";
import type { ImagePlaceholder } from "@/lib/placeholder-images";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function ProductGrid({ products }: { products: ImagePlaceholder[] }) {
  return (
    <section className="py-16 sm:py-24">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16"
        >
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </motion.div>
        {products.length === 0 && (
            <div className="text-center py-16">
                <p className="text-muted-foreground">No products found matching your selection.</p>
            </div>
        )}
       </div>
    </section>
  );
}
