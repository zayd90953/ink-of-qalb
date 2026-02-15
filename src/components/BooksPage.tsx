import React from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { Link } from "react-router-dom";

export default function BooksPage() {
  const ramadanBook = PRODUCTS.find(p => p.title === 'My Ramadhan Essentials');

  return (
    <div className="min-h-screen bg-black pt-32 pb-24 px-6 md:px-12 fade-enter-active">
      <div className="max-w-7xl mx-auto">
        
        {/* Back Navigation */}
        <Link
          to="/"
          className="group inline-flex items-center gap-2 text-gray-400 hover:text-white mb-12 transition-colors"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="uppercase tracking-widest text-xs">Back to Home</span>
        </Link>

        {/* --- SPOTLIGHT SECTION --- */}
        {ramadanBook && (
          <div className="relative mb-32">
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
             
             <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
                {/* Book Image */}
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                   <div className="relative w-full max-w-md aspect-[3/4] rounded-lg overflow-hidden shadow-2xl shadow-white/5 border border-white/10 group">
                      <img 
                        src={ramadanBook.imageUrl} 
                        alt={ramadanBook.title} 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                   </div>
                </div>

                {/* Book Details */}
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                   <span className="inline-block py-1 px-3 border border-white/20 rounded-full text-xs uppercase tracking-[0.2em] text-gray-300 mb-6">
                     In The Spotlight
                   </span>
                   
                   <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-8 leading-tight">
                     {ramadanBook.title}
                   </h1>

                   <p className="font-sans text-gray-400 text-lg leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0 font-light">
                     The Ramadan Essentials is a thoughtfully curated digital companion designed to guide you through the holy month with grace and intention. It offers a gentle space to ground your heart through essential prayers, daily Duas, and spiritual reflections that transform every moment into a meaningful connection with the Almighty Allah ﷻ.
                   </p>

                   <a 
                     href={ramadanBook.link}
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="group inline-flex items-center gap-3 text-xl text-white font-serif relative"
                   >
                     <span>Get your copy</span>
                     <ExternalLink size={18} className="opacity-70 group-hover:opacity-100 transition-opacity" />
                     <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-hover:w-full"></span>
                   </a>
                </div>
             </div>
          </div>
        )}

        {/* --- OTHER BOOKS SECTION --- */}
        <div className="border-t border-white/10 pt-24">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-12 text-center">Other Collections</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-50">
             {[1, 2, 3].map((item) => (
                <div key={item} className="border border-white/10 rounded-xl p-8 bg-white/5 flex flex-col items-center text-center h-80 justify-center group hover:bg-white/10 transition-colors cursor-not-allowed">
                   <div className="w-16 h-20 border-2 border-dashed border-gray-600 mb-4 rounded flex items-center justify-center">
                     <span className="text-2xl text-gray-600">+</span>
                   </div>
                   <h3 className="font-serif text-xl text-gray-500 mb-2">Coming Soon</h3>
                   <p className="text-xs text-gray-600 uppercase tracking-widest">More titles in progress</p>
                </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
}
