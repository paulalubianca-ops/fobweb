import React from 'react';
import { motion } from 'framer-motion';
import { Send, UserCheck, Rocket } from 'lucide-react';

const STEPS = [
  {
    icon: Send,
    step: "01",
    title: "Startup Challenges & Pitch Events",
    description: "Test your ideas against real challenges, pitch in front of founders and experts, and get the kind of honest feedback that actually moves you forward."
  },
  {
    icon: UserCheck,
    step: "02",
    title: "Founder Q&As & Masterclasses",
    description: "Get direct access to operators and investors through live sessions, online masterclasses, and intimate Q&As built around your questions."
  },
  {
    icon: Rocket,
    step: "03",
    title: "Real Case Study Debates",
    description: "Explore real startup stories, debate the decisions, and meet the founders behind them. Practical context from people who've actually been at zero."
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
          <p className="text-teal-600 text-sm font-semibold tracking-wide mb-3">EVENTS</p>
          <h2 id="how-it-works-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-teal-900">
            Learn by doing — online and in person.
          </h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
            We host a mix of online and offline gatherings where young entrepreneurs connect, co-create, and challenge each other.
          </p>
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