import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const VIDEOS = [
  {
    title: 'How to Teach Using Case Studies',
    tags: ['Education', 'Case Studies'],
    image: 'https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/686fc05e99e8177886735fc8_686fbe493e37762cf49c3617_Screenshot%202025-07-08%20at%2012.02.12.png',
    link: 'https://drive.google.com/file/d/1w11eX9eBjKoc3C12GG9hyw4xRgapEogJ/view?usp=sharing',
  },
  {
    title: 'How to Write a Case Study',
    tags: ['Education', 'Writing'],
    image: 'https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/686fc017014ab22fef79223c_686fbe493e37762cf49c3616_Screenshot%202025-07-08%20at%2011.44.36.png',
    link: 'https://drive.google.com/file/d/1znZ_Q0YVRiWav1ujzuEdCm5vbItM4Qx-/view?usp=sharing',
  },
];

const ALL_TAGS = ['All', ...Array.from(new Set(VIDEOS.flatMap(v => v.tags)))];

export default function Masterclasses() {
  const [activeTag, setActiveTag] = useState('All');
  const filtered = activeTag === 'All' ? VIDEOS : VIDEOS.filter(v => v.tags.includes(activeTag));

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-purple-50 via-white to-blue-50 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl md:text-6xl font-bold text-teal-900 mb-4">Video Content</h1>
            <p className="text-lg text-slate-500">Check out our latest interviews and classes!</p>
          </motion.div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Tag filters */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-wrap gap-2 mb-12 justify-center"
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

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((video, i) => (
              <motion.a
                key={video.title}
                href={video.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.07 }}
                className="group rounded-2xl overflow-hidden bg-white border border-slate-100 hover:border-teal-200 shadow-sm hover:shadow-md transition-all flex flex-col"
              >
                <div className="relative aspect-video overflow-hidden bg-slate-100">
                  <img
                    src={video.image}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-teal-900/20 group-hover:bg-teal-900/35 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                      <Play className="w-5 h-5 text-teal-700 ml-0.5" />
                    </div>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {video.tags.map(t => (
                      <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-teal-50 text-teal-700 border border-teal-100">{t}</span>
                    ))}
                  </div>
                  <h3 className="font-semibold text-teal-900 leading-snug group-hover:text-teal-600 transition-colors">{video.title}</h3>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-teal-900 mb-3">Want to host a masterclass?</h2>
          <p className="text-slate-500 mb-8">If you are an operator, investor, or founder with a story to share — we would love to have you.</p>
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