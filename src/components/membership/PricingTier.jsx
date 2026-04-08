import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';

export default function PricingTier({ tier, index, featured }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative flex flex-col rounded-2xl border p-8 transition-all ${
        featured
          ? 'border-teal-300 bg-gradient-to-br from-teal-50 to-white shadow-lg shadow-teal-100/50 scale-[1.02]'
          : 'border-purple-100 bg-white hover:border-teal-200 hover:shadow-md'
      }`}
    >
      {featured && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-teal-600 text-white text-xs font-semibold tracking-wide">
          MOST POPULAR
        </div>
      )}

      <div className={`w-3 h-3 rounded-full mb-5 ${tier.dotColor}`} />

      <h3 className="text-xl font-bold text-teal-900 mb-1">{tier.name}</h3>
      <p className="text-sm text-slate-400 italic mb-5">"{tier.tagline}"</p>

      <div className="mb-6">
        <span className="text-4xl font-bold text-teal-900">{tier.price}</span>
        {tier.period && <span className="text-slate-400 text-sm ml-1">{tier.period}</span>}
      </div>

      <ul className="space-y-3 mb-8 flex-1">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-600">
            <Check className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        to={tier.ctaLink}
        className={`inline-flex items-center justify-center gap-2 font-semibold px-6 py-3 rounded-full transition-all text-sm ${
          featured
            ? 'bg-teal-600 hover:bg-teal-700 text-white hover:shadow-lg hover:shadow-teal-500/20'
            : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
        }`}
      >
        {tier.ctaText}
        <ArrowRight className="w-4 h-4" />
      </Link>
    </motion.div>
  );
}