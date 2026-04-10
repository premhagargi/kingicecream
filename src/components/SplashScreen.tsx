"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function SplashScreen({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hasVisited = sessionStorage.getItem("king-splash-shown");
      if (!hasVisited) {
        setShowSplash(true);
        sessionStorage.setItem("king-splash-shown", "true");
        const timer = setTimeout(() => {
          setShowSplash(false);
        }, 2800);
        return () => clearTimeout(timer);
      } else {
        setIsComplete(true);
      }
    }
  }, []);

  useEffect(() => {
    if (!showSplash && !isComplete) {
      const timer = setTimeout(() => setIsComplete(true), 600);
      return () => clearTimeout(timer);
    }
  }, [showSplash, isComplete]);

  const letters = "KING".split("");

  return (
    <>
      <AnimatePresence>
        {showSplash && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Gold line above text */}
            <div className="flex flex-col items-center">
              <motion.div
                className="h-[2px] bg-gold mb-6"
                initial={{ width: 0 }}
                animate={{ width: 120 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              />

              {/* KING letters */}
              <div className="flex">
                {letters.map((letter, i) => (
                  <motion.span
                    key={i}
                    className="font-display text-4xl sm:text-6xl md:text-[10rem] text-white tracking-[0.15em] sm:tracking-widest"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.4 + i * 0.15,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>

              {/* Subtitle */}
              <motion.p
                className="font-serif italic text-gold text-lg sm:text-xl mt-4 tracking-[0.3em]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.4 }}
              >
                ICE CREAM
              </motion.p>

              {/* Bottom gold line */}
              <motion.div
                className="h-[2px] bg-gold mt-6"
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ duration: 0.6, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={!isComplete ? { opacity: 0 } : false}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {children}
      </motion.div>
    </>
  );
}
