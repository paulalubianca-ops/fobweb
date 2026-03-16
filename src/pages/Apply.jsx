import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle } from 'lucide-react';

const BENEFITS = [
  "1:1 mentorship with vetted operators and founders",
  "Access to startup events, workshops, and pitch sessions",
  "Case studies from real companies",
  "A community of Gen Z founders building across Europe",
  "Pitch Lab Podcast features and founder spotlights",
];

export default function Apply() {
  return (
    <section className="pt-32 pb-24 relative min-h-screen">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-amber-400 text-sm font-medium tracking-wide mb-3">JOIN FoB</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Your idea deserves{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                real support.
              </span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed mb-10">
              FoB is free to join. We're looking for students and recent graduates who are 
              building something — or ready to start. No pitch deck required. Just tell us 
              where you are and what you need.
            </p>

            <div className="space-y-4 mb-10">
              {BENEFITS.map((b) => (
                <div key={b} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                  <p className="text-slate-300 text-sm">{b}</p>
                </div>
              ))}
            </div>

            <p className="text-xs text-slate-600">
              Open to students and recent graduates worldwide. No fees.
            </p>
          </motion.div>

          {/* Right — CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:sticky lg:top-32"
          >
            <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-8 md:p-10">
              <h2 className="text-2xl font-bold mb-3">Apply to Friends of Bata</h2>
              <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                Fill out our short application form and we'll get back to you within a few days. 
                Tell us about yourself, what you're working on, and how we can help.
              </p>

              <a
                href="https://www.friendsofbata.org/contact-us"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold px-8 py-4 rounded-full transition-all hover:shadow-lg hover:shadow-amber-500/20 text-sm"
              >
                Open Application Form
                <ExternalLink className="w-4 h-4" />
              </a>

              <div className="mt-8 pt-8 border-t border-white/5 space-y-4">
                <div>
                  <p className="text-xs text-slate-500 mb-1">Who can apply?</p>
                  <p className="text-sm text-slate-300">Students, recent graduates, and early-stage founders (18–30)</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-1">Cost?</p>
                  <p className="text-sm text-slate-300">Free. Always.</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-1">Response time?</p>
                  <p className="text-sm text-slate-300">We aim to respond within 5 business days.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}