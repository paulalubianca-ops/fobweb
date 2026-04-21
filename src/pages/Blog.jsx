import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, User } from 'lucide-react';

const POSTS = [
  {
    title: 'Why Next Gen Founders Are Rethinking the Traditional VC Path',
    author: 'Valentina Muller',
    date: 'April 2026',
    readTime: '5 min read',
    tags: ['Fundraising', 'Next Gen'],
    desc: 'More and more Next Gen founders are questioning whether raising venture capital is the right move — and choosing alternative paths to building sustainable businesses.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
  },
  {
    title: 'The European Startup Ecosystem in 2026: What You Need to Know',
    author: 'Thomas Archer Bata',
    date: 'March 2026',
    readTime: '7 min read',
    tags: ['Europe', 'Ecosystem'],
    desc: 'A breakdown of the trends, opportunities, and challenges shaping the European startup landscape this year — and what it means for early-stage founders.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80',
  },
  {
    title: 'How to Build a Network From Zero as a Student Founder',
    author: 'Friederike Feige',
    date: 'February 2026',
    readTime: '4 min read',
    tags: ['Networking', 'Students'],
    desc: "Practical tactics for building a meaningful professional network when you're starting with nothing but ambition and a university email.",
    image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&q=80',
  },
  {
    title: 'What 50+ Events Taught Us About Gen Z Entrepreneurship',
    author: 'FoB Team',
    date: 'January 2026',
    readTime: '6 min read',
    tags: ['Community', 'Insights'],
    desc: "After running more than 50 events across Europe, here are the key patterns, surprises, and lessons we've learned about the next generation of founders.",
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80',
  },
];

const ALL_TAGS = ['All', ...Array.from(new Set(POSTS.flatMap(p => p.tags)))];

export default function Blog() {
  const [activeTag, setActiveTag] = useState('All');
  const filtered = activeTag === 'All' ? POSTS : POSTS.filter(p => p.tags.includes(activeTag));

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-teal-600 text-sm font-semibold tracking-wide mb-3">BLOG</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-teal-900 mb-5">
              Insights for{' '}
              <span className="text-teal-600">builders like you.</span>
            </h1>
            <p className="text-lg text-slate-500 max-w-xl leading-relaxed">
              Founder stories, ecosystem deep-dives, and practical playbooks — written by and for the Next Gen FoB community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-wrap gap-2 mb-12"
          >
            {ALL_TAGS.map(tag => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`text-xs px-4 py-1.5 rounded-full border font-medium transition-all ${
                  activeTag === tag
                    ? 'bg-teal-600 text-white border-teal-600'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-teal-300 hover:text-teal-700'
                }`}
              >
                {tag}
              </button>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((post, i) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 2) * 0.08 }}
                className="group rounded-2xl overflow-hidden bg-white border border-purple-100 hover:border-teal-200 shadow-sm hover:shadow-md transition-all flex flex-col"
              >
                <div className="aspect-video overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {post.tags.map(t => (
                      <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-teal-50 text-teal-700 border border-teal-100">{t}</span>
                    ))}
                  </div>
                  <h3 className="font-semibold text-teal-900 mb-2 leading-snug">{post.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed flex-1 mb-4">{post.desc}</p>
                  <div className="flex items-center gap-3 text-xs text-slate-400 border-t border-slate-100 pt-4">
                    <User className="w-3.5 h-3.5" />
                    <span>{post.author}</span>
                    <span className="ml-auto flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{post.readTime} · {post.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-teal-900 mb-3">Want to contribute?</h2>
          <p className="text-slate-500 mb-8">Have a story, insight, or lesson worth sharing with the FoB community? We'd love to feature it.</p>
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