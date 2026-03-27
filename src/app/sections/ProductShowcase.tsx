
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const products = PlaceHolderImages.filter((img) => img.id.startsWith("product-"));

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

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

export function ProductShowcase() {
  return (
    <section id="products" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-headline text-5xl sm:text-7xl text-center mb-16">
          Our Creations
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="group relative"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative aspect-[4/5] w-full overflow-hidden"
              >
                <Image
                  src={product.imageUrl}
                  alt={product.name || 'Ice cream product'}
                  data-ai-hint={product.imageHint}
                  fill
                  unoptimized
                  style={{ objectFit: 'contain' }}
                  className="drop-shadow-xl transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
              </motion.div>
              <div className="mt-4 text-center">
                <h3 className="font-headline text-lg uppercase tracking-wider">{product.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{product.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
