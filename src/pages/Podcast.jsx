import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Mic, Users, Lightbulb, ExternalLink } from 'lucide-react';

const EPISODES = [
  {
    title: "From Idea to First Customer",
    guest: "Adrian Escabias",
    guestRole: "Co-Founder, Funding Place",
    desc: "How to validate fast, sell before you build, and get your first paying customer without a big team.",
    image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/68fb658568ea682a3016f973_1755240065083.jpeg",
  },
  {
    title: "Building in Web3: Lessons from Yoseyomo",
    guest: "Yoseyomo Co-Founder",
    guestRole: "Web3 Startup Founder",
    desc: "A candid look at building a decentralized product, navigating the hype, and finding real users.",
    image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/6995d68bdc0fbdf6d741f323_Screenshot%202026-02-18%20at%2016.00.58.png",
  },
  {
    title: "Fundraising Without the Fancy Network",
    guest: "Gianluca Pontoni",
    guestRole: "Venture Capital, Lead The Future",
    desc: "What investors actually look for at early stage — and how to approach them when you don't have warm intros.",
    image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/670fc29723ef285fa7f10675_1687500661037.jpeg",
  },
];

const PILLARS = [
  { icon: Mic, title: "Real Conversations", desc: "Unscripted chats with founders and operators who've been in the trenches." },
  { icon: Users, title: "For Gen Z Builders", desc: "Every episode is designed for students and early-stage founders — not corporate leaders." },
  { icon: Lightbulb, title: "Actionable Takeaways", desc: "Each episode ends with concrete things you can do this week to move forward." },
];

export default function Podcast() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-teal-600 text-sm font-semibold tracking-wide mb-3">PITCH LAB PODCAST</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-teal-900 mb-5">
              Founder stories that{' '}
              <span className="text-teal-600">actually teach you something.</span>
            </h1>
            <p className="text-lg text-slate-500 max-w-xl leading-relaxed">
              Pitch Lab is our podcast for Gen Z builders — raw conversations with founders, investors, 
              and operators who share what really happens behind the scenes.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="https://www.friendsofbata.org/pitch-lab-podcast"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-7 py-3 rounded-full transition-all hover:shadow-lg hover:shadow-teal-500/20 text-sm"
              >
                Listen Now
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What the podcast is */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-100"
              >
                <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center mb-5">
                  <p.icon className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="font-semibold mb-2 text-teal-900">{p.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Episodes */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <p className="text-teal-600 text-sm font-semibold tracking-wide mb-2">FEATURED EPISODES</p>
            <h2 className="text-3xl font-bold tracking-tight text-teal-900">Recent conversations.</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EPISODES.map((ep, i) => (
              <motion.div
                key={ep.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-2xl overflow-hidden bg-white border border-purple-100 hover:border-teal-200 shadow-sm hover:shadow-md transition-all"
              >
                <div className="aspect-video overflow-hidden">
                  <img src={ep.image} alt={ep.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <p className="text-xs text-teal-600 font-medium mb-1">{ep.guest} · {ep.guestRole}</p>
                  <h3 className="font-semibold text-teal-900 mb-2">{ep.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{ep.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <a
              href="https://www.friendsofbata.org/pitch-lab-podcast"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-800 text-sm font-semibold transition-colors"
            >
              See all episodes
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-teal-900 mb-3">Want to be featured?</h2>
          <p className="text-slate-500 mb-8">Building something interesting? We'd love to have you on the show.</p>
          <Link
            to="/Apply"
            className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-3.5 rounded-full transition-all hover:shadow-lg hover:shadow-teal-500/20 text-sm"
          >
            Apply to Join FoB
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}