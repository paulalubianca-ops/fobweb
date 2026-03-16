import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 pt-24 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-xs text-slate-400 tracking-wide">130,000+ students supported globally</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6"
        >
          The mentorship network{' '}
          <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
            Gen Z founders
          </span>{' '}
          actually need.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          You don't lack ambition. You lack access. FoB connects you with real operators, 
          proven mentors, and a community that gets you from idea to traction.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link 
            to="/Apply" 
            className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold px-8 py-3.5 rounded-full transition-all hover:shadow-lg hover:shadow-amber-500/20 text-sm"
          >
            Apply to Join
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link 
            to="/Mentorship" 
            className="inline-flex items-center justify-center gap-2 border border-white/10 hover:border-white/20 text-white px-8 py-3.5 rounded-full transition-all text-sm"
          >
            Explore Mentorship
          </Link>
        </motion.div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-20 pt-12 border-t border-white/5"
        >
          <p className="text-xs text-slate-600 uppercase tracking-widest mb-6">Partnered with</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-40">
            <img src="https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/6911f0f176679762610ef895_EHL_Logo.png" alt="EHL" className="h-8 brightness-0 invert" />
            <img src="https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/69aff3082887af64e2308f48_UoE_Stacked%20Logo_CMYK_v1_160215.png" alt="University of Edinburgh" className="h-10 brightness-0 invert" />
            <img src="https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/69aff953f8acb7b6e95352e5_geneva-logo.webp" alt="Geneva Business School" className="h-8 brightness-0 invert" />
            <img src="https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/6941378b091e74a8be0c1c01_GTA%20LOGO.png" alt="Garage Tech Academy" className="h-8 brightness-0 invert" />
            <img src="https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/688cbefcced78070f25ff145_aticcolab-pos.png" alt="Aticco Lab" className="h-7 brightness-0 invert" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}