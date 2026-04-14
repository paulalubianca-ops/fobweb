import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const REVIEWS = [
  {
    name: "Sofia Martínez",
    role: "Student, University of Edinburgh",
    text: "FoB completely changed how I think about entrepreneurship. The case study sessions with real founders are unlike anything I've experienced at university.",
    avatar: "SM",
  },
  {
    name: "Lukas Novák",
    role: "Student, Tomas Bata University",
    text: "I joined not knowing what to expect and left with a network, a mentor, and a much clearer sense of what I want to build. 100% worth it.",
    avatar: "LN",
  },
  {
    name: "Chiara Bianchi",
    role: "Recent Graduate, EHL Lausanne",
    text: "The EHL Innovation Sprint organised with FoB was intense, hands-on, and exactly what I needed. Real feedback, real people, real learning.",
    avatar: "CB",
  },
  {
    name: "Ahmed El-Sayed",
    role: "Student, Geneva Business School",
    text: "Finally a community that meets Gen Z founders where we are. No gatekeeping, no fluff — just access to people and opportunities that actually matter.",
    avatar: "AE",
  },
];

export default function ReviewsSection({ bg = "bg-white" }) {
  return (
    <section className={`py-20 ${bg}`} aria-labelledby="reviews-heading">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="text-teal-600 text-sm font-semibold tracking-wide mb-2">TESTIMONIALS</p>
          <h2 id="reviews-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-teal-900">
            Hear from our community.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-100 hover:border-teal-200 rounded-2xl p-7 transition-all"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} className="w-4 h-4 fill-teal-500 text-teal-500" />
                ))}
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">"{review.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center text-xs font-bold shrink-0">
                  {review.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-teal-900">{review.name}</p>
                  <p className="text-xs text-slate-400">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}