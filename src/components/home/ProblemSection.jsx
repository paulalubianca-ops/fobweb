import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Users, Lightbulb, Globe } from 'lucide-react';

const PROBLEMS = [
  {
    icon: Users,
    title: "No access to real networks",
    description: "Traditional founder networks are built for people with decades of experience. If you're 20 and building, you're invisible."
  },
  {
    icon: GraduationCap,
    title: "Too much theory, not enough practice",
    description: "University teaches frameworks. It doesn't teach you how to close your first customer or survive a failed launch."
  },
  {
    icon: Lightbulb,
    title: "Mentors who don't get your stage",
    description: "You don't need a keynote speaker. You need someone who remembers what it felt like to build from zero."
  },
  {
    icon: Globe,
    title: "Isolated from the global ecosystem",
    description: "The best opportunities happen in rooms you're not in yet. FoB puts you in those rooms — across Europe and beyond."
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
            Gen Z founders face a different kind of problem.
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            It's not a lack of ideas or ambition. It's a lack of access — to mentors, networks, 
            and the practical context that turns a student project into a real venture.
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