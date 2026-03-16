import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const FEATURED_MENTORS = [
  {
    name: "Jesper Lok",
    role: "Chair, Inchcape Shipping Services",
    expertise: "Business Strategy",
    image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/66ed7b6a0ace688c3aed31bf_92218559b37bfe70_org-scaled.webp",
  },
  {
    name: "Thomas Archer Bata",
    role: "Investor, Triple B International",
    expertise: "Investments & Impact",
    image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/66f13b8efa125fa0b054e438_1634207577445.jpeg",
  },
  {
    name: "Alessio Oriolo",
    role: "Innovation Manager, Accenture Song",
    expertise: "Startup Creation",
    image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/670fc1386a81c75f9644f7c4_1675458281585.jpeg",
  },
  {
    name: "Adrian Escabias",
    role: "Co-Founder, Funding Place",
    expertise: "Fundraising & Pitch",
    image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/68fb658568ea682a3016f973_1755240065083.jpeg",
  },
];

export default function MentorshipSpotlight() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — messaging */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32"
          >
            <p className="text-amber-400 text-sm font-medium tracking-wide mb-3">OUR FLAGSHIP</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5">
              Mentorship that actually moves the needle.
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              Not generic office hours. Not a LinkedIn connection. Our mentors are operators, 
              investors, and founders who commit real time to helping you build.
            </p>
            <div className="space-y-4 mb-8">
              {[
                "1:1 sessions with vetted industry leaders",
                "Domain-specific guidance (tech, marketing, fundraising, strategy)",
                "A relationship, not a one-time call",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                  <p className="text-slate-300 text-sm">{item}</p>
                </div>
              ))}
            </div>
            <Link 
              to="/Mentorship"
              className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 text-sm font-medium transition-colors"
            >
              Meet all 20+ mentors
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Right — mentor cards */}
          <div className="grid grid-cols-2 gap-4">
            {FEATURED_MENTORS.map((mentor, i) => (
              <motion.div
                key={mentor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-white/[0.02] border border-white/5 hover:border-amber-500/20 transition-all"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={mentor.image} 
                    alt={mentor.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-sm">{mentor.name}</h3>
                  <p className="text-slate-500 text-xs mt-0.5">{mentor.role}</p>
                  <span className="inline-block mt-2 text-xs px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400">
                    {mentor.expertise}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}