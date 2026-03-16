import React from 'react';
import { motion } from 'framer-motion';
import { Send, UserCheck, Rocket } from 'lucide-react';

const STEPS = [
  {
    icon: Send,
    step: "01",
    title: "Apply",
    description: "Tell us about your idea, your stage, and what you're looking for. No pitch deck required — just honesty."
  },
  {
    icon: UserCheck,
    step: "02",
    title: "Get Matched",
    description: "We pair you with a mentor who's actually relevant to your challenge — not a random connection, a strategic one."
  },
  {
    icon: Rocket,
    step: "03",
    title: "Build & Grow",
    description: "Access events, workshops, case studies, and a community of founders your age who are building too."
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/30 to-slate-950" />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-amber-400 text-sm font-medium tracking-wide mb-3">HOW IT WORKS</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            From application to traction.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative p-8 rounded-2xl bg-white/[0.02] border border-white/5"
            >
              <span className="text-5xl font-bold text-white/[0.04] absolute top-6 right-6">{step.step}</span>
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center mb-6">
                <step.icon className="w-5 h-5 text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}