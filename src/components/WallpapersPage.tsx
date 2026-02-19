import React, { useEffect, useState } from "react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { sanityClient } from "../sanityClient";

type Wallpaper = {
  _id: string;
  title: string;
  image: {
    asset: {
      url: string;
    };
  };
  link: string;
  category: string;
};

export default function WallpapersPage() {
  const [wallpapers, setWallpapers] = useState<Wallpaper[]>([]);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "wallpaper"]{
          _id,
          title,
          link,
          category,
          image{
            asset->{
              url
            }
          }
        }`
      )
      .then((data) => {
        console.log("SANITY DATA:", data);
        setWallpapers(data);
      })
      .catch((err) => console.error(err));
  }, []);

  const categories = ["all", ...new Set(wallpapers.map(w => w.category))];

  const filteredWallpapers =
    activeCategory === "all"
      ? wallpapers
      : wallpapers.filter((w) => w.category === activeCategory);

  return (
    <div className="min-h-screen bg-black pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Back button */}
        <Link
          to="/"
          className="group inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft size={18} />
          <span className="uppercase tracking-widest text-xs">Back to Home</span>
        </Link>

        <h1 className="font-serif text-4xl md:text-6xl text-white mb-6">
          Digital Wallpapers
        </h1>
        <p className="text-gray-400 font-light max-w-2xl mb-12">
          Explore our collection of high-resolution digital art.
        </p>

        {/* Categories */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs uppercase tracking-widest px-5 py-2 rounded-full border transition-all
                ${
                  activeCategory === cat
                    ? "bg-white text-black border-white"
                    : "bg-transparent text-gray-500 border-white/10 hover:text-white"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Wallpapers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredWallpapers.map((wallpaper) => (
            <a
              key={wallpaper._id}
              href={wallpaper.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative overflow-hidden rounded-lg bg-gray-900 aspect-[9/16] border border-white/10"
            >
              <img
                src={wallpaper.image.asset.url}
                alt={wallpaper.title}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                <h3 className="text-white font-serif text-lg mb-1">
                  {wallpaper.title}
                </h3>
                <div className="flex items-center gap-2 text-xs text-gray-300 uppercase">
                  <span>View</span>
                  <ExternalLink size={12} />
                </div>
              </div>
            </a>
          ))}
        </div>

        {filteredWallpapers.length === 0 && (
          <div className="py-20 text-center text-gray-500 italic">
            No wallpapers found in this category.
          </div>
        )}

      </div>
    </div>
  );
}