import React from 'react';
import { motion } from 'framer-motion';

const STATS = [
  { value: "130K+", label: "Students in our network" },
  { value: "20+", label: "Active mentors" },
  { value: "50+", label: "Events & workshops" },
  { value: "15+", label: "Case studies launched" },
];

const EVENTS = [
  {
    title: "EHL Innovation Sprint",
    location: "Lausanne, Switzerland",
    description: "Students from five Swiss institutions collaborated in a 24-hour innovation challenge at the EHL Innovation Hub.",
    image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/69aeccd6865322352d600c93_1772567922553.jpeg",
  },
  {
    title: "Founders of Tomorrow",
    location: "Toulouse, France",
    description: "A full-day hands-on entrepreneurship experience with Junior Achievement Alumni France.",
    image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/69a6c93d66fbec21e3ecd9eb_Screenshot%202026-03-03%20at%2012.42.43.png",
  },
  {
    title: "Live with Yoseyomo",
    location: "Online",
    description: "Students explored a real Web3 case study, then met the co-founder live to challenge and question.",
    image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/6995d68bdc0fbdf6d741f323_Screenshot%202026-02-18%20at%2016.00.58.png",
  },
];

export default function SocialProof() {
  return (
    <section className="py-24 md:py-32">
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
              <p className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                {stat.value}
              </p>
              <p className="text-slate-500 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Events spotlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-amber-400 text-sm font-medium tracking-wide mb-3">IN ACTION</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Real events. Real founders. Real outcomes.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EVENTS.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl overflow-hidden bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <p className="text-xs text-amber-400 mb-2">{event.location}</p>
                <h3 className="font-semibold mb-2">{event.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}