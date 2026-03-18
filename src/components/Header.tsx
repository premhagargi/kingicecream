"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { NavigationMenu } from "./NavigationMenu";

export function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 p-4 sm:p-6 mix-blend-difference">
        <div className="flex justify-between items-center max-w-full mx-auto">
          <Link href="/" passHref>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="font-headline text-2xl md:text-3xl text-primary-foreground cursor-pointer"
            >
              King Ice Cream
            </motion.div>
          </Link>
          <motion.button
            onClick={toggleMenu}
            className="relative w-8 h-8 text-primary-foreground z-20"
            aria-label="Toggle Menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="sr-only">Menu</span>
            <motion.span
              className="block absolute h-[2px] w-full bg-current transform transition-all duration-300 ease-in-out"
              animate={{
                top: isMenuOpen ? "50%" : "30%",
                y: isMenuOpen ? "-50%" : "0%",
                rotate: isMenuOpen ? 45 : 0,
              }}
            />
            <motion.span
              className="block absolute h-[2px] w-full bg-current transform transition-all duration-300 ease-in-out"
              animate={{
                top: "50%",
                y: "-50%",
                opacity: isMenuOpen ? 0 : 1,
              }}
            />
            <motion.span
              className="block absolute h-[2px] w-full bg-current transform transition-all duration-300 ease-in-out"
              animate={{
                top: isMenuOpen ? "50%" : "70%",
                y: isMenuOpen ? "-50%" : "0%",
                rotate: isMenuOpen ? -45 : 0,
              }}
            />
          </motion.button>
        </div>
      </header>
      <AnimatePresence>
        {isMenuOpen && <NavigationMenu closeMenu={() => setMenuOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
