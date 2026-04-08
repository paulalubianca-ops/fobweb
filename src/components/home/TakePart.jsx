import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GraduationCap, Building2, TrendingUp, ArrowRight } from 'lucide-react';

const PATHS = [
  {
    id: 'students',
    icon: GraduationCap,
    label: 'Students',
    headline: 'Get a taste of Entrepreneurship',
    description:
      'Access mentorship, masterclasses, case studies, and a community of Gen Z builders who are actually building. Apply for free.',
    cta: 'Apply Now',
    ctaLink: '/Apply',
    accent: 'from-teal-50 to-blue-50 border-teal-100',
    iconBg: 'bg-teal-100 text-teal-600',
  },
  {
    id: 'organizations',
    icon: Building2,
    label: 'Organizations',
    headline: 'Plug into the next generation.',
    description:
      'Partner with FoB to bring entrepreneurship programs to your institution, sponsor events, or co-create content with our community.',
    cta: 'Partner With Us',
    ctaLink: '/Apply',
    accent: 'from-purple-50 to-pink-50 border-purple-100',
    iconBg: 'bg-purple-100 text-purple-600',
  },
  {
    id: 'investors',
    icon: TrendingUp,
    label: 'Investors',
    headline: 'Meet your next deal.',
    description:
      'Get early access to Gen Z founders building in Europe. Join our network and connect directly with ambitious entrepreneurs at the earliest stage.',
    cta: 'Join the Network',
    ctaLink: '/Apply',
    accent: 'from-orange-50 to-yellow-50 border-orange-100',
    iconBg: 'bg-orange-100 text-orange-600',
  },
];

export default function TakePart() {
  return (
    <section className="py-24 bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="text-teal-600 text-sm font-semibold tracking-wide mb-2">TAKE PART</p>
          <h2 className="text-4xl font-bold tracking-tight text-teal-900 mb-3">
            Find your place in the ecosystem.
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Whether you're building, investing, or enabling — there's a role for you in the FoB ecosystem.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PATHS.map((path, i) => (
            <motion.div
              key={path.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`flex flex-col rounded-2xl border bg-gradient-to-br ${path.accent} p-8 hover:shadow-md transition-all`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 ${path.iconBg}`}>
                <path.icon className="w-5 h-5" />
              </div>
              <p className="text-xs font-semibold tracking-widest text-slate-400 mb-2 uppercase">{path.label}</p>
              <h3 className="text-xl font-bold text-teal-900 mb-3">{path.headline}</h3>
              <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-6">{path.description}</p>
              <Link
                to={path.ctaLink}
                className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-900 transition-colors group"
              >
                {path.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}