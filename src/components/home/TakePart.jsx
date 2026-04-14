import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Calendar, ArrowRight, Users, Zap } from 'lucide-react';

const NEXT_EVENT = {
  label: 'UPCOMING EVENT',
  title: 'Founders of Tomorrow',
  subtitle: 'Q2 2026 · Barcelona',
  date: 'Spring 2026',
  location: 'Barcelona, Spain',
  description:
    'A full-day, hands-on entrepreneurship experience for Gen Z builders. Pitch live, get feedback from real founders, and leave with new connections and sharper ideas.',
  spots: 'Limited spots available',
  image:
    'https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/69c668f5d0797c2eae3bbbcf_7575.JPG',
};

const HIGHLIGHTS = [
  { icon: Zap, text: 'Live pitch & feedback sessions' },
  { icon: Users, text: '50+ students from across Europe' },
  { icon: MapPin, text: 'In-person in Barcelona' },
];

export default function TakePart() {
  return (
    <section className="py-24 bg-white overflow-hidden" aria-labelledby="next-event-heading">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="text-teal-600 text-sm font-semibold tracking-wide mb-2">NEXT EVENT</p>
          <h2 id="next-event-heading" className="text-4xl font-bold tracking-tight text-teal-900">
            Join our next event.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden border border-teal-100 shadow-xl shadow-teal-500/5"
        >
          {/* Image */}
          <div className="relative h-64 lg:h-auto min-h-[320px]">
            <img
              src={NEXT_EVENT.image}
              alt={NEXT_EVENT.title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 via-teal-900/10 to-transparent" />
            <div className="absolute bottom-6 left-6 flex items-center gap-2">
              <span className="bg-teal-500 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide animate-pulse">
                Coming Soon
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-10 md:p-12 flex flex-col justify-center">
            <p className="text-teal-600 text-xs font-semibold tracking-widest uppercase mb-3">
              {NEXT_EVENT.label}
            </p>
            <h3 className="text-3xl font-bold text-teal-900 mb-1">{NEXT_EVENT.title}</h3>
            <p className="text-teal-600 font-semibold text-sm mb-6">{NEXT_EVENT.subtitle}</p>

            <p className="text-slate-500 text-sm leading-relaxed mb-8">{NEXT_EVENT.description}</p>

            {/* Highlights */}
            <ul className="space-y-3 mb-8">
              {HIGHLIGHTS.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3 text-sm text-slate-600">
                  <span className="w-7 h-7 rounded-lg bg-teal-100 flex items-center justify-center shrink-0">
                    <Icon className="w-3.5 h-3.5 text-teal-600" />
                  </span>
                  {text}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
              <Link
                to="/Apply"
                className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-7 py-3.5 rounded-full transition-all hover:shadow-lg hover:shadow-teal-500/20 text-sm"
              >
                Register Interest
                <ArrowRight className="w-4 h-4" />
              </Link>
              <p className="text-xs text-slate-400 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {NEXT_EVENT.spots}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}