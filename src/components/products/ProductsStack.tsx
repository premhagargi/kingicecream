"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

type Category = {
  name: string;
  image: string;
  alt: string;
  bgClass: string;
};

const categories: Category[] = [
  {
    name: "Cones",
    image: "/images/Product Images copy/TiramisuCone.png",
    alt: "Cone ice cream",
    bgClass: "bg-white",
    // bgClass: "bg-gradient-to-b from-[#F5E6C8] to-[#E8CFA0]",
  },
  {
    name: "Cups",
    image: "/images/Product Images copy/Chocolate Brownie.png",
    alt: "Cup ice cream",
    bgClass: "bg-white",
    // bgClass: "bg-gradient-to-b from-[#FDE7C3] to-[#F4C887]",
  },
  {
    name: "Kulfi",
    image: "/images/Product Images copy/Mawa_Kulfi_35ml_311224.png",
    alt: "Kulfi",
    bgClass: "bg-white",
    // bgClass: "bg-gradient-to-b from-[#F8E0D8] to-[#E8B8AC]",
  },
  {
    name: "Sticks",
    image: "/images/Product Images copy/Chocobar 65ml_311224.png",
    alt: "Ice cream stick",
    bgClass: "bg-white",
    // bgClass: "bg-gradient-to-b from-[#E8D4BE] to-[#C9A988]",
  },
  {
    name: "Family Packs",
    image: "/images/Product Images copy/Dulce De Leche_700ml Square Tub_Mockup_240125.png",
    alt: "Family pack",
    bgClass: "bg-white",
    // bgClass: "bg-gradient-to-b from-[#FCE6BD] to-[#F0C677]",
  },
  {
    name: "Sundaes",
    image: "/images/Product Images copy/Royal Sundae_180 ml.png",
    alt: "Sundae",
    bgClass: "bg-white",
    // bgClass: "bg-gradient-to-b from-[#FAD5DA] to-[#F0A8B2]",
  },
  {
    name: "Sip Ups",
    image: "/images/Product Images copy/Mango Sip Up_Mockup.png",
    alt: "Sip up",
    bgClass: "bg-white",
    // bgClass: "bg-gradient-to-b from-[#FFE3B8] to-[#FFB870]",
  },
];

function useRise(
  progress: MotionValue<number>,
  range: [number, number] = [0.35, 1],
) {
  const opacity = useTransform(progress, range, [0, 1]);
  const y = useTransform(progress, range, [40, 0]);
  return { opacity, y };
}

function ScrollDownIndicator({ delay = 0.6 }: { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 1 }}
      className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
    >
      <motion.div
        animate={{ y: [0, 4, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="text-foreground/70"
      >
        <ChevronDown
          className="h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20"
          strokeWidth={1}
        />
      </motion.div>
      <span className="font-gill text-xs sm:text-sm md:text-base tracking-[0.15em] uppercase text-foreground/70">
        Scroll Down
      </span>
    </motion.div>
  );
}

function CategorySection({
  category,
  index,
  total,
}: {
  category: Category;
  index: number;
  total: number;
}) {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  // First slide is already in place on load — keep its progress at 1.
  const progress = useTransform(
    scrollYProgress,
    [0, 1],
    index === 0 ? [1, 1] : [0, 1],
  );

  const nameStyle = useRise(progress, [0.3, 0.85]);
  const imageStyle = useRise(progress, [0.2, 0.75]);

  return (
    <motion.section
      ref={ref}
      style={{ zIndex: index + 1 }}
      className={`sticky top-0 h-screen w-full overflow-hidden ${category.bgClass}`}
    >
      {/* Category name — positioned higher than the home heading so it
          doesn't overlap the centered product image. */}
      <div className="absolute inset-x-0 top-[10%] sm:top-[12%] z-10 flex justify-center px-6 text-center">
        <motion.h2
          style={nameStyle}
          className="font-gill text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-foreground tracking-normal leading-tight"
        >
          {category.name}
        </motion.h2>
      </div>

      {/* Big centered product image */}
      <motion.div
        style={imageStyle}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="relative h-[68vh] w-[92vw] sm:h-[74vh] sm:w-[72vw] md:h-[78vh] md:w-[65vw] lg:w-[58vw]">
          <Image
            src={category.image}
            alt={category.alt}
            fill
            priority={index === 0}
            sizes="(max-width: 640px) 85vw, (max-width: 1024px) 60vw, 48vw"
            className="object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.18)]"
          />
        </div>
      </motion.div>

      {index < total - 1 && <ScrollDownIndicator delay={0.6} />}
    </motion.section>
  );
}

export function ProductsStack() {
  return (
    <div className="relative">
      {categories.map((c, i) => (
        <CategorySection
          key={c.name}
          category={c}
          index={i}
          total={categories.length}
        />
      ))}
    </div>
  );
}
