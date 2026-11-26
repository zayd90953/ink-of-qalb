import React, { useEffect, useState } from "react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { sanityClient } from "../sanityClient";
import OptimizedImage from './OptimizedImage';

type Wallpaper = {
  _id: string;
  title: string;
  link: string;
  image: {
    asset: { url: string };
  };
  category: {
    title: string;
    slug: { current: string };
  };
};

export default function WallpapersPage() {
  const [wallpapers, setWallpapers] = useState<Wallpaper[]>([]);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    sanityClient
      .fetch(`
        *[_type == "wallpaper"]{
          _id,
          title,
          link,
          image{
            asset->{url}
          },
          category->{
            title,
            slug
          }
        }
      `)
      .then((data) => setWallpapers(data))
      .catch(console.error);
  }, []);

  const categories = [
    "all",
    ...new Set(wallpapers.map((w) => w.category?.slug?.current)),
  ];

  const filteredWallpapers =
    activeCategory === "all"
      ? wallpapers
      : wallpapers.filter(
          (w) => w.category?.slug?.current === activeCategory
        );

  return (
    <div className="min-h-screen bg-black pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <Link to="/" className="text-gray-400 hover:text-white mb-8 inline-flex gap-2">
          <ArrowLeft size={18} /> Back
        </Link>

        <h1 className="text-white text-4xl mb-6">Wallpapers</h1>

        <div className="flex gap-3 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs uppercase
                ${
                  activeCategory === cat
                    ? "bg-white text-black"
                    : "border border-white/20 text-white"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {filteredWallpapers.map((w) => (
            <a
              key={w._id}
              href={w.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <OptimizedImage
                src={w.image.asset.url}
                alt={w.title}
                width={600}
                height={400}
              />
              <p className="text-white mt-2">{w.title}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}