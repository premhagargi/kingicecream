"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import { NavigationMenu } from "./NavigationMenu";
import { TransitionLink } from "./TransitionLink";

export function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [ready, setReady] = useState(() => {
    if (typeof window !== "undefined") {
      return sessionStorage.getItem("header-logo-ready") === "true";
    }
    return false;
  });
  const [scrolledDown, setScrolledDown] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    if (ready) return;
    const timer = setTimeout(() => {
      setReady(true);
      sessionStorage.setItem("header-logo-ready", "true");
    }, 6000);
    return () => clearTimeout(timer);
  }, [ready]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolledDown(latest > 50);
  });

  const showLogo = ready && !scrolledDown && !isMenuOpen;

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="flex justify-between items-center px-6 sm:px-10 md:px-16 lg:px-24 py-5 sm:py-6">
          <TransitionLink href="/" className="relative z-10">
            <motion.div
              animate={{ opacity: showLogo ? 1 : 0, y: showLogo ? 0 : -10 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="cursor-pointer drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
              style={{ pointerEvents: showLogo ? "auto" : "none" }}
            >
              <Image
                src="/images/logos/king logo.png"
                alt="King Ice Cream"
                width={250}
                height={100}
                className="h-20 sm:h-24 md:h-28 w-auto object-contain"
                priority
              />
            </motion.div>
          </TransitionLink>

          <motion.button
            onClick={toggleMenu}
            className="relative w-8 h-5 z-20 flex flex-col justify-between"
            aria-label="Toggle Menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.span
              className="block h-[2px] bg-white shadow-[0_0_4px_rgba(0,0,0,0.6)] origin-left"
              animate={{
                width: isMenuOpen ? "100%" : "100%",
                rotate: isMenuOpen ? 45 : 0,
                y: isMenuOpen ? -1 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block h-[2px] bg-white shadow-[0_0_4px_rgba(0,0,0,0.6)]"
              animate={{
                width: isMenuOpen ? 0 : "60%",
                opacity: isMenuOpen ? 0 : 1,
              }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block h-[2px] bg-white shadow-[0_0_4px_rgba(0,0,0,0.6)] origin-left"
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
