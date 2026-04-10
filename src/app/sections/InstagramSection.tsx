"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  { url: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=600&q=80", alt: "Saffron ice cream" },
  { url: "https://images.unsplash.com/photo-1560008581-09826d1de69e?w=600&q=80", alt: "Chocolate cone" },
  { url: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=600&q=80", alt: "Mango ice cream" },
  { url: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&q=80", alt: "Ice cream scoop" },
  { url: "https://images.unsplash.com/photo-1615478503562-ec2d8aa0a24d?w=600&q=80", alt: "Kulfi" },
  { url: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68d?w=600&q=80", alt: "Ice cream cone" },
];

export function InstagramSection() {
  return (
    <section className="bg-background">
      {/* Header */}
      <div className="px-6 sm:px-10 md:px-16 lg:px-24 py-12 sm:py-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-muted-foreground block mb-2">
            Instagram
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl">
            @kingicecream.india
          </h2>
        </div>
        <a
          href="https://instagram.com/kingicecream.india"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 font-sans text-xs uppercase tracking-[0.3em] text-muted-foreground hover:text-foreground transition-colors"
          data-cursor-text="Follow"
        >
          Follow us
          <span className="h-[1px] w-6 bg-foreground/30 group-hover:w-12 transition-all duration-500" />
        </a>
      </div>

      {/* Grid — edge to edge, no padding, varying heights */}
      <div className="grid grid-cols-3 md:grid-cols-6">
        {images.map((img, i) => (
          <motion.a
            key={i}
            href="https://instagram.com/kingicecream.india"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className={`relative overflow-hidden group ${
              i % 3 === 0 ? "aspect-[3/4]" : i % 3 === 1 ? "aspect-square" : "aspect-[4/3]"
            } md:aspect-square`}
            data-cursor-text="Insta"
          >
            <Image
              src={img.url}
              alt={img.alt}
              fill
              style={{ objectFit: "cover" }}
              className="transition-transform duration-700 ease-out group-hover:scale-110 grayscale-[0.15] group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-gold/20 transition-colors duration-500" />
          </motion.a>
        ))}
      </div>
    </section>
  );
}
