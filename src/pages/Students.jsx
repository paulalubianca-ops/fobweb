import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Users, Mic, Calendar } from 'lucide-react';
import ReviewsSection from '../components/shared/ReviewsSection';
import PhotoGallery from '../components/shared/PhotoGallery';

const BENEFITS = [
{ icon: BookOpen, title: "Case Studies & Masterclasses", desc: "Dive into real startup stories and frameworks from founders who've been in the trenches." },
{ icon: Users, title: "Mentorship Access", desc: "Get matched with vetted operators and investors who help you navigate your specific challenge." },
{ icon: Mic, title: "Podcast & Content", desc: "Learn on the go with our Pitch Lab podcast and curated content built for Gen Z builders." },
{ icon: Calendar, title: "Events & Networking", desc: "Join exclusive events, workshops, and meetups across Europe to expand your ecosystem." }];


const STATS = [
{ value: '130K+', label: 'Students supported globally' },
{ value: '30+', label: 'Universities active' },
{ value: '20+', label: 'Countries represented' },
{ value: '€0', label: 'Cost to apply' }];


export default function Students() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-teal-50 via-white to-blue-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-teal-600 text-sm font-semibold tracking-wide mb-3">FOR STUDENTS</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-teal-900 mb-6">
              The community built for{' '}
              <span className="text-teal-600"> The Next</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed max-w-2xl mb-10">
              Whether you have an idea, a side project, or just the ambition — FoB gives you the access, context, and community you won't find anywhere else.
            </p>
            <Link
              to="/Apply"
              className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-3.5 rounded-full transition-all hover:shadow-lg hover:shadow-teal-500/20 text-sm">
              
              Join Us!
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((s, i) =>
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-teal-50 to-blue-50 border border-teal-100">
              
                <p className="text-3xl font-bold text-teal-700">{s.value}</p>
                <p className="text-xs text-slate-500 mt-1 leading-snug">{s.label}</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12">
            
            <p className="text-teal-600 text-sm font-semibold tracking-wide mb-2">WHAT YOU GET</p>
            <h2 className="text-3xl font-bold tracking-tight text-teal-900">Everything you need to start building.</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BENEFITS.map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-5 p-7 rounded-2xl border border-purple-100 hover:border-teal-200 bg-white hover:shadow-sm transition-all">
                  
                  <div className="w-11 h-11 rounded-xl bg-teal-100 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-teal-900 mb-1">{b.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{b.desc}</p>
                  </div>
                </motion.div>);

            })}
          </div>
        </div>
      </section>

      <PhotoGallery variant="students" />
      <ReviewsSection bg="bg-gradient-to-br from-purple-50 via-white to-blue-50" />

      {/* Who it's for */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-teal-600 text-sm font-semibold tracking-wide mb-3">WHO IT'S FOR</p>
            <h2 className="text-3xl font-bold tracking-tight text-teal-900 mb-5">
              You don't need to be a founder. You just need to be curious.
            </h2>
            <p className="text-slate-500 leading-relaxed mb-10 max-w-xl mx-auto">
              FoB is open to Gen Z students and recent graduates across Europe who are curious about entrepreneurship and ready to take the first step. We meet you where you are.
            </p>
            <Link
              to="/Apply"
              className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-3.5 rounded-full transition-all hover:shadow-lg hover:shadow-teal-500/20 text-sm">
              
              Join Us!
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>);

}