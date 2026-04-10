
'use client';
import { useState } from 'react';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { ProductsHero } from '@/app/products/components/ProductsHero';
import { ProductFilters } from '@/app/products/components/ProductFilters';
import { ProductGrid } from '@/app/products/components/ProductGrid';
import { PlaceHolderImages, ImagePlaceholder } from '@/lib/placeholder-images';

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const products = PlaceHolderImages.filter(p =>
    p.id.startsWith('product-cone-') ||
    p.id.startsWith('product-cup-') ||
    p.id.startsWith('product-kulfi-') ||
    p.id.startsWith('product-stick-') ||
    p.id.startsWith('product-family-') ||
    p.id.startsWith('product-sundae-')
  );

  const filteredProducts = products
    .filter(product => {
      if (activeCategory === 'ALL') return true;
      return product.category?.toUpperCase() === activeCategory;
    })
    .filter(product => {
      if (activeFilters.length === 0) return true;
      // Using `some` to check if at least one tag is in activeFilters
      return activeFilters.every(filter => product.tags?.map(t => t.toUpperCase()).includes(filter.toUpperCase()));
    });

  return (
    <div className="bg-background">
      <Header />
      <main>
        <ProductsHero />
        <ProductFilters 
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          activeFilters={activeFilters}
          setActiveFilters={setActiveFilters}
        />
        <ProductGrid products={filteredProducts} />
      </main>
      <Footer />
    </div>
  );
}
