"use client"
import { motion } from "framer-motion"

const text = "Luxury. Craftsmanship. Pure Indulgence."

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
}

const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
}

export function BrandExperienceSection() {
  return (
    <section className="py-32 sm:py-48 px-4 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="font-supplemental text-3xl sm:text-5xl md:text-6xl"
          variants={sentence}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {text.split("").map((char, index) => {
            return (
              <motion.span key={char + "-" + index} variants={letter}>
                {char}
              </motion.span>
            )
          })}
        </motion.h2>
      </div>
    </section>
  )
}
