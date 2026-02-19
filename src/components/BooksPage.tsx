import React, { useEffect, useState } from "react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { sanityClient } from "../sanityClient";

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
    sanityClient
      .fetch(
        `*[_type == "book"]{
          _id,
          title,
          link,
          image{
            asset->{
              url
            }
          }
        }`
      )
      .then((data) => {
        console.log("BOOKS FROM SANITY:", data);
        setBooks(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-black pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Back button */}
        <Link
          to="/"
          className="group inline-flex items-center gap-2 text-gray-400 hover:text-white mb-12 transition-colors"
        >
          <ArrowLeft size={18} />
          <span className="uppercase tracking-widest text-xs">Back to Home</span>
        </Link>

        <h1 className="font-serif text-4xl md:text-6xl text-white mb-12 text-center">
          Our Books
        </h1>

        {books.length === 0 && (
          <div className="text-center text-gray-500 italic">
            No books available yet.
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {books.map((book) => (
            <div
              key={book._id}
              className="border border-white/10 rounded-xl p-6 bg-white/5 flex flex-col items-center text-center"
            >
              <div className="w-full aspect-[3/4] mb-6 overflow-hidden rounded-lg">
                <img
                  src={book.image.asset.url}
                  alt={book.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              <h2 className="font-serif text-xl text-white mb-3">
                {book.title}
              </h2>

              <a
                href={book.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-white font-serif"
              >
                <span>Get your copy</span>
                <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}