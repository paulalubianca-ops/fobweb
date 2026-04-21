import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Mic, Users, Lightbulb, ExternalLink, Play } from 'lucide-react';

const EPISODES = [
  {
    title: "Masterclass | What NOT to do as a Founder 🚫 (Top 5 Startup Killers Explained)",
    duration: "22:12",
    link: "https://www.youtube.com/watch?v=tX0136Sof80",
    thumb: "https://i.ytimg.com/vi/tX0136Sof80/hqdefault.jpg",
  },
  {
    title: "E006 | Pitch Lab | Pivoting go to market: From product to profit",
    duration: "47:29",
    link: "https://www.youtube.com/watch?v=xg7M3rrf8_o",
    thumb: "https://i.ytimg.com/vi/xg7M3rrf8_o/hqdefault.jpg",
  },
  {
    title: "E005 | Pitch Lab: Go to market on a budget",
    duration: "33:53",
    link: "https://www.youtube.com/watch?v=iROdEoYcnk4",
    thumb: "https://i.ytimg.com/vi/iROdEoYcnk4/hqdefault.jpg",
  },
  {
    title: "E004 | Pitch Lab: Finding the right Co-founder and team",
    duration: "41:38",
    link: "https://www.youtube.com/watch?v=QAluoNrFsSY",
    thumb: "https://i.ytimg.com/vi/QAluoNrFsSY/hqdefault.jpg",
  },
  {
    title: "E003 | Pitch Lab: AI tools for growth and productivity with Aurora",
    duration: "40:58",
    link: "https://www.youtube.com/watch?v=1ZYDfkfLqvI",
    thumb: "https://i.ytimg.com/vi/1ZYDfkfLqvI/hqdefault.jpg",
  },
  {
    title: "E002 | Pitch Lab: Why Startups Fail with Adrian & Rachel",
    duration: "36:04",
    link: "https://www.youtube.com/watch?v=mlhWOQAo1uQ",
    thumb: "https://i.ytimg.com/vi/mlhWOQAo1uQ/hqdefault.jpg",
  },
];


const PILLARS = [
{ icon: Mic, title: "Real Conversations", desc: "Unscripted chats with founders and operators who've been in the trenches." },
{ icon: Users, title: "For Next Gen Builders", desc: "Every episode is designed for students and early-stage founders — not corporate leaders." },
{ icon: Lightbulb, title: "Actionable Takeaways", desc: "Each episode ends with concrete things you can do this week to move forward." }];


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
                className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-7 py-3 rounded-full transition-all hover:shadow-lg hover:shadow-teal-500/20 text-sm">
                
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
            {PILLARS.map((p, i) =>
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-100">
              
                <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center mb-5">
                  <p.icon className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="font-semibold mb-2 text-teal-900">{p.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            )}
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EPISODES.map((ep, i) => (
              <motion.a
                key={ep.title}
                href={ep.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.08 }}
                className="group rounded-2xl overflow-hidden bg-white border border-purple-100 hover:border-teal-200 shadow-sm hover:shadow-md transition-all flex flex-col"
              >
                <div className="relative aspect-video overflow-hidden bg-slate-100">
                  <img src={ep.thumb} alt={ep.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/35 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                      <Play className="w-5 h-5 text-teal-700 ml-0.5" />
                    </div>
                  </div>
                  <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs font-medium px-1.5 py-0.5 rounded">{ep.duration}</span>
                </div>
                <div className="p-5 flex-1">
                  <h3 className="font-semibold text-teal-900 leading-snug group-hover:text-teal-600 transition-colors text-sm">{ep.title}</h3>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Platform links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 flex flex-col items-center gap-4"
          >
            <p className="text-sm text-slate-500 font-medium">Listen & watch on</p>
            <div className="flex items-center gap-4">
              {/* YouTube */}
              <a
                href="https://www.youtube.com/@friendsofbatanetwork"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-slate-200 hover:border-red-300 hover:bg-red-50 transition-all group"
              >
                <svg className="w-5 h-5 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span className="text-sm font-semibold text-slate-700 group-hover:text-red-600 transition-colors">YouTube</span>
              </a>
              {/* Spotify */}
              <a
                href="https://open.spotify.com/show/friendsofbata"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-slate-200 hover:border-green-300 hover:bg-green-50 transition-all group"
              >
                <svg className="w-5 h-5 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
                <span className="text-sm font-semibold text-slate-700 group-hover:text-green-600 transition-colors">Spotify</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-teal-900 mb-3">Want to be featured?</h2>
          <p className="text-slate-500 mb-8">Building something interesting? We'd love to have you on the show.</p>
          <Link
            to="/Apply" className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-3.5 rounded-full transition-all hover:shadow-lg hover:shadow-teal-500/20 text-sm"> Join FoB!




          </Link>
        </div>
      </section>
    </>);

}