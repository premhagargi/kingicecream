"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { Play } from "lucide-react";
import { useRef, useState } from "react";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ended, setEnded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  const replay = () => {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = 0;
    v.play();
    setEnded(false);
  };

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-black"
    >
      {/* Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        onEnded={() => setEnded(true)}
        className="absolute inset-0 w-full h-full object-cover object-[center_60%]"
      >
        <source src="/videos/herovideo1.mp4" type="video/mp4" />
      </video>

      {/* End-of-video overlay */}
      <AnimatePresence>
        {ended && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 flex items-center justify-center bg-black/40 px-6 text-center"
          >
            <div className="max-w-3xl">
              <h1 className="font-headline text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
                A Scoop of Happiness
              </h1>
              <p className="mt-4 text-base md:text-lg text-white/85">
                Crafted with love. Served with joy.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Corner replay button */}
      <AnimatePresence>
        {ended && (
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            onClick={replay}
            aria-label="Replay video"
            className="absolute bottom-6 right-6 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md border border-white/25 hover:bg-white/25 transition-colors"
          >
            <Play className="h-5 w-5 fill-white" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Gradient overlay — fades in on scroll to transition to next section */}
      <motion.div
        className="absolute inset-0 bg-black pointer-events-none"
        style={{ opacity }}
      />
    </section>
  );
}
