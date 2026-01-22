"use client";

import { motion } from "framer-motion";
import { projects } from "@/data";
import Link from "next/link";
import { FaPlay } from "react-icons/fa";

export default function FeaturedProjects() {
  return (
    <section id="featured" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-2">Featured Projects</h2>
            <div className="w-20 h-1 bg-primary"></div>
          </motion.div>
          <Link href="#portfolio" className="hidden md:block text-primary hover:text-white transition-colors">
            View All Projects &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
            >
              <div className="aspect-w-16 aspect-h-9 h-[300px] md:h-[400px]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-primary text-sm uppercase tracking-wider mb-2">{project.category}</span>
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                <div className="flex items-center text-white">
                  <FaPlay className="mr-2 text-xs" /> View Project
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
             <Link href="#portfolio" className="text-primary hover:text-white transition-colors">
            View All Projects &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
