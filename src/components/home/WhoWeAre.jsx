import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Briefcase } from 'lucide-react';

const TABS = [
  {
    id: 'students',
    label: 'Students',
    icon: GraduationCap,
    headline: 'The next generation of founders.',
    description:
      'We are Gen Z students and recent graduates from universities across Europe — curious, ambitious, and building real things. FoB is where we find our people, sharpen our ideas, and turn ambition into action.',
    stats: [
      { value: '130K+', label: 'Students supported globally' },
      { value: '30+', label: 'Universities active' },
      { value: '5', label: 'Countries represented' },
    ],
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80',
  },
  {
    id: 'experts',
    label: 'Experts',
    icon: Briefcase,
    headline: 'Operators, investors, and builders.',
    description:
      'Our expert community consists of seasoned founders, investors, and industry operators from across Europe and beyond. They don\'t lecture — they roll up their sleeves, share real playbooks, and commit to helping the next generation build.',
    stats: [
      { value: '20+', label: 'Vetted mentors' },
      { value: '10+', label: 'Industries covered' },
      { value: '€0', label: 'Cost to get matched' },
    ],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
  },
];

export default function WhoWeAre() {
  const [active, setActive] = useState('students');
  const tab = TABS.find((t) => t.id === active);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-teal-600 text-sm font-semibold tracking-wide mb-2">WHO WE ARE</p>
          <h2 className="text-4xl font-bold tracking-tight text-teal-900">
            A community built on two pillars.
          </h2>
        </motion.div>

        {/* Tab switcher */}
        <div className="flex gap-2 mb-10">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all border ${
                active === t.id
                  ? 'bg-teal-600 text-white border-teal-600 shadow-md shadow-teal-500/20'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-teal-300'
              }`}
            >
              <t.icon className="w-4 h-4" />
              {t.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
          >
            {/* Text */}
            <div>
              <h3 className="text-2xl font-bold text-teal-900 mb-4">{tab.headline}</h3>
              <p className="text-slate-500 leading-relaxed mb-8">{tab.description}</p>
              <div className="grid grid-cols-3 gap-4">
                {tab.stats.map((s) => (
                  <div key={s.label} className="p-4 rounded-2xl bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-100 text-center">
                    <p className="text-2xl font-bold text-teal-700">{s.value}</p>
                    <p className="text-xs text-slate-500 mt-1 leading-snug">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src={tab.image}
                alt={tab.label}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}