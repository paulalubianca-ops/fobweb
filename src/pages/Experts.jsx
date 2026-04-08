import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MessageSquare, Target, Clock, Users, Briefcase } from 'lucide-react';
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

const FOUNDERS = [
  { name: "Jakub Veselsky", role: "Co-Founder - FreshLabels", bio: "Co-founder at Freshlabels. Expertise in Event Planning, Marketing Communications, and Brand Management.", image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/66c9acbabea7984c4ae782ce_Jakub%20Veselsky.avif", linkedin: "https://www.linkedin.com/in/jakub-veselsky-566b5a3a/" },
  { name: "Friedi Feige-Bata", role: "Sustainability Manager - MGG", bio: "Sustainability guru with a background in infectious disease microbiology and public health.", image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/66c9acf5e1337c5e22286ada_Friedi%20Feige-Bata.avif", linkedin: "https://www.linkedin.com/in/friederike-feige-94a06153/" },
  { name: "Julieta Rueff", role: "Founder - Flamaid", bio: "Founder at Flamaid, positioning it as a pioneering force in social entrepreneurship.", image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/66c9ad3280c801a57f266da3_Julieta%20Rueff.avif", linkedin: "https://www.linkedin.com/in/julietarueff/" },
  { name: "Jonne Hellgren", role: "Co-Founder - Repack", bio: "Visionary leader at the forefront of the sustainable packaging revolution.", image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/66c9ad5d3643526e304149fc_Jonne%20Hellgren.avif", linkedin: "https://www.linkedin.com/in/jonnehellgren/" },
  { name: "Jan Kratochvil", role: "Co-Founder - Winqs", bio: "Communication, marketing, and branding expert with a passion for sustainable sports and technology.", image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/66c9adaa0eb4645715e7a06f_Jan%20Kratochvil.avif", linkedin: "https://www.linkedin.com/in/kratochvilj/" },
  { name: "Marek Brincil", role: "Co-Founder - Winqs", bio: "Seasoned leader with a robust background in business management and corporate finance.", image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/66c9adcb076392a46087568b_Marek%20Brincil.avif", linkedin: "https://www.linkedin.com/in/marek-brincil-64580725/" },
  { name: "Thomas A. Bata", role: "Co-Founder - Time Tennis", bio: "CEO of Triple B International, Director of Friends of Bata, founder of MGG outdoor clothing brand.", image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/66c9adf52841a4a5483e1cc1_Thomas%20A.%20Bata.avif", linkedin: "https://www.linkedin.com/in/thomasabata/" },
  { name: "Adrian Escabias", role: "CEO & Co-Founder - Aticco Ventures", bio: "Led a diversified portfolio of startups in Spain, building a high-quality private community in the startup ecosystem.", image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/66c9ae30e9cc11d29a1c8a0e_Adrian%20Escabias.avif", linkedin: "https://www.linkedin.com/in/adrian-escabias/" },
  { name: "David Mayer-Heinisch", role: "Co-Founder - froots.io", bio: "Founder of froots.io, a pioneering wealth-building platform for individuals and businesses.", image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/67374c4a4411d6a90380d8cf_1701367045958.jpeg", linkedin: "https://www.linkedin.com/in/david-mayer-heinisch/" },
  { name: "Mattia Curma", role: "Co-Founder - Forestmatic", bio: "Co-founder of Forestmatic, a B2B platform helping businesses measure investment in forest restoration.", image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/67374ea4778c5748e79967a5_NWcfL6xccnH5XVRStCJnk35xyCm2Rn2GX0J3fqkJ.webp", linkedin: "https://www.linkedin.com/in/mattia-curma/" },
  { name: "Flavien Chaussegros", role: "Co-Founder - Invisible Company", bio: "Co-founder of Invisible Company, creating innovative water-soluble packaging alternatives to plastic.", image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/67cedf10a464abf7298fd135_Screenshot%202025-03-10%20at%2013.43.48.png", linkedin: "https://www.linkedin.com/in/flavien-chaussegros-89592610/" },
  { name: "Devana Ng", role: "Co-Founder - Invisible Company", bio: 'Known as the "Chief Trash Officer," she leads development of sustainable alternatives. TEDx speaker.', image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/67cf01f566898a7476e9994a_Screenshot%202025-03-10%20at%2013.44.32.png", linkedin: "https://www.linkedin.com/in/devanang/" },
  { name: "Kathryn Bricken", role: "Founder - Doughlicious", bio: "Founder and CEO of Doughlicious, leading the brand from startup to an internationally recognized cookie dough company.", image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/67f4dd0f6620d9b7013c0542_1710350725678.jpeg", linkedin: "https://www.linkedin.com/in/kathryn-bricken-78620625/" },
  { name: "Singal Depéry", role: "Co-Founder & Designer - ID Genève", bio: "Co-founder and Lead Designer at ID Genève Watches with nearly two decades of industrial design expertise.", image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/6852a7f1175ededfb379d151_1709981028475.jpeg", linkedin: "https://www.linkedin.com/in/singal-dep%C3%A9ry-b164552b/" },
  { name: "Nicolas Freudiger", role: "Co-Founder & CEO - ID Genève", bio: "Entrepreneur and circular economy advocate. Background at Coca-Cola HBC, LVMH, and EHL.", image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/6852a8af76ec47625e2a76d7_1539600609016.jpeg", linkedin: "https://www.linkedin.com/in/nicolas-freudiger-9a684a31/" },
  { name: "Cédric Mulhauser", role: "Watchmaker & Co-Founder - ID Genève", bio: "Master watchmaker with deep technical expertise from Vacheron Constantin and Emile Chouriet.", image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/6852a921aa41f6bbf384d5d8_1701374292316.jpeg", linkedin: "https://www.linkedin.com/in/c%C3%A9dric-mulhauser-856749122/" },
  { name: "Vincent Borel", role: "CEO - Equip Sport", bio: "Tech leader redefining access to sports through circular, sustainable models. Career spanning Nestlé and Logitech.", image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/68fb81683ebff1362df3f808_1661130112270.jpeg", linkedin: "https://www.linkedin.com/in/vborel/" },
  { name: "Roger Espasa", role: "Co-Founder - Onepercent", bio: "Founded onepercent, a healthtech project born to turn health and habits into measurable and repeatable results.", image: "", linkedin: "https://www.linkedin.com/in/rogerespasamarco/" },
  { name: "Gonzalo Comella", role: "Founder - Liseners", bio: "Entrepreneur specialized in B2C business models, building Liseners — a subscription platform for guidance and support.", image: "", linkedin: "https://www.linkedin.com/in/gonzalocomella/" },
];

const PILLARS = [
  { icon: MessageSquare, title: "1:1 Sessions", desc: "Regular, focused conversations with a mentor who understands your challenge and stage." },
  { icon: Target, title: "Domain Matching", desc: "We pair you with someone who has direct expertise in what you're building — not a generalist." },
  { icon: Clock, title: "Ongoing Relationship", desc: "This isn't a one-time call. Mentors commit to working with you through real milestones." },
];

const TABS = [
  { id: 'mentors', label: 'Mentors', icon: Briefcase },
  { id: 'founders', label: 'Founders Club', icon: Users },
];

export default function Experts() {
  const [active, setActive] = useState('mentors');

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-teal-600 text-sm font-semibold tracking-wide mb-3">EXPERTS</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-teal-900 mb-6">
              The people behind{' '}
              <span className="text-teal-600">the ecosystem.</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed max-w-2xl">
              Operators, investors, and founders who actively mentor, share playbooks, and shape our content for Gen Z builders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-3 mb-12">
            {TABS.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActive(tab.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all border ${
                    active === tab.id
                      ? 'bg-teal-600 text-white border-teal-600 shadow-md shadow-teal-500/20'
                      : 'bg-white text-slate-600 border-slate-200 hover:border-teal-300'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            {active === 'mentors' && (
              <motion.div key="mentors" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
                {/* Mentorship pillars */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
                  {PILLARS.map((p, i) => (
                    <motion.div
                      key={p.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-100"
                    >
                      <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center mb-5">
                        <p.icon className="w-5 h-5 text-teal-600" />
                      </div>
                      <h3 className="font-semibold mb-2 text-teal-900">{p.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-teal-900 mb-1">Our Mentors</h2>
                  <p className="text-slate-500 text-sm">20+ vetted professionals ready to help you build.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                  {MENTORS.map((mentor, i) => (
                    <MentorCard key={mentor.name} mentor={mentor} index={i} />
                  ))}
                </div>
              </motion.div>
            )}

            {active === 'founders' && (
              <motion.div key="founders" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-teal-900 mb-1">Founders Club</h2>
                  <p className="text-slate-500 text-sm">The disruptive founders and startup leaders who shape our content.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {FOUNDERS.map((member, i) => (
                    <motion.div
                      key={member.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
                      className="flex gap-4 p-5 rounded-2xl border border-purple-100 hover:border-teal-200 bg-white hover:shadow-sm transition-all"
                    >
                      {member.image && <img src={member.image} alt={member.name} className="w-16 h-16 rounded-xl object-cover object-top shrink-0" />}
                      <div className="min-w-0">
                        <h3 className="font-semibold text-teal-900 text-sm">{member.name}</h3>
                        <p className="text-teal-600 text-xs font-semibold mt-0.5 mb-1">{member.role}</p>
                        <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">{member.bio}</p>
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="inline-block mt-1.5 text-xs text-slate-400 hover:text-teal-600 transition-colors">LinkedIn →</a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-teal-900 mb-4">Ready to connect with our experts?</h2>
          <p className="text-slate-500 mb-8">Apply to FoB and tell us what you're building. We'll connect you with the right people.</p>
          <Link to="/Apply" className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-3.5 rounded-full transition-all hover:shadow-lg hover:shadow-teal-500/20 text-sm">
            Apply Now
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}