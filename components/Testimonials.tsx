"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data";
import { FaQuoteLeft } from "react-icons/fa";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">Client Love</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-black p-8 rounded-lg border border-gray-800 relative"
            >
              <FaQuoteLeft className="text-primary text-3xl mb-4 opacity-50" />
              <p className="text-gray-300 italic mb-6">"{testimonial.quote}"</p>
              <div>
                <h4 className="text-white font-bold">{testimonial.name}</h4>
                <p className="text-primary text-sm uppercase tracking-wider">{testimonial.event}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
