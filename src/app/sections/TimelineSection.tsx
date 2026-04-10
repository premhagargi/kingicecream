"use client";

import { motion } from "framer-motion";

const milestones = [
  {
    year: "2004",
    title: "Vijaykant Dairy Founded",
    description:
      "Incorporated in Belagavi, Karnataka. Started with 5,000 litres of milk per day from a modest facility in Neginhal village.",
  },
  {
    year: "2010s",
    title: "Adityaa Milk Becomes a Household Name",
    description:
      "Expanded to 1,500+ villages, 6 chilling centres, and 2,00,000 litres/day. Adityaa Milk becomes the go-to dairy brand in North Karnataka & Goa.",
  },
  {
    year: "2018",
    title: "Hindustan Unilever Partnership",
    description:
      "HUL partners with Vijaykant Dairy to manufacture Kwality Walls ice cream. World-class quality protocols and infrastructure established.",
  },
  {
    year: "Aug 2024",
    title: "King Ice Cream Launches",
    description:
      "After the HUL contract ends, Vijaykant Dairy launches its own proprietary brand — King Ice Cream. Two decades of mastery, now under our own crown.",
  },
  {
    year: "2026",
    title: "New Plant & Expansion",
    description:
      "Rs. 45.70 Crore new manufacturing plant operational. Now in 15,000+ retail outlets across Karnataka, Maharashtra, Goa & Kerala.",
  },
];

export function TimelineSection() {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-headline text-4xl md:text-5xl lg:text-6xl text-foreground mb-12 md:mb-16 text-center"
        >
          Our Journey
        </motion.h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-border md:-translate-x-[0.5px]" />

          {milestones.map((milestone, i) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative flex items-start gap-8 mb-12 md:mb-16 ${
                i % 2 === 0
                  ? "md:flex-row"
                  : "md:flex-row-reverse md:text-right"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-gold rounded-full -translate-x-[5px] md:-translate-x-[6px] mt-2 z-10" />

              {/* Content */}
              <div className="ml-12 md:ml-0 md:w-[calc(50%-2rem)]">
                <span className="font-headline text-gold text-sm uppercase tracking-[0.2em]">
                  {milestone.year}
                </span>
                <h3 className="font-headline text-xl md:text-2xl text-foreground mt-1 mb-2">
                  {milestone.title}
                </h3>
                <p className="font-serif text-muted-foreground leading-relaxed">
                  {milestone.description}
                </p>
              </div>

              {/* Spacer for the other side */}
              <div className="hidden md:block md:w-[calc(50%-2rem)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
