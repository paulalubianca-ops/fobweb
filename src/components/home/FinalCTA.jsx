import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-br from-teal-800 to-teal-900" aria-labelledby="cta-heading">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 id="cta-heading" className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Your next opportunity{' '}
            <span className="text-teal-300">
              starts here.
            </span>
          </h2>
          <p className="text-lg text-teal-100 leading-relaxed mb-10 max-w-xl mx-auto">
            Events, masterclasses, and a community of Gen Z founders building across Europe. 
            The access you've been looking for is one application away.
          </p>
          <Link 
            to="/Apply"
            className="inline-flex items-center gap-2 bg-white hover:bg-teal-50 text-teal-800 font-semibold px-8 py-4 rounded-full transition-all hover:shadow-lg text-sm"
          >
            Apply for Our Programs
            <ArrowRight className="w-4 h-4" />
          </Link>
          <p className="text-xs text-teal-300 mt-4">Free to apply · Open to students and recent graduates</p>
        </motion.div>
      </div>
    </section>
  );
}