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
    title: "Founders of Tomorrow Q1 2026 at the BCN Finance Hub",
    location: "Barcelona, Spain",
    description: "Friends of Bata co-hosted Founders of Tomorrow at Aticco BFH in Barcelona, bringing together 50+ students from 15+ nationalities for a one-day, hands-on entrepreneurship experience focused on building, pitching, and real founder feedback.",
    image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/69c668f5d0797c2eae3bbbcf_7575.JPG",
  },
  {
    title: "Friends of Bata × EHL Innovation Sprint",
    location: "Lausanne, Switzerland",
    description: "Friends of Bata joined the EHL Innovation Sprint at the EHL Innovation Hub in Lausanne, where students from five Swiss institutions collaborated in a 24-hour innovation challenge.",
    image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/69aeccd6865322352d600c93_1772567922553.jpeg",
  },
  {
    title: "From Case Study to Founder: Live with Yoseyomo",
    location: "Online",
    description: "Students from Tomas Bata University explored the Yoseyomo case study and then met co-founder Iñaki Zubeldia in a live online session to challenge, question, and dive deeper into building a Web3 company.",
    image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/6995d68bdc0fbdf6d741f323_Screenshot%202026-02-18%20at%2016.00.58.png",
  },
];

export default function SocialProof() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50" aria-labelledby="social-proof-heading">
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

        {/* Events spotlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-teal-600 text-sm font-semibold tracking-wide mb-3">IN ACTION</p>
          <h2 id="social-proof-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-teal-900">
            Recent Events
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
                  loading="lazy"
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
            Join Us!
            <ArrowRight className="w-4 h-4" />
          </Link>
          <p className="text-xs text-slate-400 mt-3">Free to apply · Open to students and recent graduates</p>
        </motion.div>
      </div>
    </section>
  );
}