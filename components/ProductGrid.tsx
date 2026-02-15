import React from 'react';
import { BookOpen, Image as ImageIcon, ArrowRight } from 'lucide-react';
import { Link } from "react-router-dom";

const ProductGrid: React.FC = () => {
  return (
    <section id="products" className="py-24 px-6 md:px-12 bg-black min-h-[50vh] flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">Our Collections</h2>
          <p className="text-gray-400 font-light tracking-wide">
            Select a category to explore our curated works.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <Link 
            to="/books"
            className="group relative h-96 overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:border-white/30 transition-all duration-500 text-left block"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
            <div className="absolute inset-0 p-10 flex flex-col justify-between z-10">
              <BookOpen className="w-12 h-12 text-white/80 group-hover:scale-110 transition-transform duration-500" />
              <div>
                <h3 className="text-3xl font-serif text-white mb-3">Dua & Reflections</h3>
                <p className="text-gray-400 font-sans text-sm tracking-wide mb-6 max-w-xs">
                  Spiritual companions and guidebooks for your journey.
                </p>
                <div className="flex items-center gap-3 text-white uppercase text-xs tracking-widest group-hover:gap-4 transition-all duration-300">
                  Browse Books <ArrowRight size={14} />
                </div>
              </div>
            </div>
          </Link>

          <Link 
            to="/wallpapers"
            className="group relative h-96 overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:border-white/30 transition-all duration-500 text-left block"
          >
            <div className="absolute inset-0 bg-gradient-to-bl from-gray-900 via-black to-gray-900 opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
            <div className="absolute inset-0 p-10 flex flex-col justify-between z-10">
              <ImageIcon className="w-12 h-12 text-white/80 group-hover:scale-110 transition-transform duration-500" />
              <div>
                <h3 className="text-3xl font-serif text-white mb-3">Digital Wallpapers</h3>
                <p className="text-gray-400 font-sans text-sm tracking-wide mb-6 max-w-xs">
                  High-resolution art pieces for your devices. Palestine, Sudan, Nature, and more.
                </p>
                <div className="flex items-center gap-3 text-white uppercase text-xs tracking-widest group-hover:gap-4 transition-all duration-300">
                  View Gallery <ArrowRight size={14} />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;