import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';

const UPCOMING_EVENTS = [
  {
    title: 'Founders of Tomorrow Q2 2026',
    location: 'Barcelona, Spain',
    description:
      'A full-day, hands-on entrepreneurship experience for Gen Z builders. Pitch live, get feedback from real founders, and leave with new connections and sharper ideas.',
    image: 'https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/69c668f5d0797c2eae3bbbcf_7575.JPG',
  },
];

export default function TakePart() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50" aria-labelledby="next-event-heading">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-teal-600 text-sm font-semibold tracking-wide mb-3">NEXT EVENT</p>
          <h2 id="next-event-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-teal-900">
            Join our next event.
          </h2>
        </motion.div>

        {UPCOMING_EVENTS.map((event, i) => (
          <motion.div
            key={event.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden bg-white border border-purple-100 hover:border-teal-200 shadow-sm hover:shadow-md transition-all"
          >
            {/* Image — left */}
            <div className="relative overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 min-h-64"
              />
              {i === 0 && (
                <span className="absolute top-3 left-3 bg-teal-500 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
                  Coming Soon
                </span>
              )}
            </div>
            {/* Description — right */}
            <div className="p-8 flex flex-col justify-center">
              <p className="text-xs text-teal-600 font-medium mb-3 flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {event.location}
              </p>
              <h3 className="text-xl font-semibold text-teal-900 mb-3">{event.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{event.description}</p>
            </div>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <Link
            to="/Apply"
            className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-3.5 rounded-full transition-all hover:shadow-lg hover:shadow-teal-500/20 text-sm"
          >
            Join Us!
            <ArrowRight className="w-4 h-4" />
          </Link>
          <p className="text-xs text-slate-400 mt-3">Free to apply · Open to students and recent graduates</p>
        </motion.div>

      </div>
    </section>
  );
}