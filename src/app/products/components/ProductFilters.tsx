"use client";

import { cn } from "@/lib/utils";

const categories = ['ALL', 'CONES', 'CUPS', 'KULFI', 'STICKS', 'FAMILY PACKS', 'SUNDAES'];
const filters = ['CHOCOLATE', 'FRUIT', 'TRADITIONAL', 'PREMIUM', 'NUTTY', 'CLASSIC'];

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
  };

  const toggleFilter = (filter: string) => {
    setActiveFilters(
      activeFilters.includes(filter)
        ? activeFilters.filter(f => f !== filter)
        : [...activeFilters, filter]
    );
  };

  return (
    <section className="pb-8 sm:pb-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24">
        {/* Category tabs — horizontal scroll on mobile */}
        <nav className="flex items-center gap-1 overflow-x-auto no-scrollbar pb-4 border-b border-border">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => handleSetCategory(category)}
              className={cn(
                "px-4 py-2 text-[11px] sm:text-xs font-sans uppercase tracking-[0.15em] whitespace-nowrap rounded-full transition-all duration-200",
                activeCategory === category
                  ? 'bg-foreground text-background'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              {category}
            </button>
          ))}
        </nav>

        {/* Filter pills */}
        <div className="mt-4 flex items-center gap-2 flex-wrap">
          <span className="text-[10px] font-sans uppercase tracking-[0.3em] text-muted-foreground/50 mr-2">Filter:</span>
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => toggleFilter(filter)}
              className={cn(
                "px-3 py-1.5 text-[10px] font-sans uppercase tracking-[0.15em] border rounded-full transition-all duration-200",
                activeFilters.includes(filter)
                  ? 'border-gold bg-gold/10 text-foreground'
                  : 'border-border text-muted-foreground hover:border-foreground/30'
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
