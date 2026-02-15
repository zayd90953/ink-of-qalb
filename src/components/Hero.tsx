import React, { useEffect, useState } from 'react';
import { Logo } from './Logo';

const Hero: React.FC = () => {
  const [animationStage, setAnimationStage] = useState(0);

  useEffect(() => {
    // Stage 1: Text Fade In
    const t1 = setTimeout(() => setAnimationStage(1), 500);
    // Stage 2: Logo Fade In
    const t2 = setTimeout(() => setAnimationStage(2), 2000);
    
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <section 
      id="home" 
      className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1764993659958-61a1956b8cac?q=80&w=1934&auto=format&fit=crop" 
          alt="Ink Of Qalb Hero Background" 
          className="w-full h-full object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20"></div>
      </div>

      <div className="z-10 flex flex-col items-center text-center px-4">
        <h1 
          className={`font-serif text-5xl md:text-7xl lg:text-9xl tracking-widest text-white uppercase transition-all duration-1000 ease-out transform ${
            animationStage >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Ink Of Qalb
        </h1>
        
        <p className={`mt-6 font-sans text-sm md:text-base tracking-[0.3em] text-gray-200 uppercase transition-all duration-1000 delay-300 ${
           animationStage >= 1 ? 'opacity-100' : 'opacity-0'
        }`}>
          Where Art Meets Soul
        </p>

        <div 
          className={`mt-12 transition-all duration-1000 delay-500 ease-out transform ${
            animationStage >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
        >
          <Logo className="w-24 h-24 md:w-32 md:h-32 text-white/90 animate-pulse-slow" />
        </div>

        <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-opacity duration-1000 delay-1000 ${
            animationStage >= 2 ? 'opacity-60' : 'opacity-0'
        }`}>
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white to-transparent opacity-50 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;