"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import Image from "next/image";
import { useRef, type ReactNode } from "react";

export type SlideRenderProps = {
  progress: MotionValue<number>;
};

export type StackedSlide = {
  image: string;
  alt: string;
  content?: ReactNode | ((props: SlideRenderProps) => ReactNode);
  priority?: boolean;
  overlayClassName?: string;
};

/**
 * Stacked scroll sections.
 *
 * Each slide is its own `sticky top-0 h-screen` section inside one shared
 * `relative` parent. Slides are layered by z-index in source order, so as you
 * scroll, the next slide naturally rises from below the viewport and covers
 * the previous one (which stays pinned at top: 0 until the parent's bottom
 * runs out). The last slide releases at the end and the page continues into
 * whatever follows (e.g. the footer).
 */
export function StackedScrollSections({ slides }: { slides: StackedSlide[] }) {
  return (
    <div className="relative">
      {slides.map((slide, i) => (
        <SectionSlide key={i} slide={slide} index={i} />
      ))}
    </div>
  );
}

function SectionSlide({ slide, index }: { slide: StackedSlide; index: number }) {
  const ref = useRef<HTMLElement>(null);

  // Progress 0 → 1 as this slide wipes up from below the viewport into the
  // pinned position. After sticking, progress stays clamped at 1.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  // Hero is already in place on load — keep its progress at 1 throughout.
  const localProgress = useTransform(
    scrollYProgress,
    [0, 1],
    index === 0 ? [1, 1] : [0, 1],
  );

  const renderedContent =
    typeof slide.content === "function"
      ? slide.content({ progress: localProgress })
      : slide.content;

  return (
    <motion.section
      ref={ref}
      style={{ zIndex: index + 1 }}
      className="sticky top-0 h-screen w-full overflow-hidden"
    >
      <Image
        src={slide.image}
        alt={slide.alt}
        fill
        priority={slide.priority ?? index === 0}
        sizes="100vw"
        className="object-cover"
      />
      <div
        className={slide.overlayClassName ?? "absolute inset-0 bg-black/25"}
      />
      {renderedContent && (
        <div className="relative z-10 h-full w-full">{renderedContent}</div>
      )}
    </motion.section>
  );
}
