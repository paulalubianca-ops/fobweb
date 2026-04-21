import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Mic, FileText, ArrowRight } from 'lucide-react';

const SECTIONS = [
  {
    icon: FileText,
    label: 'Case Studies',
    path: '/Resources/CaseStudies',
    description: 'Real startups, real decisions. Deep-dive reports written for founders who want to learn from what actually happened.',
    color: 'from-purple-50 to-blue-50',
    border: 'border-purple-100 hover:border-teal-200',
    iconBg: 'bg-purple-100 text-purple-600',
  },
  {
    icon: BookOpen,
    label: 'Masterclasses',
    path: '/Resources/Masterclasses',
    description: 'Structured sessions with top operators and investors — covering fundraising, product, go-to-market, and more.',
    color: 'from-teal-50 to-cyan-50',
    border: 'border-teal-100 hover:border-teal-300',
    iconBg: 'bg-teal-100 text-teal-600',
  },
  {
    icon: Mic,
    label: 'Blog',
    path: '/Resources/Blog',
    description: 'Insights, founder stories, and playbooks from the FoB community — written for Gen Z builders.',
    color: 'from-blue-50 to-indigo-50',
    border: 'border-blue-100 hover:border-blue-300',
    iconBg: 'bg-blue-100 text-blue-600',
  },
];

export default function Resources() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-teal-600 text-sm font-semibold tracking-wide mb-3">RESOURCES</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-teal-900 mb-5">
              Everything you need{' '}
              <span className="text-teal-600">to build smarter.</span>
            </h1>
            <p className="text-lg text-slate-500 max-w-xl leading-relaxed">
              Case studies, masterclasses, and insights — curated for the Next Gen of European entrepreneurs.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SECTIONS.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={s.path}
                    className={`block p-8 rounded-2xl border bg-gradient-to-br ${s.color} ${s.border} transition-all hover:shadow-md group`}
                  >
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${s.iconBg}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h2 className="text-xl font-bold text-teal-900 mb-3 group-hover:text-teal-700 transition-colors">{s.label}</h2>
                    <p className="text-slate-500 text-sm leading-relaxed mb-5">{s.description}</p>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-teal-600">
                      Explore <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}