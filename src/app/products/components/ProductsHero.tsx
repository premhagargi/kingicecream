
"use client";

export function ProductsHero() {
  return (
    <section className="bg-light-gray py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
        <span 
          className="text-[30vw] sm:text-[25vw] md:text-[20vw] font-headline text-black/5 select-none leading-none"
          style={{ textShadow: '0 0 1px transparent' }} // Anti-aliasing fix
        >
          ENJOY IT
        </span>
      </div>
      <div className="relative z-10 text-center px-4">
        <h2 className="font-serif font-bold text-base sm:text-lg uppercase tracking-[0.3em] text-neutral-600">
          Discover Our
        </h2>
        <h1 className="font-headline font-bold text-7xl sm:text-9xl md:text-[10rem] mt-2 text-foreground">
          Products
        </h1>
      </div>
    </section>
  );
}
