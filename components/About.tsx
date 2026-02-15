import React from 'react';
import { Logo } from './Logo';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 bg-black border-t border-white/5 relative overflow-hidden">
       {/* Background Decoration */}
       <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>

       <div className="max-w-4xl mx-auto text-center md:text-left flex flex-col md:flex-row items-center gap-12 md:gap-24">
         <div className="flex-shrink-0">
            <div className="w-48 h-48 md:w-64 md:h-64 border border-white/20 rounded-full flex items-center justify-center p-8 relative">
               <div className="absolute inset-0 border border-white/10 rounded-full scale-110"></div>
               <Logo className="w-full h-full text-white/80" />
            </div>
         </div>
         
         <div>
           <h2 className="font-serif text-4xl md:text-6xl text-white mb-8">The Essence</h2>
           <div className="space-y-6 text-gray-400 text-lg font-sans font-light leading-relaxed">
             <p>
               <strong className="text-white font-serif">Ink Of Qalb</strong> is more than a brand; it is a manifestation of inner silence and loud expression. Born from the desire to merge traditional calligraphy aesthetics with modern minimalist design.
             </p>
             <p>
               Every piece curated in our collection tells a story of devotion, patience, and the timeless beauty of the written word. We connect you directly with creators and platforms that value quality over quantity.
             </p>
             <p>
               Explore our gallery, find what speaks to your heart (Qalb), and let the ink flow into your life.
             </p>
           </div>
         </div>
       </div>
    </section>
  );
};

export default About;