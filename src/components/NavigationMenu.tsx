"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const menuItems = [
  { text: "Products", href: "/products", imageId: "nav-image-1" },
  { text: "Our Story", href: "/aboutus", imageId: "nav-image-3" },
  { text: "Collections", href: "/#collections", imageId: "nav-image-2" },
  { text: "Contact Us", href: "/contact", imageId: "nav-image-4" },
  { text: "Find Us", href: "/#footer", imageId: "nav-image-4" },
];

export function NavigationMenu({ closeMenu }: { closeMenu: () => void }) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(
    menuItems[0].imageId
  );

  const getImage = (id: string) => PlaceHolderImages.find((img) => img.id === id);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 bg-background z-40 flex"
    >
      <div className="w-full md:w-1/3 h-full relative overflow-hidden">
        <AnimatePresence>
          {menuItems.map((item) => {
            const image = getImage(item.imageId);
            if (!image) return null;

            return hoveredItem === item.imageId ? (
              <motion.div
                key={item.imageId}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={image.imageUrl}
                  alt={image.description || 'Navigation image'}
                  data-ai-hint={image.imageHint}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
                <div className="absolute inset-0 bg-black/20" />
              </motion.div>
            ) : null;
          })}
        </AnimatePresence>
      </div>

      <nav className="w-full md:w-2/3 h-full flex flex-col justify-center items-start p-8 sm:p-16 lg:p-24">
        <ul className="space-y-2 md:space-y-4">
          {menuItems.map((item, index) => (
            <motion.li
              key={item.href}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1, ease: "easeOut" }}
              onMouseEnter={() => setHoveredItem(item.imageId)}
            >
              <Link
                href={item.href}
                onClick={closeMenu}
                className="group font-headline text-5xl sm:text-7xl lg:text-8xl text-foreground inline-flex items-center"
              >
                <span className="group-hover:translate-x-4 transition-transform duration-300 ease-in-out flex items-center">
                  {item.text}
                  <ArrowRight className="w-8 h-8 sm:w-12 sm:h-12 ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.div>
  );
}
