import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, Target, Clock } from 'lucide-react';

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

const FOUNDERS = [
  { name: "Jakub Veselsky", role: "Co-Founder - FreshLabels", bio: "Co-founder at Freshlabels. Expertise in Event Planning, Marketing Communications, and Brand Management.", image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/66c9acbabea7984c4ae782ce_Jakub%20Veselsky.avif", linkedin: "https://www.linkedin.com/in/jakub-veselsky-566b5a3a/" },
  { name: "Julieta Rueff", role: "Founder - Flamaid", bio: "Founder at Flamaid, currently pursuing a degree in Marketing and International Business in ESCI Barcelona. Her dedication to empowering women and challenging societal norms has positioned Flamaid as a pioneering force in social entrepreneurship.", image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/66c9ad3280c801a57f266da3_Julieta%20Rueff.avif", linkedin: "https://www.linkedin.com/in/julietarueff/" },
  { name: "Jan Kratochvil", role: "Co-Founder - Winqs", bio: "Communication, marketing, and branding expert with a passion for sustainable sports and technology. As CEO of Winqs Sports, dedicated to transforming the sports industry.", image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/66c9adaa0eb4645715e7a06f_Jan%20Kratochvil.avif", linkedin: "https://www.linkedin.com/in/kratochvilj/" },
  { name: "Marek Brincil", role: "Co-Founder - Winqs", bio: "Leader with a background in business management and corporate finance, bringing operational expertise to the Winqs sustainable sports brand.", image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/66c9adcb076392a46087568b_Marek%20Brincil.avif", linkedin: "https://www.linkedin.com/in/marek-brincil-64580725/" },
  { name: "Mattia Curma", role: "Co-Founder - Forestmatic", bio: "Co-founder of Forestmatic, a B2B platform helping businesses measure investment in forest restoration through digital tools.", image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/67374ea4778c5748e79967a5_NWcfL6xccnH5XVRStCJnk35xyCm2Rn2GX0J3fqkJ.webp", linkedin: "https://www.linkedin.com/in/mattia-curma/" },
];

function MentorCard({ mentor, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (index % 4) * 0.08 }}
      className="group rounded-2xl overflow-hidden bg-white border border-purple-100 hover:border-teal-200 shadow-sm hover:shadow-md transition-all"
    >
      <div className="aspect-square overflow-hidden">
        <img src={mentor.image} alt={mentor.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-sm text-teal-900">{mentor.name}</h3>
        <p className="text-slate-500 text-xs mt-0.5 mb-2">{mentor.role}</p>
        <div className="flex flex-wrap gap-1">
          {mentor.tags.map(tag => (
            <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-teal-50 text-teal-700 border border-teal-100">{tag}</span>
          ))}
        </div>
        <a href={mentor.linkedin} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-xs text-slate-400 hover:text-teal-600 transition-colors">LinkedIn →</a>
      </div>
    </motion.div>
  );
}

function FounderCard({ member, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
      className="flex gap-4 p-5 rounded-2xl border border-purple-100 hover:border-teal-200 bg-white hover:shadow-sm transition-all"
    >
      <img src={member.image} alt={member.name} className="w-16 h-16 rounded-xl object-cover object-top shrink-0" />
      <div className="min-w-0">
        <h3 className="font-semibold text-teal-900 text-sm">{member.name}</h3>
        <p className="text-teal-600 text-xs font-semibold mt-0.5 mb-1">{member.role}</p>
        <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">{member.bio}</p>
        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="inline-block mt-1.5 text-xs text-slate-400 hover:text-teal-600 transition-colors">LinkedIn →</a>
      </div>
    </motion.div>
  );
}

export default function OurCommunity() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-teal-600 text-sm font-semibold tracking-wide mb-3">OUR COMMUNITY</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-teal-900 mb-5">
              The people who make{' '}
              <span className="text-teal-600">FoB work.</span>
            </h1>
            <p className="text-lg text-slate-500 max-w-2xl leading-relaxed">
              From seasoned operators and investors to disruptive Gen Z founders — our community is built on real experience and a shared belief in the next generation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mentors Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <p className="text-teal-600 text-sm font-semibold tracking-wide mb-2">MENTORS</p>
            <h2 className="text-3xl font-bold tracking-tight text-teal-900 mb-2">Learn from people who've already built it.</h2>
            <p className="text-slate-500 max-w-xl">Our mentors are operators, investors, and founders across Europe and beyond. They commit real time to help you build.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {MENTORS.map((mentor, i) => (
              <MentorCard key={mentor.name} mentor={mentor} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <p className="text-teal-600 text-sm font-semibold tracking-wide mb-2">GEN Z FOUNDERS</p>
            <h2 className="text-3xl font-bold tracking-tight text-teal-900 mb-2">Disruptive founders behind FoB.</h2>
            <p className="text-slate-500 max-w-xl">These are the startup leaders who actively support us in developing high-quality content for our future entrepreneurs.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FOUNDERS.map((member, i) => (
              <FounderCard key={member.name} member={member} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-teal-900 mb-3">Ready to join?</h2>
          <p className="text-slate-500 mb-8">From first prototype to real traction — we're here to help.</p>
          <Link to="/Apply" className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-3.5 rounded-full transition-all hover:shadow-lg hover:shadow-teal-500/20 text-sm">
            Apply Now
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}