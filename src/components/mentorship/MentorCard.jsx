import React from 'react';
import { motion } from 'framer-motion';

export default function MentorCard({ mentor, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (index % 4) * 0.08 }}
      className="group rounded-2xl overflow-hidden bg-white border border-purple-100 hover:border-teal-300 shadow-sm hover:shadow-md transition-all"
    >
      <div className="aspect-square overflow-hidden">
        <img 
          src={mentor.image} 
          alt={mentor.name}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-sm text-teal-900">{mentor.name}</h3>
        <p className="text-slate-500 text-xs mt-0.5 mb-3">{mentor.role}</p>
        <div className="flex flex-wrap gap-1.5">
          {mentor.tags.map((tag) => (
            <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-teal-50 text-teal-700 border border-teal-100">
              {tag}
            </span>
          ))}
        </div>
        {mentor.linkedin && (
          <a 
            href={mentor.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block mt-3 text-xs text-slate-400 hover:text-teal-600 transition-colors"
          >
            LinkedIn →
          </a>
        )}
      </div>
    </motion.div>
  );
}