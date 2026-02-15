'use client';

import React from 'react';
import { Instagram, Facebook, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-white text-black">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          <div>
            <h2 className="font-serif text-5xl md:text-7xl mb-8 tracking-tighter">Get In Touch</h2>
            <p className="text-lg font-light text-gray-800 mb-12 max-w-sm">
              Collaborations, inquiries, or just to say hello. We are always listening.
            </p>
            
            <div className="space-y-4">
              <a href="mailto:inkofqalb@gmail.com" className="flex items-center gap-4 text-xl font-serif hover:text-gray-600 transition-colors">
                <Mail size={24} />
                <span>inkofqalb@gmail.com</span>
              </a>
              <div className="flex gap-6 mt-8">
                <a 
                  href="https://www.instagram.com/inkofqalb" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 border border-black rounded-full hover:bg-black hover:text-white transition-colors duration-300"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="#" 
                  className="p-3 border border-black rounded-full hover:bg-black hover:text-white transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-end">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="relative border-b border-black/20 focus-within:border-black transition-colors">
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="w-full bg-transparent py-4 text-xl outline-none placeholder:text-gray-400"
                />
              </div>
              <div className="relative border-b border-black/20 focus-within:border-black transition-colors">
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full bg-transparent py-4 text-xl outline-none placeholder:text-gray-400"
                />
              </div>
              <div className="relative border-b border-black/20 focus-within:border-black transition-colors">
                <textarea 
                  rows={3}
                  placeholder="Message" 
                  className="w-full bg-transparent py-4 text-xl outline-none placeholder:text-gray-400 resize-none"
                />
              </div>
              <button className="w-full md:w-auto bg-black text-white px-10 py-4 text-sm uppercase tracking-widest hover:bg-gray-900 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-black/10 flex flex-col md:flex-row justify-between items-center text-xs uppercase tracking-widest text-gray-500">
          <p>© {new Date().getFullYear()} Ink Of Qalb.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-black">Privacy</a>
            <a href="#" className="hover:text-black">Terms</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;