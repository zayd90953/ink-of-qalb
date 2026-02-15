import React, { useState, useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

export default function NavigationWrapper() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Header 
        scrolled={scrolled} 
        onOpenMenu={() => setIsMenuOpen(true)} 
      />
      <Sidebar 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
      />
    </>
  );
}