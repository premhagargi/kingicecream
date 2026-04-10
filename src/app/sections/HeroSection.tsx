"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { useRef } from "react";
import Link from "next/link";

export function HeroSection() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-image");
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const opacityOut = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  if (!heroImage) return null;

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-black"
    >
      {/* Background image — offset to the right */}
      <motion.div
        className="absolute inset-0"
        style={{ scale: imageScale, y: imageY }}
      >
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          data-ai-hint={heroImage.imageHint}
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "70% center" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
      </motion.div>

      {/* Content — left aligned, editorial */}
      <motion.div
        className="relative z-10 min-h-screen flex flex-col justify-end pb-16 sm:pb-24 md:pb-32 px-6 sm:px-10 md:px-16 lg:px-24"
        style={{ y: textY, opacity: opacityOut }}
      >
        {/* Small label */}
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.4em] text-gold mb-6 sm:mb-8"
        >
          Est. 2024 &mdash; Belagavi, Karnataka
        </motion.span>

        {/* Main headline — big, left-aligned, broken lines */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-black text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[7vw] text-white uppercase leading-[0.85] tracking-tight"
          >
            Reign
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-black text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[7vw] text-white uppercase leading-[0.85] tracking-tight"
          >
            of <span className="text-gold">Flavor</span>.
          </motion.h1>
        </div>

        {/* Subtext — serif, editorial */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="font-serif italic text-white/50 text-base sm:text-lg md:text-xl mt-6 sm:mt-8 max-w-md leading-relaxed"
        >
          Crafted from pure milk. Backed by two decades
          of dairy mastery. No palm oil. No shortcuts.
        </motion.p>

        {/* CTA — minimal, not a button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mt-8 sm:mt-10"
        >
          <Link
            href="/products"
            className="group inline-flex items-center gap-3 font-sans text-xs uppercase tracking-[0.3em] text-white/70 hover:text-gold transition-colors duration-500"
            data-cursor-text="Explore"
          >
            <span className="h-[1px] w-8 bg-gold group-hover:w-16 transition-all duration-500" />
            Explore the collection
          </Link>
        </motion.div>

        {/* Scroll hint — just a thin line, not an arrow */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 2, ease: "easeOut" }}
          className="absolute bottom-0 right-8 sm:right-16 w-[1px] h-20 bg-white/20 origin-top"
        />
      </motion.div>

      {/* Right side — floating product number */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="hidden md:block absolute top-1/2 -translate-y-1/2 right-10 lg:right-20 z-10"
      >
        <span className="font-display text-[12rem] lg:text-[16rem] text-white/[0.03] leading-none select-none">
          01
        </span>
      </motion.div>
    </section>
  );
}
