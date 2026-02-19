import React, { useEffect, useState } from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from "react-router-dom";
import { sanityClient } from '../sanityClient';

type Book = {
  _id: string;
  title: string;
  link: string;
  image: {
    asset: {
      url: string;
    };
  };
};

export default function BooksPage() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    sanityClient.fetch(`*[_type == "book"]{
      _id,
      title,
      link,
      image{
        asset->{url}
      }
    }`).then((data) => {
      setBooks(data);
    });
  }, []);

  const spotlightBook = books[0];
  const otherBooks = books.slice(1);

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
        {spotlightBook && (
          <div className="relative mb-32">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
              
              {/* Book Image */}
              <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                <div className="relative w-full max-w-md aspect-[3/4] rounded-lg overflow-hidden shadow-2xl shadow-white/5 border border-white/10 group">
                  <img 
                    src={spotlightBook.image.asset.url} 
                    alt={spotlightBook.title} 
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
                  {spotlightBook.title}
                </h1>

                <p className="font-sans text-gray-400 text-lg leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0 font-light">
                  A thoughtfully curated digital companion designed to guide your spiritual journey.
                </p>

                <a 
                  href={spotlightBook.link}
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
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-12 text-center">
            Other Collections
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherBooks.map((book) => (
              <div 
                key={book._id} 
                className="border border-white/10 rounded-xl p-6 bg-white/5 flex flex-col items-center text-center hover:bg-white/10 transition-colors"
              >
                <img 
                  src={book.image.asset.url} 
                  alt={book.title}
                  className="w-40 h-56 object-cover rounded mb-4"
                />
                <h3 className="font-serif text-xl text-white mb-3">{book.title}</h3>
                <a 
                  href={book.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-300 hover:text-white underline"
                >
                  View Book
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}