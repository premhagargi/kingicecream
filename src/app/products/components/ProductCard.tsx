
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { ImagePlaceholder } from "@/lib/placeholder-images";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export function ProductCard({ product }: { product: ImagePlaceholder }) {
  return (
    <motion.div variants={itemVariants} className="text-center group">
      <motion.div 
        whileHover={{ scale: 1.05, y: -5 }} 
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="relative w-full aspect-square"
      >
        <Image
          src={product.imageUrl}
          alt={product.name || 'Ice cream product'}
          data-ai-hint={product.imageHint}
          fill
          style={{ objectFit: 'contain' }}
          className="drop-shadow-xl"
        />
      </motion.div>
      <h3 className="mt-6 font-supplemental text-lg uppercase tracking-wider">{product.name}</h3>
      {product.description && (
         <p className="text-sm text-muted-foreground mt-1">{product.description}</p>
      )}
    </motion.div>
  );
}
