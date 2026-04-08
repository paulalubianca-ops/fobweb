import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GraduationCap, Building2, University, TrendingUp, ArrowRight, Megaphone } from 'lucide-react';

const SECTIONS = [
  {
    id: 'students',
    icon: GraduationCap,
    label: 'Students',
    headline: 'Get a taste of Entrepreneurship.',
    description:
      'Access mentorship, masterclasses, case studies, and a community of Gen Z builders who are actually building. Apply for free and start your founder journey today.',
    details: [
      'Free to apply — open to all students',
      'Mentorship from vetted founders & operators',
      'Full access to case studies and masterclasses',
      'Private community of Gen Z builders',
      'Events, workshops, and networking opportunities',
    ],
    cta: 'Apply Now',
    ctaLink: '/Apply',
    accent: 'from-teal-50 to-blue-50',
    border: 'border-teal-200',
    iconBg: 'bg-teal-100 text-teal-600',
    activeTab: 'bg-teal-600 text-white border-teal-600',
  },
  {
    id: 'organizations',
    icon: Building2,
    label: 'Organizations',
    headline: 'Plug into the next generation.',
    description:
      'Partner with FoB to bring entrepreneurship programs to your teams, sponsor events, or co-create content with our community of Gen Z founders across Europe.',
    details: [
      'Custom sponsorship & partnership packages',
      'Brand visibility across events and content',
      'Access to Gen Z founder talent pipeline',
      'Co-created workshops and activations',
      'Speaking and mentorship opportunities',
    ],
    cta: 'Partner With Us',
    ctaLink: '/Apply',
    accent: 'from-purple-50 to-pink-50',
    border: 'border-purple-200',
    iconBg: 'bg-purple-100 text-purple-600',
    activeTab: 'bg-purple-600 text-white border-purple-600',
  },
  {
    id: 'universities',
    icon: University,
    label: 'Universities',
    headline: 'Turn your campus into an entrepreneurial ecosystem.',
    description:
      'The Friends of Bata Campus program brings structured entrepreneurship content and community directly into your institution — designed to plug into existing curricula.',
    details: [
      'Full Builder/Insider access for your students',
      'Structured learning paths (plug into curriculum)',
      'Guest mentor sessions on campus',
      'Certificates of completion (great for CVs)',
      'Startup showcase opportunities',
    ],
    cta: 'Contact Us for Pricing',
    ctaLink: 'mailto:partnerships@friendsofbata.com',
    external: true,
    accent: 'from-blue-50 to-indigo-50',
    border: 'border-blue-200',
    iconBg: 'bg-blue-100 text-blue-600',
    activeTab: 'bg-blue-600 text-white border-blue-600',
  },
  {
    id: 'sponsors',
    icon: Megaphone,
    label: 'Sponsor Our Events',
    headline: 'Put your brand at the heart of Gen Z entrepreneurship.',
    description:
      'Our events bring together the most ambitious Gen Z founders in Europe. Sponsoring a FoB event means direct, authentic access to a highly engaged audience of builders and future leaders.',
    details: [
      'Logo placement across all event materials',
      'Speaking slot or panel participation',
      'Direct access to attendees and founders',
      'Social media visibility and content features',
      'Custom activation opportunities on-site',
    ],
    cta: 'Become a Sponsor',
    ctaLink: 'mailto:partnerships@friendsofbata.com',
    external: true,
    accent: 'from-rose-50 to-orange-50',
    border: 'border-rose-200',
    iconBg: 'bg-rose-100 text-rose-600',
    activeTab: 'bg-rose-500 text-white border-rose-500',
  },
  {
    id: 'investors',
    icon: TrendingUp,
    label: 'Investors',
    headline: 'Meet your next deal.',
    description:
      "Get early access to Gen Z founders building in Europe. Join our network and connect directly with ambitious entrepreneurs at the earliest stage — before they're on anyone's radar.",
    details: [
      'Curated deal flow from vetted Gen Z founders',
      'Access to pitch sessions and demo days',
      'Visibility in our investor-facing newsletter',
      'Direct introductions to promising founders',
      'Co-investment opportunities with our network',
    ],
    cta: 'Join the Network',
    ctaLink: '/Apply',
    accent: 'from-orange-50 to-yellow-50',
    border: 'border-orange-200',
    iconBg: 'bg-orange-100 text-orange-600',
    activeTab: 'bg-orange-500 text-white border-orange-500',
  },
];

export default function TakePart() {
  const [active, setActive] = useState('students');
  const section = SECTIONS.find((s) => s.id === active);
  const Icon = section.icon;

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-teal-600 text-sm font-semibold tracking-wide mb-3">TAKE PART</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-teal-900 mb-6">
              Find your place in the{' '}
              <span className="text-teal-600">FoB ecosystem.</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
              Whether you're building, enabling, or investing — there's a role for you here.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tab nav */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {SECTIONS.map((s) => {
              const TabIcon = s.icon;
              return (
                <button
                  key={s.id}
                  onClick={() => setActive(s.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all border ${
                    active === s.id ? s.activeTab + ' shadow-md' : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <TabIcon className="w-4 h-4" />
                  {s.label}
                </button>
              );
            })}
          </div>

          {/* Content panel */}
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`rounded-3xl border bg-gradient-to-br ${section.accent} ${section.border} p-10 md:p-14 grid grid-cols-1 md:grid-cols-2 gap-12 items-center`}
          >
            {/* Left */}
            <div>
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${section.iconBg}`}>
                <Icon className="w-6 h-6" />
              </div>
              <p className="text-xs font-semibold tracking-widest text-slate-400 mb-3 uppercase">{section.label}</p>
              <h2 className="text-3xl font-bold text-teal-900 mb-4">{section.headline}</h2>
              <p className="text-slate-500 leading-relaxed mb-8">{section.description}</p>
              {section.external ? (
                <a
                  href={section.ctaLink}
                  className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-7 py-3.5 rounded-full transition-all text-sm hover:shadow-lg hover:shadow-teal-500/20"
                >
                  {section.cta}
                  <ArrowRight className="w-4 h-4" />
                </a>
              ) : (
                <Link
                  to={section.ctaLink}
                  className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-7 py-3.5 rounded-full transition-all text-sm hover:shadow-lg hover:shadow-teal-500/20"
                >
                  {section.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              )}
            </div>

            {/* Right — details list */}
            <ul className="space-y-4">
              {section.details.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-start gap-3 text-sm text-slate-700"
                >
                  <span className="w-5 h-5 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    {i + 1}
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
    </>
  );
}