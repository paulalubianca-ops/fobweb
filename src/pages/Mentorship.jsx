import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, Target, Clock } from 'lucide-react';
import MentorCard from '../components/mentorship/MentorCard';

const MENTORS = [
  { name: "Jesper Lok", role: "Chair, Inchcape Shipping Services", tags: ["Business Strategy", "Change Management"], image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/66ed7b6a0ace688c3aed31bf_92218559b37bfe70_org-scaled.webp", linkedin: "https://www.linkedin.com/in/jesper-lok-0246a330" },
  { name: "Thomas Archer Bata", role: "Investor, Triple B International", tags: ["Investments", "Impact"], image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/66f13b8efa125fa0b054e438_1634207577445.jpeg", linkedin: "https://www.linkedin.com/in/thomasabata/" },
  { name: "Jelena Tasic", role: "MD, Lifestyle-Tech Competence Centre", tags: ["Go-to-Market", "Business Dev"], image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/66f128eaf8c0222f239c4a6e_1671608254342.jpeg", linkedin: "https://www.linkedin.com/in/jelenatasicpizzolato/" },
  { name: "Alessio Oriolo", role: "Innovation Manager, Accenture Song", tags: ["Startup Creation", "Web3"], image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/670fc1386a81c75f9644f7c4_1675458281585.jpeg", linkedin: "https://www.linkedin.com/in/alessio-oriolo/" },
  { name: "Adrian Escabias", role: "Co-Founder, Funding Place", tags: ["Fundraising", "Pitch Decks"], image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/68fb658568ea682a3016f973_1755240065083.jpeg", linkedin: "https://www.linkedin.com/in/adrian-escabias/" },
  { name: "Gianluca Pontoni", role: "Founder, Lead The Future Mentorship", tags: ["Venture Capital", "Strategy"], image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/670fc29723ef285fa7f10675_1687500661037.jpeg", linkedin: "https://www.linkedin.com/in/gianlucapontoni/" },
  { name: "Enrico Scognamillo", role: "Engineering Manager, Jagaad", tags: ["Software Dev", "Tech Startups"], image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/6700652a60fc5bfe4129abab_Disen%CC%83o%20sin%20ti%CC%81tulo%20(14).png", linkedin: "https://www.linkedin.com/in/enricoscognamillo/" },
  { name: "Renje Booij", role: "Google Ads Expert, ALO Ads", tags: ["Digital Marketing", "Sales"], image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/670fc05f2f92b00ff1af1d5b_Renje%20Booji.jpeg", linkedin: "https://www.linkedin.com/in/renje-booij-4abba176/" },
  { name: "Marta Slováková", role: "CEO, JA Slovakia", tags: ["Leadership", "HR"], image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/66f811be6da5094bf6085648_1716363476484.jpeg", linkedin: "https://www.linkedin.com/in/marta-slovakova-311b15133/" },
  { name: "Friedi Feige", role: "Sustainability Manager, MGG", tags: ["Sustainability", "Project Mgmt"], image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/66f127b6533d89f1a8107594_Friedi%20F.jpeg", linkedin: "https://www.linkedin.com/in/friederike-feige-94a06153/" },
  { name: "Arnold Mugagga", role: "Co-Founder, ZETU Foundation", tags: ["Product Dev", "Industrial Design"], image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/690de15bbcd75c035773133a_1729079513974.jpeg", linkedin: "https://www.linkedin.com/in/arnold-leon-mugagga/" },
  { name: "Thomas Clapper", role: "Brand Manager, LaunchX", tags: ["Marketing", "Branding"], image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/68fb636c2aab5e650ff03d2e_1761303950758.jpeg", linkedin: "https://www.linkedin.com/in/clapperman/" },
];

const PILLARS = [
  { icon: MessageSquare, title: "1:1 Sessions", desc: "Regular, focused conversations with a mentor who understands your challenge and stage." },
  { icon: Target, title: "Domain Matching", desc: "We pair you with someone who has direct expertise in what you're building — not a generalist." },
  { icon: Clock, title: "Ongoing Relationship", desc: "This isn't a one-time call. Mentors commit to working with you through real milestones." },
];

export default function Mentorship() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-amber-400 text-sm font-medium tracking-wide mb-3">MENTORSHIP PROGRAM</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Learn from people who've{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                already built it.
              </span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
              Our mentors are operators, investors, and founders across Europe and beyond. 
              They don't lecture — they roll up their sleeves and help you build.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How mentorship works */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-white/[0.02] border border-white/5"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center mb-5">
                  <p.icon className="w-5 h-5 text-amber-400" />
                </div>
                <h3 className="font-semibold mb-2">{p.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentor grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight mb-2">Our 2025 Mentors</h2>
            <p className="text-slate-400">20+ vetted professionals ready to help you build.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {MENTORS.map((mentor, i) => (
              <MentorCard key={mentor.name} mentor={mentor} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Ready to get matched with a mentor?
          </h2>
          <p className="text-slate-400 mb-8">
            Apply to FoB and tell us what you're building. We'll connect you with the right person.
          </p>
          <Link 
            to="/Apply"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold px-8 py-3.5 rounded-full transition-all hover:shadow-lg hover:shadow-amber-500/20 text-sm"
          >
            Apply Now
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}