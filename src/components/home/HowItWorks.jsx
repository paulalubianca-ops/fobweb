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
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-teal-600 text-sm font-semibold tracking-wide mb-3">HOW IT WORKS</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-teal-900">
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
              className="relative p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-100"
            >
              <span className="text-5xl font-bold text-purple-100 absolute top-6 right-6">{step.step}</span>
              <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center mb-6">
                <step.icon className="w-5 h-5 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-teal-900">{step.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}