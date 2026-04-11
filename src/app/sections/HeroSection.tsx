"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-black"
    >
      {/* Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-[center_60%]"
      >
        <source src="/videos/herovideo.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlay — fades in on scroll to transition to next section */}
      <motion.div
        className="absolute inset-0 bg-black pointer-events-none"
        style={{ opacity }}
      />
    </section>
  );
}
