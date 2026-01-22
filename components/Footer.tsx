import Link from "next/link";
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-secondary py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 text-center">
        <Link href="/" className="text-3xl font-serif font-bold text-primary tracking-widest block mb-6">
          Professional Photographer
        </Link>
        
        <div className="flex justify-center space-x-6 mb-8">
          <a href="#" className="text-gray-400 hover:text-white transition-colors text-xl">
            <FaInstagram />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors text-xl">
            <FaFacebookF />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors text-xl">
            <FaTwitter />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors text-xl">
            <FaYoutube />
          </a>
        </div>

        <div className="text-gray-500 text-sm space-y-2">
          <p>&copy; {new Date().getFullYear()} Vinay Portfolio. All rights reserved.</p>
          <p>Designed with <span className="text-red-500">♥</span> for Photographers</p>
        </div>
      </div>
    </footer>
  );
}
