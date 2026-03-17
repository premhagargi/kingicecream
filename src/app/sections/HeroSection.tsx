"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-image");

  if (!heroImage) {
    return null;
  }

  const headline = "Experience in a scoop.";
  const words = headline.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <section className="h-screen w-full relative">
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          data-ai-hint={heroImage.imageHint}
          fill
          priority
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-primary-foreground p-4">
        <motion.h1
          variants={container}
          initial="hidden"
          animate="visible"
          className="font-headline text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] uppercase leading-none"
        >
          {words.map((word, index) => (
            <motion.span
              key={index}
              variants={child}
              className="inline-block mr-4"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-primary-foreground"
      >
        <ArrowDown className="animate-bounce" />
      </motion.div>
    </section>
  );
}
