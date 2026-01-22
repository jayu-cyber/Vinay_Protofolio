"use client";

import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3"
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
              Let's Create <br /><span className="text-primary">Magic</span>
            </h2>
            <p className="text-gray-400 mb-8">
              Ready to book your shoot? Have a question? Fill out the form or reach out directly.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-primary text-xl">
                  <FaWhatsapp />
                </div>
                <div>
                  <h4 className="text-white font-bold">WhatsApp</h4>
                  <a href="https://wa.me/918975256188" className="text-gray-400 hover:text-primary transition-colors">+91 8975256188</a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-primary text-xl">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="text-white font-bold">Email</h4>
                  <a href="mailto:dharmguttevinay@gmail.com" className="text-gray-400 hover:text-primary transition-colors">dharmguttevinay@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-primary text-xl">
                  <FaPhone />
                </div>
                <div>
                  <h4 className="text-white font-bold">Phone</h4>
                  <a href="tel:+918975256188" className="text-gray-400 hover:text-primary transition-colors">+91 8975256188</a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-2/3 bg-secondary p-8 rounded-lg"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-400 mb-2 text-sm uppercase tracking-wider">Name</label>
                  <input type="text" className="w-full bg-black border border-gray-800 p-3 text-white focus:border-primary focus:outline-none transition-colors" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2 text-sm uppercase tracking-wider">Email</label>
                  <input type="email" className="w-full bg-black border border-gray-800 p-3 text-white focus:border-primary focus:outline-none transition-colors" placeholder="Your Email" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-400 mb-2 text-sm uppercase tracking-wider">Phone</label>
                  <input type="tel" className="w-full bg-black border border-gray-800 p-3 text-white focus:border-primary focus:outline-none transition-colors" placeholder="Your Phone" />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2 text-sm uppercase tracking-wider">Event Date</label>
                  <input type="date" className="w-full bg-black border border-gray-800 p-3 text-white focus:border-primary focus:outline-none transition-colors" />
                </div>
              </div>

              <div>
                <label className="block text-gray-400 mb-2 text-sm uppercase tracking-wider">Service Type</label>
                <select className="w-full bg-black border border-gray-800 p-3 text-white focus:border-primary focus:outline-none transition-colors">
                  <option>Wedding Photography</option>
                  <option>Pre-wedding Shoot</option>
                  <option>Model Portfolio</option>
                  <option>Cinematography</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-400 mb-2 text-sm uppercase tracking-wider">Message</label>
                <textarea rows={4} className="w-full bg-black border border-gray-800 p-3 text-white focus:border-primary focus:outline-none transition-colors" placeholder="Tell me about your event..."></textarea>
              </div>

              <button type="submit" className="w-full bg-primary text-black font-bold py-4 uppercase tracking-widest hover:bg-white transition-colors duration-300">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
