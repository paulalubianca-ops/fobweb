import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Instagram, Youtube, Linkedin } from 'lucide-react';

const BG_IMAGES = [
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
  const [bgIndex, setBgIndex] = useState(0);
  const [partnerIndex, setPartnerIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex(i => (i + 1) % BG_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPartnerIndex(i => (i + 1) % PARTNERS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dark cinematic background slideshow */}
      <div className="absolute inset-0">
        {BG_IMAGES.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === bgIndex ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Floating social icons — right side */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-10">
        {[
          { icon: Instagram, href: 'https://instagram.com/friendsofbata' },
          { icon: Youtube, href: 'https://youtube.com/@friendsofbata' },
          { icon: Linkedin, href: 'https://linkedin.com/company/friends-of-bata' },
        ].map(({ icon: Icon, href }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 flex items-center justify-center text-white transition-all"
          >
            <Icon className="w-4 h-4" />
          </a>
        ))}
      </div>

      <div className="relative max-w-5xl mx-auto px-6 pt-24 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-8xl font-bold leading-none tracking-tight mb-8 text-white uppercase"
        >
          The community<br />
          built for<br />
          <span className="text-teal-400">Gen Z founders.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-white/70 max-w-2xl mb-10 leading-relaxed"
        >
          Events, masterclasses, and programs designed to give Gen Z founders the access, context, and community they don't find anywhere else.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            to="/Apply"
            className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 font-bold px-8 py-3.5 rounded-full transition-all hover:bg-white/90 text-sm tracking-wide uppercase"
          >
            Join the Ecosystem
          </Link>
          <Link
            to="/About"
            className="inline-flex items-center justify-center gap-2 border border-white/40 hover:border-white text-white px-8 py-3.5 rounded-full transition-all text-sm font-medium"
          >
            Who we are
          </Link>
        </motion.div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-20 pt-10 border-t border-white/15"
        >
          <p className="text-xs text-white/40 uppercase tracking-widest mb-6">Active at</p>
          <div className="flex items-center gap-8 md:gap-12 overflow-hidden">
            {PARTNERS.map((partner, i) => {
              const pos = (i - partnerIndex + PARTNERS.length) % PARTNERS.length;
              return (
                <img
                  key={partner.alt}
                  src={partner.src}
                  alt={partner.alt}
                  className={`h-7 brightness-0 invert transition-all duration-700 shrink-0 ${
                    pos === 0 ? 'opacity-80 scale-110' : 'opacity-30 scale-100'
                  }`}
                />
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}