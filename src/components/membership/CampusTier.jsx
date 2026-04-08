import React from 'react';
import { motion } from 'framer-motion';
import { Check, Mail } from 'lucide-react';

export default function CampusTier() {
  const features = [
    'Full Builder/Insider access for students',
    'Structured learning paths (plug into curriculum)',
    'Guest mentor sessions',
    'Certificates (huge for employability)',
    'Startup showcase opportunities',
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative flex flex-col rounded-2xl border border-purple-100 bg-gradient-to-br from-purple-50 to-white p-8 hover:border-teal-200 hover:shadow-md transition-all"
    >
      <div className="w-3 h-3 rounded-full bg-red-400 mb-5" />

      <h3 className="text-xl font-bold text-teal-900 mb-1">Friends of Bata Campus</h3>
      <p className="text-sm text-slate-400 italic mb-6">"Turning universities into entrepreneurial ecosystems."</p>



      <ul className="space-y-3 mb-8 flex-1">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-600">
            <Check className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href="mailto:partnerships@friendsofbata.com"
        className="inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-full transition-all text-sm hover:shadow-lg hover:shadow-teal-500/20"
      >
        <Mail className="w-4 h-4" />
        Contact Us for Pricing
      </a>
    </motion.div>
  );
}