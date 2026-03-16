import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Target, Zap, Handshake, Eye, Sparkles } from 'lucide-react';

const TEAM = [
  {
    name: "Thomas Archer Bata",
    role: "Co-Founder",
    bio: "CEO and Founder at MGG and TripleB International. Investor, sports and entrepreneurship enthusiast.",
    image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/690e14b53e70ed64f2bad1b3_1634207577445.jpeg",
    linkedin: "https://www.linkedin.com/in/thomasabata/"
  },
  {
    name: "Friederike Feige",
    role: "Co-Founder & Partnership Lead",
    bio: "Expanding our network of partners while organizing and leading educational sessions across Europe.",
    image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/690e1b24f9008eab89affebb_WhatsApp%20Image%202025-10-27%20at%2014.40.21.jpeg",
    linkedin: "https://www.linkedin.com/in/friederike-feige-94a06153/"
  },
  {
    name: "Valentina Muller",
    role: "Platform Lead",
    bio: "Redesigned FoB's vision, mission, and strategy. Manages content, events, student engagement, and the Pitch Lab podcast.",
    image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/690e157a625f6400be8b40d9_1694598221628%20(1).jpeg",
    linkedin: "https://www.linkedin.com/in/valentinamueller/"
  },
];

const VALUES = [
  { icon: Target, title: "Innovation", desc: "We foster new ideas to drive growth and create sustainable impact." },
  { icon: Zap, title: "Entrepreneurship", desc: "We support global startups with the resources needed to succeed." },
  { icon: Handshake, title: "Collaboration", desc: "We encourage partnerships and shared learning across sectors." },
  { icon: Eye, title: "Transparency", desc: "We champion openness and clear communication in everything." },
  { icon: Sparkles, title: "Curiosity", desc: "We instill a passion for learning and creativity." },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-amber-400 text-sm font-medium tracking-wide mb-3">ABOUT FoB</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              We believe the next generation of founders{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                deserves better access.
              </span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
              Friends of Bata is a mentorship-first community that bridges the gap between 
              academic environments and the real startup world — giving Gen Z founders the 
              networks, guidance, and practical exposure they need to build with confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/30 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold tracking-tight mb-5">Our thesis is simple.</h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                Gen Z is the most entrepreneurial generation in history — but the infrastructure 
                to support them hasn't caught up. Traditional accelerators want traction. University 
                programs offer theory. Networking events are built for people with 20 years of experience.
              </p>
              <p className="text-slate-300 leading-relaxed font-medium">
                FoB exists in the gap. We provide what's missing: relatable mentorship, practical 
                context, real connections, and a community that meets you where you are.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="rounded-2xl overflow-hidden aspect-square">
                <img 
                  src="https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/6979ebe12b998364f9a2926d_DSC01811.jpg" 
                  alt="FoB event" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-square mt-8">
                <img 
                  src="https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/69aeccd6865322352d600c93_1772567922553.jpeg" 
                  alt="FoB workshop" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-white/[0.02] border border-white/5 p-10 md:p-14"
          >
            <p className="text-slate-400 text-sm mb-8">
              In 2025, our global network supported{' '}
              <span className="text-white font-semibold">130,000+ young people</span> in 
              improving their entrepreneurship skills through events, mentorship, and founder-facing content.
            </p>
            <p className="text-slate-400 text-sm">
              We use the UN's 17 Sustainable Development Goals as a framework — focusing on{' '}
              <span className="text-white font-semibold">positive and sustainable entrepreneurship</span> as 
              a force for good.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-amber-400 text-sm font-medium tracking-wide mb-3">WHAT DRIVES US</p>
            <h2 className="text-3xl font-bold tracking-tight">Our values.</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/5"
              >
                <v.icon className="w-5 h-5 text-amber-400 mb-3" />
                <h3 className="font-semibold text-sm mb-1">{v.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-amber-400 text-sm font-medium tracking-wide mb-3">THE TEAM</p>
            <h2 className="text-3xl font-bold tracking-tight">The people behind FoB.</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TEAM.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-2xl overflow-hidden bg-white/[0.02] border border-white/5"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold mb-0.5">{member.name}</h3>
                  <p className="text-amber-400 text-xs font-medium mb-2">{member.role}</p>
                  <p className="text-slate-400 text-sm leading-relaxed mb-3">{member.bio}</p>
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs text-slate-500 hover:text-white transition-colors"
                  >
                    LinkedIn →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to join?</h2>
          <p className="text-slate-400 mb-8">
            Whether you're building your first prototype or scaling a bold idea — we're here to help.
          </p>
          <Link 
            to="/Apply"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold px-8 py-3.5 rounded-full transition-all hover:shadow-lg hover:shadow-amber-500/20 text-sm"
          >
            Apply Now
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}