"use client";

import { StackedScrollSections, type StackedSlide } from "@/components/StackedScrollSections";
import { HeroOverlay, StoryOverlay, ProductsOverlay, ScrollOnlyOverlay } from "@/components/home/HomeSlides";

const UNSPLASH = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1920&q=80`;

const homeSlides: StackedSlide[] = [
  {
    image: UNSPLASH("1500382017468-9049fed747ef"),
    alt: "A scenic winding road through sunlit hills — discover your ice cream destination",
    priority: true,
    content: (p) => <HeroOverlay progress={p.progress} />,
  },
  {
    image: UNSPLASH("1488900128323-21503983a07e"),
    alt: "Every scoop tells a story",
    content: (p) => <StoryOverlay progress={p.progress} />,
  },
  {
    image: UNSPLASH("1506905925346-21bda4d32df4"),
    alt: "Scenic landscape",
    content: <ScrollOnlyOverlay />,
  },
  {
    image: UNSPLASH("1497034825429-c343d7c6a68f"),
    alt: "Exquisite ice creams, exotic ingredients",
    content: (p) => <ProductsOverlay progress={p.progress} />,
  },
  {
    image: UNSPLASH("1502602898657-3e91760cbb34"),
    alt: "Tropical destination",
    content: <ScrollOnlyOverlay />,
  },
  {
    image: UNSPLASH("1567206563064-6f60f40a2b57"),
    alt: "Closing scene",
  },
];

export function HomeStack() {
  return <StackedScrollSections slides={homeSlides} />;
}
