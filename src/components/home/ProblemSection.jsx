import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Users, Lightbulb, Globe } from 'lucide-react';

const PROBLEMS = [
  {
    icon: Users,
    title: "Locked out of real networks",
    description: "Traditional founder networks are built for people with decades of experience and warm intros. If you're 22 and building, you're invisible to them."
  },
  {
    icon: GraduationCap,
    title: "More theory than reality",
    description: "Universities teach frameworks. They don't teach you how to pitch, how to close your first customer, or how to survive a failed launch."
  },
  {
    icon: Lightbulb,
    title: "No context for your stage",
    description: "Generic startup advice is everywhere. What's rare is practical context from someone who's actually been at zero — and knows what your stage actually needs."
  },
  {
    icon: Globe,
    title: "Missing the rooms that matter",
    description: "The best opportunities happen in rooms you haven't been invited to yet. FoB puts you in those rooms — events, sprints, and programs across Europe and beyond."
  }
];

export default function ProblemSection() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <p className="text-teal-600 text-sm font-semibold tracking-wide mb-3">THE REALITY</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-teal-900 mb-4">
            Gen Z founders don't have a talent problem. They have an access problem.
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            The ecosystem wasn't built for you. Accelerators want traction. Investors want networks. 
            Events aren't designed for your stage. FoB was built specifically to close that gap.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROBLEMS.map((problem, i) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-100 hover:border-teal-200 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center mb-5">
                <problem.icon className="w-5 h-5 text-teal-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-teal-900">{problem.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}