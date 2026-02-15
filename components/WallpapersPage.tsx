import React, { useState } from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { PRODUCTS, WALLPAPER_CATEGORIES } from '@/constants';

export default function WallpapersPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const wallpaperProducts = PRODUCTS.filter(p => p.category !== 'dua-book');

  const filteredWallpapers = activeCategory === 'all' 
    ? wallpaperProducts 
    : wallpaperProducts.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-black pt-32 pb-24 px-6 md:px-12 fade-enter-active">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-16">
          <a 
            href="/"
            className="group inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="uppercase tracking-widest text-xs">Back to Home</span>
          </a>

          <h1 className="font-serif text-4xl md:text-6xl text-white mb-6">Digital Wallpapers</h1>
          <p className="text-gray-400 font-light max-w-2xl">
            Explore our collection of high-resolution digital art, inspired by faith, geography, and nature.
          </p>
        </div>

        {/* Categories Tab */}
        <div className="flex flex-wrap gap-3 md:gap-4 mb-12 pb-4 border-b border-white/10">
          {WALLPAPER_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`text-xs md:text-sm font-sans tracking-widest uppercase px-5 py-2 rounded-full transition-all duration-300 border ${
                activeCategory === cat.id 
                  ? 'bg-white text-black border-white' 
                  : 'bg-transparent text-gray-500 border-white/10 hover:border-white/30 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredWallpapers.map((product) => (
             <a 
               key={product.id}
               href={product.link}
               target="_blank"
               rel="noopener noreferrer"
               className="group block relative overflow-hidden rounded-lg bg-gray-900 aspect-[9/16] border border-white/5 hover:border-white/20 transition-colors"
             >
                <img 
                  src={product.imageUrl} 
                  alt={product.title} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
                  loading="lazy"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                   <h3 className="font-serif text-white text-lg mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{product.title}</h3>
                   <div className="flex items-center gap-2 text-xs text-gray-300 uppercase tracking-wider translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                     <span>View Item</span>
                     <ExternalLink size={12} />
                   </div>
                </div>
             </a>
          ))}
        </div>

        {filteredWallpapers.length === 0 && (
          <div className="py-20 text-center text-gray-500 font-serif italic border border-dashed border-white/10 rounded-xl">
            No wallpapers found in this category yet.
          </div>
        )}

      </div>
    </div>
  );
}