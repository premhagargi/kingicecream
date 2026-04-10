"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { ImagePlaceholder } from "@/lib/placeholder-images";

// Soft pastel backgrounds based on product tags/category
function getCardBg(product: ImagePlaceholder): string {
  const tags = product.tags?.map(t => t.toLowerCase()) || [];
  const category = product.category?.toLowerCase() || "";

  if (tags.includes("chocolate")) return "bg-[#f3ece4]";
  if (tags.includes("fruit") && product.name?.toLowerCase().includes("mango")) return "bg-[#fff5e0]";
  if (tags.includes("fruit") && product.name?.toLowerCase().includes("strawberry")) return "bg-[#fce8ec]";
  if (tags.includes("fruit") && product.name?.toLowerCase().includes("orange")) return "bg-[#fff0e0]";
  if (tags.includes("fruit")) return "bg-[#e8f5e4]";
  if (tags.includes("traditional")) return "bg-[#fef6e4]";
  if (tags.includes("nutty")) return "bg-[#f5f0e0]";
  if (category === "kulfi") return "bg-[#fef6e4]";
  if (category === "family packs") return "bg-[#eef0f5]";
  if (category === "sundaes") return "bg-[#fce8ec]";
  return "bg-[#f5f5f2]";
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function ProductCard({ product }: { product: ImagePlaceholder }) {
  const bg = getCardBg(product);

  return (
    <motion.div variants={itemVariants} className="group" data-cursor-text="View">
      {/* Card with colored background */}
      <div className={`${bg} rounded-2xl p-4 sm:p-6 aspect-[3/4] relative overflow-hidden flex items-center justify-center transition-shadow duration-300 group-hover:shadow-lg`}>
        {/* Category pill */}
        {product.category && (
          <span className="absolute top-3 left-3 sm:top-4 sm:left-4 font-sans text-[9px] uppercase tracking-[0.15em] text-foreground/40 bg-white/60 backdrop-blur-sm px-2.5 py-1 rounded-full">
            {product.category}
          </span>
        )}

        {/* Product image */}
        <div className="relative w-full h-[70%] transition-transform duration-500 ease-out group-hover:scale-105 group-hover:-translate-y-1">
          <Image
            src={product.imageUrl}
            alt={product.name || "Ice cream product"}
            data-ai-hint={product.imageHint}
            fill
            style={{ objectFit: "contain" }}
            className="drop-shadow-md"
          />
        </div>
      </div>

      {/* Text below card */}
      <div className="mt-3 sm:mt-4 px-1">
        <div className="flex items-start justify-between gap-1">
          <h3 className="font-sans text-[11px] sm:text-xs font-medium uppercase tracking-normal leading-tight line-clamp-2">
            {product.name}
          </h3>
          {product.price && (
            <span className="font-sans text-xs sm:text-sm text-foreground shrink-0">
              ₹{product.price}
            </span>
          )}
        </div>
        {product.description && (
          <p className="text-[10px] sm:text-xs text-muted-foreground mt-0.5 font-serif italic line-clamp-1">
            {product.description}
          </p>
        )}
      </div>
    </motion.div>
  );
}
