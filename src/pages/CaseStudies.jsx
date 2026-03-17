import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const CASE_STUDIES = [
  {
    name: "Yoseyomo",
    tags: ["Web3", "Design", "Product"],
    desc: "How do you turn fear, uncertainty, and digital chaos into a product people trust? Yoseyomo's story reveals the design, strategy, and resilience behind one of the most original startups in Europe.",
    image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/698090b1d20f37123ced4f1f_Screenshot%202026-02-02%20at%2012.48.00.png",
    link: "https://drive.google.com/file/d/1Ta0gdsUnHBLF2I65LMuGSkcRTnneY00Y/view?usp=sharing",
  },
  {
    name: "ZEFI",
    tags: ["AI", "SaaS", "Customer Success"],
    desc: "How Zefi.ai turned fragmented customer feedback into measurable outcomes — reducing churn, increasing CSAT, and winning trust in regulated environments.",
    image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/6967acf7cf7022323a3a36d1_Screenshot%202026-01-14%20at%2011.13.10.png",
    link: "https://drive.google.com/file/d/1UwZvAFl30s3W7PrrXaoK13rKCF7UHr6h/view?usp=sharing",
  },
  {
    name: "EQUIP Sport",
    tags: ["Sports", "Urban Tech", "Hardware"],
    desc: "How a Swiss startup reinvented casual sport with automated ball-sharing stations, growing to 220,000+ players across 350+ locations.",
    image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/689dfcb41b7b0560cb8f9059_Screenshot%202025-08-14%20at%2017.11.22.png",
    link: "https://drive.google.com/file/d/17ewAk6EBq0Vqj5An4PD-QMTMsx7lMYf8/view?usp=sharing",
  },
  {
    name: "VYTAL Global",
    tags: ["Circular Economy", "Logistics", "Sustainability"],
    desc: "How Vytal uses circular tech and smart logistics to replace single-use packaging at scale — transforming events, cities, and the $100B packaging industry.",
    image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/686d1639f243d99931ec4474_686d15b8531cbfe2579efbe0_Screenshot%202025-07-01%20at%2018.07.38.png",
    link: "https://drive.google.com/file/d/1wPWprAFA15FYC7ugfM8bMDQqnSweJN0Q/view?usp=sharing",
  },
  {
    name: "ID Genève",
    tags: ["Luxury", "Sustainability", "Manufacturing"],
    desc: "How ID Genève is pioneering circular luxury with 100% recycled steel, biodegradable straps, and modular design — reshaping the watch industry.",
    image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/6852b107968e2cff6733541f_Screenshot%202025-06-18%20at%2014.28.43.png",
    link: "https://drive.google.com/file/d/1fJEiGeM2RRYHelieDXEILJEHksatHROO/view?usp=sharing",
  },
  {
    name: "Doughlicious",
    tags: ["FMCG", "Health & Wellness", "Retail"],
    desc: "How a passion for perfection reshaped the cookie dough industry — delivering indulgent, clean-label treats that prioritize health and sustainability.",
    image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/67f4dc90b432efbeb4e2929b_Screenshot%202025-04-07%20at%2012.00.12.png",
    link: "https://drive.google.com/file/d/1XmWmj_6x5xLt_IadiSHiObnDduDvugiw/view?usp=sharing",
  },
  {
    name: "Invisible Company",
    tags: ["Sustainability", "Packaging", "Deep Tech"],
    desc: "How a Hong Kong-based startup is revolutionizing packaging with water-soluble, biodegradable solutions to combat plastic waste.",
    image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/67cafadc6b3dffd55c991051_Screenshot%202025-03-07%20at%2014.55.27.png",
    link: "https://drive.google.com/file/d/15Q0gI8AQn4ai31LIBSBqAyXfwbb9oIOW/view?usp=sharing",
  },
  {
    name: "ForestMatic",
    tags: ["Climate Tech", "Transparency", "Carbon"],
    desc: "The challenges ForestMatic's founders faced building the first fully transparent platform for corporate CO2 offsetting.",
    image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/674db5c1190870a6a69dca13_Screenshot%202024-12-02%20at%2014.27.17.png",
    link: "https://drive.google.com/file/d/1KQsO0_leWUuTyELSrEyuFm9BdbMQ-9js/view?usp=sharing",
  },
  {
    name: "FROOTS",
    tags: ["WealthTech", "AI", "FinTech"],
    desc: "How FROOTS, a Vienna-based WealthTech startup, blends AI and transparency to make investment solutions accessible to a new generation.",
    image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/6737578c72729b755ad0208a_Screenshot%202024-11-15%20at%2014.15.31.png",
    link: "https://drive.google.com/file/d/1SEpS9xNv0cZvJ9ix0FD_n5nkmZI9TLIw/view?usp=sharing",
  },
  {
    name: "Aticco Ventures",
    tags: ["Venture Building", "Community", "Funding"],
    desc: "How Adrian Escabias navigated the entrepreneurial landscape to create a thriving startup ecosystem — offering insights on resilience, funding, and community.",
    image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/66b1fae1e9b48a9abad249e7_Screenshot%202024-08-06%20at%2012.28.29.avif",
    link: "https://drive.google.com/file/d/1awAh8e8cTqkUnyz5XtQxkV5EwgIR2Ndd/view?usp=sharing",
  },
  {
    name: "Winqs",
    tags: ["Sports", "Sustainability", "Fundraising"],
    desc: "The struggles of building a sustainable sports brand while raising six-figure capital — and what it takes to survive the early stage.",
    image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/663c9a66c38cea657ba1a3b4_Screenshot%202024-05-09%20at%2011.04.12.avif",
    link: "https://drive.google.com/file/d/129M3hymmh93O2jUE7ClfM0fw7j1q-yTA/view?usp=sharing",
  },
  {
    name: "Circular Economy",
    tags: ["Sustainability", "Strategy", "Europe"],
    desc: "How to drive sustainable business success by integrating circular economy principles — using real-world case studies of disruptive European startups.",
    image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/66d5b392e4a2e67c7d8e57f3_Screenshot%202024-09-02%20at%2014.46.05.avif",
    link: "https://drive.google.com/file/d/1r2bjo542EG43ZU1cktTokNIqQRzVpfTU/view?usp=sharing",
  },
];

const ALL_TAGS = ["All", ...Array.from(new Set(CASE_STUDIES.flatMap(cs => cs.tags)))];

export default function CaseStudies() {
  const [activeTag, setActiveTag] = useState("All");

  const filtered = activeTag === "All"
    ? CASE_STUDIES
    : CASE_STUDIES.filter(cs => cs.tags.includes(activeTag));

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-teal-600 text-sm font-semibold tracking-wide mb-3">CASE STUDIES</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-teal-900 mb-5">
              Real startups.{' '}
              <span className="text-teal-600">Real decisions.</span>
            </h1>
            <p className="text-lg text-slate-500 max-w-xl leading-relaxed">
              Each case study breaks down how a real company tackled a real challenge — 
              written for founders who want to learn from what actually happened, not theory.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          {/* Tag filters */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-wrap gap-2 mb-12"
          >
            {ALL_TAGS.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`text-xs px-4 py-1.5 rounded-full border font-medium transition-all ${
                  activeTag === tag
                    ? 'bg-teal-600 text-white border-teal-600'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-teal-300 hover:text-teal-700'
                }`}
              >
                {tag}
              </button>
            ))}
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((cs, i) => (
              <motion.div
                key={cs.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
                className="group rounded-2xl overflow-hidden bg-white border border-purple-100 hover:border-teal-200 shadow-sm hover:shadow-md transition-all flex flex-col"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={cs.image}
                    alt={cs.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {cs.tags.map(tag => (
                      <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-teal-50 text-teal-700 border border-teal-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-semibold text-teal-900 mb-2">{cs.name}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed flex-1">{cs.desc}</p>
                  <a
                    href={cs.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-teal-600 hover:text-teal-800 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Download Case Study
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-teal-900 mb-3">Want your startup featured?</h2>
          <p className="text-slate-500 mb-8">Join FoB and your story could help the next generation of founders learn from yours.</p>
          <Link
            to="/Apply"
            className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-3.5 rounded-full transition-all hover:shadow-lg hover:shadow-teal-500/20 text-sm"
          >
            Apply to Join FoB
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}