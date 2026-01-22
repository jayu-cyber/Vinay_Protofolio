"use client";

import { motion } from "framer-motion";
import { services } from "@/data";

export default function Services() {
  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-black p-8 rounded-lg border border-gray-800 hover:border-primary transition-colors duration-300 group"
            >
              <div className="text-primary text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">{service.description}</p>
              <p className="text-primary font-semibold">{service.price}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
