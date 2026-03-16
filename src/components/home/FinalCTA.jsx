import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Stop waiting for permission{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
              to build.
            </span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-xl mx-auto">
            The gap between your idea and a real venture isn't talent — it's access. 
            FoB gives you the mentors, the community, and the push to make it real.
          </p>
          <Link 
            to="/Apply"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold px-8 py-4 rounded-full transition-all hover:shadow-lg hover:shadow-amber-500/20 text-sm"
          >
            Apply to Join FoB
            <ArrowRight className="w-4 h-4" />
          </Link>
          <p className="text-xs text-slate-600 mt-4">Free to apply · Open to students and recent grads</p>
        </motion.div>
      </div>
    </section>
  );
}