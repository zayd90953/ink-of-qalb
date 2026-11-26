import React, { useState, useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import CookieConsent from './CookieConsent';

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
      <a href="#main-content" className="absolute -top-10 left-2 bg-white text-black px-4 py-2 z-[100] transition-all duration-200 hover:top-2 focus:top-2">
        Skip to main content
      </a>
      <Header
        scrolled={scrolled}
        onOpenMenu={() => setIsMenuOpen(true)}
      />
      <Sidebar
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
      <CookieConsent />
    </>
  );
}