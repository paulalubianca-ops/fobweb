import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, ChevronLeft, ChevronRight } from 'lucide-react';

const HERO_IMAGES = [
  "https://media.base44.com/images/public/69b84f0f01a311431532ce14/7174e6de7_Robertantonphoto-7791.jpg",
  "https://media.base44.com/images/public/69b84f0f01a311431532ce14/7a97a8e3c_25NovFOTBarcelona79.jpg",
  "https://media.base44.com/images/public/69b84f0f01a311431532ce14/ca1e9810a_Robertantonphoto-7687.jpg",
  "https://media.base44.com/images/public/69b84f0f01a311431532ce14/bd2fea283_Robertantonphoto-7754.jpg",
  "https://media.base44.com/images/public/69b84f0f01a311431532ce14/fb2821b8a_25NovFOTBarcelona56.jpg",
];

const PARTNERS = [
  { src: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/6911f0f176679762610ef895_EHL_Logo.png", alt: "EHL" },
  { src: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/69aff3082887af64e2308f48_UoE_Stacked%20Logo_CMYK_v1_160215.png", alt: "University of Edinburgh" },
  { src: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/69aff953f8acb7b6e95352e5_geneva-logo.webp", alt: "Geneva Business School" },
  { src: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/6941378b091e74a8be0c1c01_GTA%20LOGO.png", alt: "Garage Tech Academy" },
  { src: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/688cbefcced78070f25ff145_aticcolab-pos.png", alt: "Aticco Lab" },
];

export default function HeroSection() {
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImgIndex(i => (i + 1) % HERO_IMAGES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 overflow-hidden" aria-label="Hero">



      {/* Main content */}
      <div className="max-w-6xl mx-auto px-6 pt-28 pb-16 min-h-screen flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold leading-none tracking-tight mb-6 text-teal-900">
              Create.<br />
              Disrupt.<br />
              <span className="text-teal-500">Repeat!</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 max-w-lg mb-3 leading-relaxed">
              We empower the next-gen of entrepreneurs with real-world experiences, startup challenges, and access to an international network of founders, experts, and like-minded builders.
            </p>

            <p className="text-base text-slate-400 italic mb-10">
              Validate your ideas, build connections, and grow with us!
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/Apply"
                className="inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-bold px-8 py-3.5 rounded-full transition-all text-sm tracking-wide shadow-lg shadow-teal-500/20"
              >
                Join Us!
              </Link>
              <Link
                to="/About"
                className="inline-flex items-center justify-center gap-2 border border-teal-300 hover:border-teal-500 text-teal-700 px-8 py-3.5 rounded-full transition-all text-sm font-medium bg-white/50"
              >
                Who we are
              </Link>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-5">
              <a href="https://linkedin.com/company/friends-of-bata" target="_blank" rel="noopener noreferrer" aria-label="Connect on LinkedIn"
                className="w-9 h-9 rounded-full bg-white/70 hover:bg-white border border-teal-200 flex items-center justify-center text-teal-700 transition-all shadow-sm">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://www.tiktok.com/@friendsofbata" target="_blank" rel="noopener noreferrer" aria-label="Follow us on TikTok"
                className="w-9 h-9 rounded-full bg-white/70 hover:bg-white border border-teal-200 flex items-center justify-center text-teal-700 transition-all shadow-sm">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
                </svg>
              </a>
            </div>

            {/* Trust bar */}
            <div className="mt-14 pt-8 border-t border-teal-200/60">
              <p className="text-xs text-slate-400 uppercase tracking-widest mb-5" id="partners-label">Trusted by students at</p>
              <div className="flex items-center gap-6 flex-wrap" role="list" aria-labelledby="partners-label">
                {PARTNERS.map((partner) => (
                  <img
                    key={partner.alt}
                    src={partner.src}
                    alt={partner.alt}
                    loading="lazy"
                    role="listitem"
                    className="h-6 opacity-50 hover:opacity-80 transition-opacity grayscale"
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — image slideshow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={imgIndex}
                  src={HERO_IMAGES[imgIndex]}
                  alt={`Friends of Bata event photo ${imgIndex + 1}`}
                  loading="eager"
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Prev / Next */}
              <button
                onClick={() => setImgIndex(i => (i - 1 + HERO_IMAGES.length) % HERO_IMAGES.length)}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/70 hover:bg-white flex items-center justify-center text-teal-800 transition-all shadow"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setImgIndex(i => (i + 1) % HERO_IMAGES.length)}
                aria-label="Next image"
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/70 hover:bg-white flex items-center justify-center text-teal-800 transition-all shadow"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
                {HERO_IMAGES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setImgIndex(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all ${i === imgIndex ? 'bg-white w-5' : 'bg-white/50 w-1.5'}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}