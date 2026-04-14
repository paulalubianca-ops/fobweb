import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Users, Lightbulb, Globe } from 'lucide-react';

const PROBLEMS = [
  {
    icon: Lightbulb,
    title: "Has a startup idea or early-stage project",
    description: "You have an idea — maybe even a prototype. You don't need a pitch deck or traction to get started. Just show up ready to build."
  },
  {
    icon: Users,
    title: "Wants to meet other young founders",
    description: "Build real relationships with peers who are at the same stage, facing the same challenges, and building real things — not just networking for the sake of it."
  },
  {
    icon: GraduationCap,
    title: "Is looking for honest feedback, not just theory",
    description: "Universities teach frameworks. FoB connects you with operators and founders who give you real, actionable feedback based on lived experience."
  },
  {
    icon: Globe,
    title: "Values practical learning based on real challenges",
    description: "Startup Challenges, Founder Q&As, Podcast Sessions, Pitch Events, and Real Case Study Debates — built to help you learn by doing."
  }
];

export default function ProblemSection() {
  return (
    <section className="py-24 md:py-32 bg-white" aria-labelledby="problem-heading">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <p className="text-teal-600 text-sm font-semibold tracking-wide mb-3">THIS IS FOR YOU IF…</p>
          <h2 id="problem-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-teal-900 mb-4">
            You're a student or recent grad who:
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Friends of Bata is a launchpad for student founders — where ideas get tested, ventures grow, and real connections happen. Through events, content, podcasts, and startup challenges, we help young builders learn by doing.
          </p>
        </motion.div>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 list-none p-0">
          {PROBLEMS.map((problem, i) => (
            <motion.li
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-100 hover:border-teal-200 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center mb-5" aria-hidden="true">
                <problem.icon className="w-5 h-5 text-teal-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-teal-900">{problem.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{problem.description}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}