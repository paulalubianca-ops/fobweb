import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Users, Clock } from 'lucide-react';

const MASTERCLASSES = [
  {
    title: 'How to Fundraise as a First-Time Founder',
    speaker: 'Thomas Archer Bata',
    role: 'Investor & Entrepreneur',
    duration: '45 min',
    topics: ['Fundraising', 'Pitch', 'Early Stage'],
    desc: 'A practical walkthrough of the fundraising process — from building your first deck to closing your pre-seed round.',
    image: 'https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/690e14b53e70ed64f2bad1b3_1634207577445.jpeg',
    comingSoon: false,
  },
  {
    title: 'Go-to-Market for European Startups',
    speaker: 'Friederike Feige',
    role: 'Partnership Lead, FoB',
    duration: '40 min',
    topics: ['GTM', 'Sales', 'Europe'],
    desc: 'How to design and execute a go-to-market strategy that works across European markets with limited resources.',
    image: 'https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/690e1b24f9008eab89affebb_WhatsApp%20Image%202025-10-27%20at%2014.40.21.jpeg',
    comingSoon: false,
  },
  {
    title: 'Building in Public: Community as a Growth Engine',
    speaker: 'Valentina Muller',
    role: 'Co-Founder, FoB',
    duration: '35 min',
    topics: ['Community', 'Growth', 'Brand'],
    desc: 'Why transparency and community-led growth outperform paid acquisition for early-stage startups.',
    image: 'https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/690e157a625f6400be8b40d9_1694598221628%20(1).jpeg',
    comingSoon: true,
  },
];

export default function Masterclasses() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-teal-50 via-white to-cyan-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-teal-600 text-sm font-semibold tracking-wide mb-3">MASTERCLASSES</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-teal-900 mb-5">
              Learn from those{' '}
              <span className="text-teal-600">who've been there.</span>
            </h1>
            <p className="text-lg text-slate-500 max-w-xl leading-relaxed">
              Structured sessions with operators, investors, and founders — covering everything a Gen Z builder needs to know.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MASTERCLASSES.map((mc, i) => (
              <motion.div
                key={mc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-2xl overflow-hidden bg-white border border-purple-100 hover:border-teal-200 shadow-sm hover:shadow-md transition-all flex flex-col"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img src={mc.image} alt={mc.speaker} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                  {mc.comingSoon && (
                    <span className="absolute top-3 left-3 bg-teal-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">Coming Soon</span>
                  )}
                  {!mc.comingSoon && (
                    <div className="absolute inset-0 flex items-center justify-center bg-teal-900/20 group-hover:bg-teal-900/30 transition-colors">
                      <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                        <Play className="w-5 h-5 text-teal-700 ml-0.5" />
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {mc.topics.map(t => (
                      <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-teal-50 text-teal-700 border border-teal-100">{t}</span>
                    ))}
                  </div>
                  <h3 className="font-semibold text-teal-900 mb-2 leading-snug">{mc.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed flex-1 mb-4">{mc.desc}</p>
                  <div className="flex items-center gap-3 text-xs text-slate-400 border-t border-slate-100 pt-4">
                    <Users className="w-3.5 h-3.5" />
                    <span>{mc.speaker} · {mc.role}</span>
                    <span className="ml-auto flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{mc.duration}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-teal-50 via-white to-cyan-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-teal-900 mb-3">Want to host a masterclass?</h2>
          <p className="text-slate-500 mb-8">If you're an operator, investor, or founder with a story to share — we'd love to have you.</p>
          <Link
            to="/Apply"
            className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-3.5 rounded-full transition-all hover:shadow-lg hover:shadow-teal-500/20 text-sm"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}