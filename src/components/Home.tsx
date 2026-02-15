import React from 'react';
import Hero from './Hero';
import ProductGrid from './ProductGrid';
import About from './About';
import Contact from './Contact';

export default function Home() {
  return (
    <div>
      <Hero />
      <ProductGrid />
      <About />
      <Contact />
    </div>
  );
}
