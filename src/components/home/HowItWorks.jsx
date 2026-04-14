import React from 'react';
import { motion } from 'framer-motion';
import { Send, UserCheck, Rocket } from 'lucide-react';

const STEPS = [
  {
    icon: Send,
    step: "01",
    title: "Apply",
    description: "Tell us who you are and what you're building. No pitch deck, no traction required. Just show up with an idea and a drive to build."
  },
  {
    icon: UserCheck,
    step: "02",
    title: "Join the Community",
    description: "Get access to our network of Gen Z founders, operators, and partners. A community that's at your stage — not five years ahead of it."
  },
  {
    icon: Rocket,
    step: "03",
    title: "Attend Events & Programs",
    description: "Participate in innovation sprints, live masterclasses, workshops, and case study sessions — built to give you practical context and real connections."
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 md:py-32 bg-white" aria-labelledby="how-it-works-heading">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-teal-600 text-sm font-semibold tracking-wide mb-3">HOW IT WORKS</p>
          <h2 id="how-it-works-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-teal-900">
            Apply. Join. Build.
          </h2>
        </motion.div>

        <ol className="grid grid-cols-1 md:grid-cols-3 gap-8 list-none p-0">
          {STEPS.map((step, i) => (
            <motion.li
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-100"
            >
              <span className="text-5xl font-bold text-purple-100 absolute top-6 right-6" aria-hidden="true">{step.step}</span>
              <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center mb-6" aria-hidden="true">
                <step.icon className="w-5 h-5 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-teal-900">{step.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}