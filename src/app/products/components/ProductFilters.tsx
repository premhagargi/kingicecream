
"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const categories = ['ICEPOPS', 'GELATO', 'ALL'];
const filters = ['CHOCOLATES', 'MILK CARAMEL', 'CREAMS', 'FRUITS', 'LUXURY', 'PLANT BASED'];

type ProductFiltersProps = {
    activeCategory: string;
    setActiveCategory: (category: string) => void;
    activeFilters: string[];
    setActiveFilters: (filters: string[]) => void;
};

export function ProductFilters({ activeCategory, setActiveCategory, activeFilters, setActiveFilters }: ProductFiltersProps) {
  
  const handleSetCategory = (category: string) => {
    setActiveCategory(category);
    setActiveFilters([]);
  }

  const toggleFilter = (filter: string) => {
    setActiveFilters(
        activeFilters.includes(filter) 
        ? activeFilters.filter(f => f !== filter)
        : [...activeFilters, filter]
    );
  };

  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Nav */}
        <nav className="flex justify-center items-center space-x-8 sm:space-x-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => handleSetCategory(category)}
              className={cn(
                "uppercase tracking-[0.2em] text-sm sm:text-base transition-colors duration-300",
                activeCategory === category ? 'text-foreground font-medium' : 'text-neutral-400 hover:text-foreground'
              )}
            >
              {category}
            </button>
          ))}
        </nav>

        {/* Filter Pills */}
        <div className="mt-8 flex justify-center items-center flex-wrap gap-2 sm:gap-3">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => toggleFilter(filter)}
              className={cn(
                "px-4 py-2 text-xs sm:text-sm font-medium uppercase tracking-widest border border-foreground rounded-full transition-colors duration-300 ease-in-out",
                activeFilters.includes(filter) ? 'bg-foreground text-background' : 'bg-transparent text-foreground hover:bg-foreground hover:text-background'
              )}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
