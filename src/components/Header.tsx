import React from 'react';
import { Menu } from 'lucide-react';
import { Logo } from './Logo';

interface HeaderProps {
  scrolled: boolean;
  onOpenMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ scrolled, onOpenMenu }) => {
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-30 transition-all duration-700 ease-in-out px-6 py-5 md:px-12 flex items-center justify-between ${
        scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent'
      }`}
    >
      <a 
        href="#/"
        className={`flex items-center gap-3 transition-opacity duration-500 focus:outline-none ${scrolled ? 'opacity-100' : 'opacity-0'}`}
      >
         <Logo className="w-6 h-6 text-white" />
         <span className="font-serif text-xl tracking-widest font-bold text-white uppercase">Ink Of Qalb</span>
      </a>

      <button 
        onClick={onOpenMenu}
        className="group flex items-center gap-3 text-white focus:outline-none ml-auto"
      >
        <span className="hidden md:block font-sans text-xs tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Menu
        </span>
        <Menu size={28} strokeWidth={1.5} className="group-hover:scale-110 transition-transform duration-300" />
      </button>
    </header>
  );
};

export default Header;