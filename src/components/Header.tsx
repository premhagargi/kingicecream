"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavigationMenu } from "./NavigationMenu";
import { TransitionLink } from "./TransitionLink";

export function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
        <div className="flex justify-between items-center px-6 sm:px-10 md:px-16 lg:px-24 py-5 sm:py-6">
          <TransitionLink href="/">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="font-display font-bold text-sm sm:text-base uppercase tracking-[0.2em] text-white cursor-pointer"
            >
              King
            </motion.div>
          </TransitionLink>

          <motion.button
            onClick={toggleMenu}
            className="relative w-7 h-5 text-white z-20 flex flex-col justify-between"
            aria-label="Toggle Menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.span
              className="block h-[1px] bg-current origin-left"
              animate={{
                width: isMenuOpen ? "100%" : "100%",
                rotate: isMenuOpen ? 45 : 0,
                y: isMenuOpen ? -1 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block h-[1px] bg-current"
              animate={{
                width: isMenuOpen ? 0 : "60%",
                opacity: isMenuOpen ? 0 : 1,
              }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block h-[1px] bg-current origin-left"
              animate={{
                width: isMenuOpen ? "100%" : "80%",
                rotate: isMenuOpen ? -45 : 0,
                y: isMenuOpen ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
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
