"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, type PanInfo } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ImagePlaceholder } from "@/lib/placeholder-images";

const SWIPE_THRESHOLD = 60;

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 320 : -320,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? -320 : 320,
    opacity: 0,
  }),
};

type Props = {
  categoryName: string;
  products: ImagePlaceholder[];
};

export function CategorySlider({ categoryName, products }: Props) {
  const [[index, direction], setState] = useState<[number, number]>([0, 0]);
  const total = products.length;

  const paginate = useCallback(
    (dir: number) => {
      if (total === 0) return;
      setState(([i]) => [i + dir, dir]);
    },
    [total],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") paginate(1);
      else if (e.key === "ArrowLeft") paginate(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [paginate]);

  if (total === 0) {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center px-6 bg-white">
        <h1 className="font-gill font-thin text-3xl sm:text-4xl text-neutral-700 mb-3">
          {categoryName}
        </h1>
        <p className="font-gill font-thin text-neutral-500 text-base">
          No products in this category yet.
        </p>
      </section>
    );
  }

  const activeIndex = ((index % total) + total) % total;
  const product = products[activeIndex];

  const handleDragEnd = (
    _e: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    if (info.offset.x < -SWIPE_THRESHOLD) paginate(1);
    else if (info.offset.x > SWIPE_THRESHOLD) paginate(-1);
  };

  return (
    <section className="relative min-h-screen bg-white pt-28 sm:pt-32 pb-16 px-4 select-none overflow-hidden">
      {/* Category label */}
      <div className="flex justify-center px-6 mb-4 sm:mb-6">
        <h1 className="font-gill text-2xl sm:text-3xl md:text-4xl text-neutral-800 tracking-normal leading-tight inline-block border-b border-neutral-500 pb-1">
          {categoryName}
        </h1>
      </div>

      {/* Chevrons */}
      <button
        type="button"
        onClick={() => paginate(-1)}
        aria-label="Previous product"
        className="absolute left-1 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 text-neutral-400 hover:text-neutral-700 transition-colors p-2"
      >
        <ChevronLeft className="h-8 w-8 sm:h-10 sm:w-10" strokeWidth={1} />
      </button>
      <button
        type="button"
        onClick={() => paginate(1)}
        aria-label="Next product"
        className="absolute right-1 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 text-neutral-400 hover:text-neutral-700 transition-colors p-2"
      >
        <ChevronRight className="h-8 w-8 sm:h-10 sm:w-10" strokeWidth={1} />
      </button>

      {/* Slide stage */}
      <div className="relative w-full max-w-3xl mx-auto h-[60vh] sm:h-[66vh] md:h-[70vh]">
        <AnimatePresence custom={direction} initial={false} mode="popLayout">
          <motion.div
            key={product.id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 260, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.7}
            onDragEnd={handleDragEnd}
            className="absolute inset-0 cursor-grab active:cursor-grabbing"
          >
            <div className="relative w-full h-full">
              <Image
                src={product.imageUrl}
                alt={product.name || `${categoryName} product`}
                fill
                priority
                sizes="(max-width: 640px) 80vw, (max-width: 1024px) 65vw, 50vw"
                className="object-contain pointer-events-none"
                draggable={false}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Product name + description */}
      <div className="mt-8 sm:mt-10 px-6 text-center max-w-xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
          >
            <h2 className="font-gill uppercase tracking-[0.2em] text-lg sm:text-xl text-neutral-900">
              {product.name}
            </h2>
            {product.description && (
              <p className="mt-2 font-gill text-sm sm:text-base text-neutral-700 leading-relaxed">
                {product.description}
              </p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Index indicator */}
      <div className="mt-6 flex justify-center">
        <span className="font-gill text-xs sm:text-sm tracking-[0.25em] uppercase text-neutral-600">
          {String(activeIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </div>
    </section>
  );
}
