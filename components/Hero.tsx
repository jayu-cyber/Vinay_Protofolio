"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image/Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/45 z-10" /> {/* Overlay */}
        <img
          src="/images/background.jpeg"
          alt="Hero Background"
          className="w-full h-full object-cover blur-sm"
        />
      </div>

      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-300 text-lg md:text-xl tracking-[0.2em] uppercase mb-4"
        >
          Capturing Moments, Creating Memories
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight"
        >
          VINAY <span className="text-primary">STUDIOS</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          <Link
            href="#portfolio"
            className="px-8 py-3 bg-primary text-black font-semibold uppercase tracking-wider hover:bg-white transition-colors duration-300"
          >
            View Portfolio
          </Link>
          <Link
            href="#contact"
            className="px-8 py-3 border border-white text-white font-semibold uppercase tracking-wider hover:bg-white hover:text-black transition-colors duration-300"
          >
            Book a Shoot
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
