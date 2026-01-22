"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-20">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <div className="relative group">
              {/* Decorative border */}
              <div className="absolute -top-6 -left-6 w-full h-full border-2 border-primary/30 rounded-lg z-0 group-hover:border-primary transition-colors duration-300"></div>
              
              {/* Main image with enhanced styling */}
              <div className="relative z-10 overflow-hidden rounded-lg shadow-2xl">
                <img
                  src="/images/hero.jpeg"
                  alt="Vinay Photographer"
                  className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-serif font-bold text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              About <span className="text-primary">Me</span>
            </motion.h2>

            <div className="space-y-6">
              <motion.p 
                className="text-gray-300 text-lg leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Hello! I'm Vinay, a passionate photographer and cinematographer. I believe that every picture has a story to tell, and my goal is to capture your unique story through my lens.
              </motion.p>

              <motion.p 
                className="text-gray-300 text-lg leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                With over 2 years of experience in wedding and lifestyle photography, I strive to create timeless, cinematic images that you will cherish forever. My style is a blend of candid emotion and artistic composition.
              </motion.p>
            </div>
            
            {/* Stats Section */}
            <motion.div 
              className="grid grid-cols-3 gap-6 mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              {[
                { number: "500+", label: "Shoots Completed" },
                { number: "50+", label: "Weddings Covered" },
                { number: "2yr", label: "Experience" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 rounded-lg bg-gradient-to-b from-primary/10 to-transparent border border-primary/20 hover:border-primary/50 transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</h3>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
