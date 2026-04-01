"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { GenAIStoryTool } from "@/components/GenAIStoryTool";

export function StorySection() {
  const storyImage = PlaceHolderImages.find((img) => img.id === "story-image");

  return (
    <section id="story" className="py-24 sm:py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative aspect-[4/5]"
          >
            {storyImage && (
              <Image
                src={storyImage.imageUrl}
                alt={storyImage.description}
                data-ai-hint={storyImage.imageHint}
                fill
                style={{ objectFit: 'cover' }}
              />
            )}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <h2 className="font-headline font-bold text-5xl sm:text-7xl">
              Craft &<br/>Curiosity
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-md">
              We believe in <span className="italic">the art of ice cream</span>. From <strong className="font-bold">single-origin vanilla</strong> to hand-picked fruits, <em className="font-medium">every scoop tells a story</em> of passion and the finest ingredients.
            </p>
            <div className="mt-12">
              <GenAIStoryTool />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
