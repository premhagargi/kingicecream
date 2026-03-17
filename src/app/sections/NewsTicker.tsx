"use client"
import { motion } from "framer-motion"

export function NewsTicker() {
  const text = "NEW FLAVORS - LIMITED EDITIONS - POP-UP EVENTS - "
  const repeatedText = Array(5).fill(text).join(" ")

  const marqueeVariants = {
    animate: {
      x: ["0%", "-100%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 40,
          ease: "linear",
        },
      },
    },
  }

  return (
    <section className="py-8 bg-primary text-primary-foreground overflow-hidden">
      <div className="whitespace-nowrap">
        <motion.div
          className="font-headline text-3xl sm:text-4xl uppercase"
          variants={marqueeVariants}
          animate="animate"
        >
          <span>{repeatedText}</span>
        </motion.div>
      </div>
    </section>
  )
}
