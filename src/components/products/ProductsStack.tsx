"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { TransitionLink } from "@/components/TransitionLink";
import { categorySlug } from "@/lib/categories";

type Category = {
  name: string;
  image: string;
  alt: string;
  bgClass: string;
};

const categories: Category[] = [
  {
    name: "Cones",
    image: "/images/Product Images copy/tiramisu_cone_white_bg.png",
    alt: "Cone ice cream",
    bgClass: "bg-white",
  },
  {
    name: "Cups",
    image: "/images/Product Images copy/chocolate_brownie.png",
    alt: "Cup ice cream",
    bgClass: "bg-white",
  },
  {
    name: "Kulfi",
    image: "/images/Product Images copy/mawa_kulfi_35ml.png",
    alt: "Kulfi",
    bgClass: "bg-white",
  },
  {
    name: "Sticks",
    image: "/images/Product Images copy/belgian_chocolate.png",
    alt: "Ice cream stick",
    bgClass: "bg-white",
  },
  {
    name: "Family Packs",
    image: "/images/Product Images copy/dulce_de_lece.png",
    alt: "Family pack",
    bgClass: "bg-white",
  },
  {
    name: "Sundaes",
    image: "/images/Product Images copy/royal_sundae.png",
    alt: "Sundae",
    bgClass: "bg-white",
  },
  {
    name: "Sip Ups",
    image: "/images/Product Images copy/mango_sip_up.png",
    alt: "Sip up",
    bgClass: "bg-white",
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
  scrollYProgress,
}: {
  category: Category;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}) {
  const transitions = Math.max(1, total - 1);
  const isLast = index === total - 1;

  // Horizontal wipe — clip-path inset grows from the bottom upward, so an
  // invisible divider line sweeps up the viewport. Above the line: this
  // category. Below the line: the next category, already in place.
  const wipeStart = index / transitions;
  const wipeEnd = (index + 1) / transitions;

  const clipPath = useTransform(
    scrollYProgress,
    [wipeStart, wipeEnd],
    isLast
      ? ["inset(0% 0% 0% 0%)", "inset(0% 0% 0% 0%)"]
      : ["inset(0% 0% 0% 0%)", "inset(0% 0% 100% 0%)"],
  );

  // Heading reveal progress — 0 → 1 as the previous wipe finishes on this
  // section. First section is fully revealed from load.
  const revealStart = Math.max(0, (index - 1) / transitions);
  const revealEnd = index / transitions;

  const progress = useTransform(
    scrollYProgress,
    [revealStart, revealEnd],
    index === 0 ? [1, 1] : [0, 1],
  );

  const nameStyle = useRise(progress, [0.3, 0.85]);

  return (
    <motion.section
      style={{ clipPath, zIndex: total - index }}
      className={`absolute inset-0 overflow-hidden will-change-[clip-path] ${category.bgClass}`}
    >
      <div className="absolute inset-x-0 top-[10%] sm:top-[12%] z-10 flex justify-center px-6 text-center">
        <motion.h2
          style={nameStyle}
          className="font-gill text-2xl sm:text-3xl md:text-4xl font-thin lg:text-5xl text-neutral-500 tracking-normal leading-tight inline-block border-b border-neutral-400"
        >
          {category.name}
        </motion.h2>
      </div>

      <TransitionLink
        href={`/products/${categorySlug(category.name)}`}
        aria-label={`View all ${category.name}`}
        data-cursor-text="View"
        className="absolute inset-0 flex items-center justify-center group"
      >
        <div className="relative h-[68vh] w-[92vw] sm:h-[74vh] sm:w-[72vw] md:h-[78vh] md:w-[65vw] lg:w-[58vw] transition-transform duration-500 ease-out group-hover:scale-[1.03]">
          <Image
            src={category.image}
            alt={category.alt}
            fill
            priority={index === 0}
            sizes="(max-width: 640px) 85vw, (max-width: 1024px) 60vw, 48vw"
            className="object-contain"
          />
        </div>
      </TransitionLink>

      {!isLast && <ScrollDownIndicator delay={0.6} />}
    </motion.section>
  );
}

export function ProductsStack() {
  const ref = useRef<HTMLDivElement>(null);
  const total = categories.length;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <div
      ref={ref}
      className="relative"
      style={{ height: `${total * 100}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {categories.map((c, i) => (
          <CategorySection
            key={c.name}
            category={c}
            index={i}
            total={total}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>
    </div>
  );
}
