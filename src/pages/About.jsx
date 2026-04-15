import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Target, Zap, Handshake, Eye, Sparkles } from 'lucide-react';

const TEAM = [
{
  name: "Thomas Archer Bata",
  role: "Co-Founder",
  bio: "Investor & entrepreneur. CEO at MGG and TripleB International.",
  image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/690e14b53e70ed64f2bad1b3_1634207577445.jpeg",
  linkedin: "https://www.linkedin.com/in/thomasabata/"
},
{
  name: "Friederike Feige",
  role: "Co-Founder & Partnership Lead",
  bio: "Builds our partner network and leads educational sessions across Europe.",
  image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/690e1b24f9008eab89affebb_WhatsApp%20Image%202025-10-27%20at%2014.40.21.jpeg",
  linkedin: "https://www.linkedin.com/in/friederike-feige-94a06153/"
},
{
  name: "Valentina Muller",
  role: "Co-founder & Progran Lead",
  bio: "Drives vision, content, and the Pitch Lab podcast.",
  image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/690e157a625f6400be8b40d9_1694598221628%20(1).jpeg",
  linkedin: "https://www.linkedin.com/in/valentinamueller/"
}];


const VALUES = [
{ icon: Target, title: "Innovation", desc: "New ideas that drive sustainable impact." },
{ icon: Zap, title: "Entrepreneurship", desc: "Real resources for global startups." },
{ icon: Handshake, title: "Collaboration", desc: "Partnerships and shared learning." },
{ icon: Eye, title: "Transparency", desc: "Openness in everything we do." },
{ icon: Sparkles, title: "Curiosity", desc: "A passion for learning and creativity." }];


const STATS = [
{ value: "130K+", label: "Students supported" },
{ value: "20+", label: "Active mentors" },
{ value: "50+", label: "Events globally" },
{ value: "15+", label: "Case studies" }];


export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-teal-600 text-sm font-semibold tracking-wide mb-3">ABOUT FoB</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-teal-900 mb-5">
              The Guidance Gen-Z Founders{' '}
              <span className="text-teal-600">Actually Need.</span>
            </h1>
            <p className="text-lg text-slate-500 max-w-xl leading-relaxed">Friends of Bata bridges the gap between academia and the startup world — connecting Gen Z with real mentors, real networks, and real context.


            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission + photos */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}>
              
              <h2 className="text-3xl font-bold tracking-tight text-teal-900 mb-4">Our thesis is simple.</h2>
              <p className="text-slate-500 leading-relaxed mb-4">
                Gen Z is the most entrepreneurial generation in history — but the infrastructure hasn't caught up. 
                Accelerators want traction. Universities teach theory. Networking events aren't built for you.
              </p>
              <p className="text-slate-700 font-medium leading-relaxed">
                FoB fills the gap: mentorship, practical context, and a community that meets you where you are.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4">
              
              <div className="rounded-2xl overflow-hidden aspect-square">
                <img src="https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/6979ebe12b998364f9a2926d_DSC01811.jpg" alt="FoB event" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-square mt-8">
                <img src="https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/69aeccd6865322352d600c93_1772567922553.jpeg" alt="FoB workshop" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Stats — tight, number-forward */}
      <section className="py-16 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6">
            
            {STATS.map((s) =>
            <div key={s.label} className="text-center py-6">
                <p className="text-4xl font-bold text-teal-700">{s.value}</p>
                <p className="text-sm text-slate-500 mt-1">{s.label}</p>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <p className="text-teal-600 text-sm font-semibold tracking-wide mb-2">WHAT DRIVES US</p>
            <h2 className="text-3xl font-bold tracking-tight text-teal-900">Our values.</h2>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {VALUES.map((v, i) =>
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-5 rounded-2xl bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-100">
              
                <v.icon className="w-5 h-5 text-teal-600 mb-3" />
                <h3 className="font-semibold text-sm text-teal-900 mb-1">{v.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{v.desc}</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <p className="text-teal-600 text-sm font-semibold tracking-wide mb-2">THE TEAM</p>
            <h2 className="text-3xl font-bold tracking-tight text-teal-900">The people behind FoB.</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TEAM.map((member, i) =>
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-2xl overflow-hidden bg-white border border-purple-100 shadow-sm">
              
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-teal-900">{member.name}</h3>
                  <p className="text-teal-600 text-xs font-semibold mt-0.5 mb-2">{member.role}</p>
                  <p className="text-slate-500 text-sm mb-3">{member.bio}</p>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-teal-600 transition-colors">
                    LinkedIn →
                  </a>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-teal-900 mb-3">Ready to join?</h2>
          <p className="text-slate-500 mb-8">From idea to real traction — we're here to help.</p>
          <Link to="/Apply" className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-3.5 rounded-full transition-all hover:shadow-lg hover:shadow-teal-500/20 text-sm">
            Join Us!
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>);

}