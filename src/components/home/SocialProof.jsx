import React from 'react';
import { motion } from 'framer-motion';

const STATS = [
  { value: "130K+", label: "Students in our network" },
  { value: "50+", label: "Events & workshops run" },
  { value: "20+", label: "Active mentors" },
  { value: "15+", label: "Case studies published" },
];


export default function SocialProof() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50" aria-label="Impact stats">
      <div className="max-w-6xl mx-auto px-6">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-teal-600" aria-label={`${stat.value} ${stat.label}`}>
                {stat.value}
              </p>
              <p className="text-slate-500 text-sm mt-1" aria-hidden="true">{stat.label}</p>
            </div>
          ))}
        </motion.div>


      </div>
    </section>
  );
}