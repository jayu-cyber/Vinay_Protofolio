"use client";

import { useState, useEffect } from "react";
import Masonry from "react-masonry-css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { galleryImages } from "@/data";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Wedding", "Pre-wedding", "Model", "Films"];
const IMAGES_PER_PAGE = 12;

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [index, setIndex] = useState(-1);
  const [displayCount, setDisplayCount] = useState(IMAGES_PER_PAGE);
  const [isLoading, setIsLoading] = useState(false);

  const filteredImages =
    filter === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);

  const displayedImages = filteredImages.slice(0, displayCount);

  // Reset display count and scroll when filter changes
  const handleFilterChange = (cat: string) => {
    setFilter(cat);
    setDisplayCount(IMAGES_PER_PAGE);
  };

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setDisplayCount(displayCount + IMAGES_PER_PAGE);
      setIsLoading(false);
    }, 300);
  };

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <section id="portfolio" className="py-20 bg-black relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
            Portfolio <span className="text-primary">Gallery</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-primary to-yellow-500 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg mb-10">Showcase of my finest work</p>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat, catIndex) => (
              <motion.button
                key={cat}
                onClick={() => handleFilterChange(cat)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: catIndex * 0.1 }}
                className={`px-6 py-2 rounded-full text-sm uppercase tracking-wider font-semibold transition-all duration-300 ${
                  filter === cat
                    ? "bg-primary text-black shadow-lg shadow-primary/50 scale-105"
                    : "bg-gray-900 text-gray-300 hover:text-white border border-gray-700 hover:border-primary"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid flex w-auto -ml-4"
          columnClassName="my-masonry-grid_column pl-4 bg-clip-padding"
        >
          {displayedImages.map((img, i) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              key={i}
              className="mb-4 overflow-hidden rounded-xl cursor-pointer group"
              onClick={() => setIndex(i)}
            >
              <div className="relative bg-gray-900 aspect-auto overflow-hidden rounded-xl shadow-lg">
                <img
                  src={img.src}
                  alt={`Gallery image ${i + 1}`}
                  className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-110 brightness-90 group-hover:brightness-100"
                  loading="lazy"
                />
                {/* Overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-semibold">Click to view</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </Masonry>
        </AnimatePresence>

        {displayCount < filteredImages.length && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mt-16"
          >
            <button
              onClick={handleLoadMore}
              disabled={isLoading}
              className="group relative px-8 py-3 bg-primary text-black font-bold rounded-full hover:bg-yellow-500 transition-all duration-300 uppercase tracking-wider shadow-lg hover:shadow-primary/50 disabled:opacity-50"
            >
              <div className="flex items-center gap-2">
                {isLoading ? (
                  <>
                    <span className="inline-block w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                    Loading...
                  </>
                ) : (
                  <>
                    Load More
                    <span className="group-hover:translate-y-0.5 transition-transform">↓</span>
                  </>
                )}
              </div>
            </button>
          </motion.div>
        )}

        {filteredImages.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-400 text-lg">No images found in this category.</p>
          </motion.div>
        )}

        <Lightbox
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          slides={filteredImages.map((img) => ({ src: img.src }))}
        />
      </div>
    </section>
  );
}
