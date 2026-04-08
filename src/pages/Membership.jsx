import React from 'react';
import { motion } from 'framer-motion';
import PricingTier from '../components/membership/PricingTier';
import CampusTier from '../components/membership/CampusTier';

const TIERS = [
  {
    name: 'The Explorer',
    tagline: 'You just stepped into the hive.',
    price: '€0',
    period: 'Free forever',
    dotColor: 'bg-green-500',
    features: [
      'Full podcast access',
      'Lite business case studies',
      'Intro masterclasses (short sessions)',
      'Newsletter + curated opportunities',
    ],
    ctaText: 'Start for Free',
    ctaLink: '/Apply',
  },
  {
    name: 'The Builder',
    tagline: "You're no longer watching. You're building.",
    price: '€12',
    period: '/ month',
    dotColor: 'bg-yellow-400',
    features: [
      'Full case study library (deep dives, frameworks)',
      'Full masterclasses (recorded)',
      'Templates, tools, and playbooks',
      'Early access to new content',
    ],
    ctaText: 'Join the Builder Tier',
    ctaLink: '/Apply',
    featured: true,
  },
  {
    name: 'The Insider',
    tagline: "You're inside the ecosystem.",
    price: '€29',
    period: '/ month',
    dotColor: 'bg-orange-500',
    features: [
      'Everything in Builder, plus:',
      'Private community (founders + peers)',
      'Monthly live mentor Q&A sessions',
      'Curated networking opportunities',
      'Priority access to events',
      'Opportunity to pitch ideas / get feedback',
    ],
    ctaText: 'Upgrade to Insider',
    ctaLink: '/Apply',
  },
  {
    name: 'The Circle',
    tagline: 'Proximity to experience.',
    price: '€79',
    period: '/ month',
    dotColor: 'bg-red-600',
    features: [
      'Everything in Insider, plus:',
      'Small-group mentoring sessions',
      'Hands-on workshops (execution-focused)',
      'Personalized feedback on projects/ideas',
      'Access to exclusive founder roundtables',
      'Featured visibility (spotlight members)',
    ],
    ctaText: 'Apply for The Circle',
    ctaLink: '/Apply',
  },
];

export default function Membership() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-teal-600 text-sm font-semibold tracking-wide mb-3">MEMBERSHIP</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-teal-900 mb-6">
              Join the ecosystem built for{' '}
              <span className="text-teal-600">Gen Z founders.</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
              From free resources to exclusive proximity, choose the tier that matches your stage and ambition.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {TIERS.map((tier, i) => (
              <PricingTier key={tier.name} tier={tier} index={i} featured={tier.featured} />
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-teal-900 mb-8">For Institutions</h2>
            <CampusTier />
          </div>
        </div>
      </section>
    </>
  );
}