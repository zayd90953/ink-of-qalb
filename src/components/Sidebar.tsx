import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const handleNav = (section?: string) => {
    onClose();
    navigate('/');

    if (section) {
      setTimeout(() => {
        const el = document.getElementById(section);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 200);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-40 transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      <div 
        className={`fixed top-0 right-0 h-full w-full md:w-[400px] bg-black border-l border-white/10 z-50 transform transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full p-8 md:p-12 relative">
          <button 
            onClick={onClose} 
            className="absolute top-8 right-8 text-white hover:text-gray-400 transition-colors"
          >
            <X size={32} />
          </button>

          <div className="mt-20 flex flex-col space-y-8">
            <nav className="flex flex-col space-y-6 text-3xl md:text-4xl font-serif font-light tracking-wide">
              
              <button onClick={() => handleNav()} className="text-left hover:pl-4 transition-all duration-300 hover:text-gray-300 text-white">
                Home
              </button>

              <button onClick={() => handleNav('products')} className="text-left hover:pl-4 transition-all duration-300 hover:text-gray-300 text-white">
                Collections
              </button>

              <button onClick={() => handleNav('about')} className="text-left hover:pl-4 transition-all duration-300 hover:text-gray-300 text-white">
                About Us
              </button>

              <button onClick={() => handleNav('contact')} className="text-left hover:pl-4 transition-all duration-300 hover:text-gray-300 text-white">
                Contact
              </button>

            </nav>
          </div>

          <div className="mt-auto border-t border-white/10 pt-8">
            <p className="text-sm text-gray-500 font-sans tracking-widest uppercase">
              Ink Of Qalb
            </p>
            <p className="text-xs text-gray-600 mt-2">
              © {new Date().getFullYear()}. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;