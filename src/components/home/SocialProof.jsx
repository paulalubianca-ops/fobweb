import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const STATS = [
  { value: "130K+", label: "Students in our network" },
  { value: "50+", label: "Events & workshops run" },
  { value: "20+", label: "Active mentors" },
  { value: "15+", label: "Case studies published" },
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
    <section className="py-24 md:py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50">
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
              <p className="text-3xl md:text-4xl font-bold text-teal-600">
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
          <p className="text-teal-600 text-sm font-semibold tracking-wide mb-3">IN ACTION</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-teal-900">
            See what happens when you're in the room.
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
              className="group rounded-2xl overflow-hidden bg-white border border-purple-100 hover:border-teal-200 shadow-sm hover:shadow-md transition-all"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <p className="text-xs text-teal-600 font-medium mb-2">{event.location}</p>
                <h3 className="font-semibold text-teal-900 mb-2">{event.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

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
            Apply to join our next event
            <ArrowRight className="w-4 h-4" />
          </Link>
          <p className="text-xs text-slate-400 mt-3">Free to apply · Open to students and recent graduates</p>
        </motion.div>
      </div>
    </section>
  );
}