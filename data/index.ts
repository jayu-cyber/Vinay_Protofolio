import { FaCamera, FaFilm, FaRing, FaUserFriends } from "react-icons/fa";

export const services = [
  {
    id: 1,
    title: "Wedding Photography",
    description: "Capturing the magic of your special day with cinematic flair and emotional depth.",
    price: "Starting at $1,500",
    icon: FaRing,
  },
  {
    id: 2,
    title: "Pre-wedding Shoots",
    description: "Romantic and creative shoots to tell your love story before the big day.",
    price: "Starting at $500",
    icon: FaUserFriends,
  },
  {
    id: 3,
    title: "Model Portfolios",
    description: "High-fashion and portrait photography for aspiring and professional models.",
    price: "Starting at $300",
    icon: FaCamera,
  },
  {
    id: 4,
    title: "Cinematography",
    description: "Cinematic wedding films and storytelling that brings your memories to life.",
    price: "Starting at $2,000",
    icon: FaFilm,
  },
];

export const projects = [
  {
    id: 1,
    title: "The Royal Wedding",
    category: "Wedding",
    image: "/images/wed.JPG",
    description: "A grand celebration of love.",
  },
  {
    id: 2,
    title: "Sunset Romance",
    category: "Pre-wedding",
    image: "/images/pre.JPG",
    description: "Golden hour moments.",
  },
  {
    id: 3,
    title: "Elegant Moments",
    category: "Wedding",
    image: "/images/wed2.JPG",
    description: "Candid smiles and timeless vows.",
  },
];

export const galleryImages = [
  // Wedding Images
  { src: "/images/wed.JPG", category: "Wedding" },
  { src: "/images/wed2.JPG", category: "Wedding" },
  { src: "/images/wed5.JPG", category: "Wedding" },
  { src: "/images/wed6.JPG", category: "Wedding" },
  { src: "/images/wed121.JPG", category: "Wedding" },
  { src: "/images/wed2132.JPG", category: "Wedding" },
  { src: "/images/wed2212.JPG", category: "Wedding" },
  { src: "/images/wed2322.JPG", category: "Wedding" },

  // Pre-wedding Images
  { src: "/images/pre.JPG", category: "Pre-wedding" },
  { src: "/images/pre2.JPG", category: "Pre-wedding" },
  { src: "/images/pre3.JPG", category: "Pre-wedding" },
  { src: "/images/pre5.JPG", category: "Pre-wedding" },
  { src: "/images/pre8.JPG", category: "Pre-wedding" },
  { src: "/images/pre9.JPG", category: "Pre-wedding" },
  { src: "/images/pre32.JPG", category: "Pre-wedding" },
];

export const testimonials = [
  {
    id: 1,
    name: "Emily & James",
    quote: "Vinay captured our day perfectly. The photos are like scenes from a movie!",
    event: "Wedding",
  },
  {
    id: 2,
    name: "Sophia L.",
    quote: "The best portfolio shoot I've ever had. Highly professional and creative.",
    event: "Model Shoot",
  },
  {
    id: 3,
    name: "Rahul & Priya",
    quote: "Our pre-wedding film is absolutely stunning. We watch it all the time.",
    event: "Pre-wedding",
  },
];

export const faqs = [
  {
    question: "What is your delivery timeline?",
    answer: "For weddings, we deliver the full gallery within 4-6 weeks. For smaller shoots, it takes 1-2 weeks.",
  },
  {
    question: "Do you provide raw files?",
    answer: "We do not provide RAW files as the editing process is a crucial part of our artistic style.",
  },
  {
    question: "Do you travel for shoots?",
    answer: "Yes! We are available worldwide. Travel fees may apply depending on the location.",
  },
  {
    question: "How do we book you?",
    answer: "You can reach out via the contact form or WhatsApp. A 50% deposit is required to secure your date.",
  },
];
