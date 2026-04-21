import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const POSTS = [
  {
    title: 'From Curiosity to Action: Launching Founders of Tomorrow at Geneva Business School',
    tags: ['Events', 'Education'],
    image: 'https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/69d51d2292d7169cef945a5d_IMG_2121.jpeg',
    link: 'https://www.friendsofbata.org/blog/from-curiosity-to-action-launching-founders-of-tomorrow-at-geneva-business-school',
  },
  {
    title: 'Building Trust in the Age of Nature Intelligence',
    tags: ['Insights', 'Deep Tech'],
    image: 'https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/69c66bd752f0b10df0f3dadc_Captura%20de%20pantalla%202025-12-20%20a%20las%2020.47.11.png',
    link: 'https://www.friendsofbata.org/blog/building-trust-in-the-age-of-nature-intelligence',
  },
  {
    title: 'Founders of Tomorrow Q1: A New Front Door to Next Gen Entrepreneurship in Barcelona',
    tags: ['Events', 'Community'],
    image: 'https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/69c6689916705cba0be7da39_1774046054598.jpeg',
    link: 'https://www.friendsofbata.org/blog/founders-of-tomorrow-q1-a-new-front-door-to-gen-z-entrepreneurship-in-barcelona',
  },
  {
    title: 'Building the Next Generation of Founders: Here is how we build this journey with our partners and founders.',
    tags: ['Community', 'Insights'],
    image: 'https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/688cc0b6abec0caecbedabfa_1753696901471.jpeg',
    link: 'https://www.friendsofbata.org/blog/building-the-next-generation-of-founders-here-is-how-we-build-this-journey-with-our-partners-and-founders',
  },
  {
    title: 'Friends of Bata × University of Edinburgh: Supporting the Next Generation of Scottish Talent',
    tags: ['Education', 'Community'],
    image: 'https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/69c660e3e597cdae30282ea7_Screenshot%202026-03-27%20at%2011.50.02.png',
    link: 'https://www.friendsofbata.org/blog/friends-of-bata-x-university-of-edinburgh-supporting-the-next-generation-of-scottish-talent',
  },
  {
    title: 'Building Bold Ideas in 24 Hours - Friends of Bata at the EHL Innovation Sprint!',
    tags: ['Events', 'Innovation'],
    image: 'https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/69aecd4a5fa5cf9d5ecd1191_1772567919184.jpeg',
    link: 'https://www.friendsofbata.org/blog/building-bold-ideas-in-24-hours----friends-of-bata-at-the-ehl-innovation-sprint',
  },
  {
    title: 'Founders of Tomorrow Toulouse: A Day of Courage, Creativity & First-Time Entrepreneurship',
    tags: ['Events', 'Community'],
    image: 'https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/69a6c7578cd4533780e24f4d_1771849942821.jpeg',
    link: 'https://www.friendsofbata.org/blog/founders-of-tomorrow-toulouse-a-day-of-courage-creativity-first-time-entrepreneurship',
  },
  {
    title: "From Case Study to Founder: Yoseyomo's Masterclass with Tomas Bata University",
    tags: ['Education', 'Insights'],
    image: 'https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/6995dc15068ef5cbec91b807_Screenshot%202026-02-17%20at%2016.57.19.png',
    link: 'https://www.friendsofbata.org/blog/from-case-study-to-founder-yoseyomos-masterclass-with-tomas-bata-university',
  },
  {
    title: "The Hardest Problem in Web3 Isn't Tech — It's Trust. Yoseyomo Is Solving It.",
    tags: ['Insights', 'Deep Tech'],
    image: 'https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/6980c0afde72aa2908058c9f_Captura%20de%20pantalla%202026-01-11%20a%20las%2010.50.58%E2%80%AFp.%E2%80%AFm..png',
    link: 'https://www.friendsofbata.org/blog/the-hardest-problem-in-web3-isnt-tech----its-trust-yoseyomo-is-solving-it',
  },
  {
    title: 'How Hands-On Learning Shapes the Next Generation of Changemakers in Switzerland',
    tags: ['Education', 'Events'],
    image: 'https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/6978d1cad901c83bb3de84fd_DSC01838.jpg',
    link: 'https://www.friendsofbata.org/blog/how-hands-on-learning-shapes-the-next-generation-of-changemakers-in-switzerland',
  },
  {
    title: 'Zefi.ai: Turning Customer Chaos into Competitive Advantage',
    tags: ['Insights', 'AI'],
    image: 'https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/6967adea536ea62a5c546b42_4%20Zefi.jpg',
    link: 'https://www.friendsofbata.org/blog/zefi-ai-turning-customer-chaos-into-competitive-advantage',
  },
  {
    title: 'Stories That Inspire 2025: Bridging Schools and Entrepreneurship Through Storytelling',
    tags: ['Education', 'Community'],
    image: 'https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/6927189196a118fe1a7a43bb_Screenshot%202025-11-26%20at%2016.02.33.png',
    link: 'https://www.friendsofbata.org/blog/stories-that-inspire-2025-bridging-schools-and-entrepreneurship-through-storytelling',
  },
  {
    title: 'An International Community of Young Founders Comes Together in Barcelona',
    tags: ['Events', 'Community'],
    image: 'https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/6925934ba8d5dc08873eaf7f_Robertantonphoto-7754.JPG',
    link: 'https://www.friendsofbata.org/blog/an-international-community-of-young-founders-comes-together-in-barcelona',
  },
  {
    title: 'The Courage to Build Across Borders: Together Mission 6.0 Ignites Young Founders Worldwide',
    tags: ['Events', 'Community'],
    image: 'https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/6908ce24067cb709194d67b7_WhatsApp%20Image%202025-10-27%20at%2015.20.50%20(2).jpeg',
    link: 'https://www.friendsofbata.org/blog/the-courage-to-build-across-borders-together-mission-6-0-ignites-young-founders-worldwide',
  },
  {
    title: 'Founders of Tomorrow: Where Young Voices Find Their Power!',
    tags: ['Events', 'Community'],
    image: 'https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/690def3b8b25629c5f93a0b0_Cazoo_Bogatell.jpg',
    link: 'https://www.friendsofbata.org/blog/founders-of-tomorrow-where-young-voices-find-their-power',
  },
];

const ALL_TAGS = ['All', ...Array.from(new Set(POSTS.flatMap(p => p.tags)))];

export default function Blog() {
  const [activeTag, setActiveTag] = useState('All');
  const filtered = activeTag === 'All' ? POSTS : POSTS.filter(p => p.tags.includes(activeTag));

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-purple-50 via-white to-blue-50 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl md:text-6xl font-bold text-teal-900 mb-4">Blog</h1>
            <p className="text-lg text-slate-500">Check out our latest updates!</p>
          </motion.div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Tag filters */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-wrap gap-2 mb-12 justify-center"
          >
            {ALL_TAGS.map(tag => (
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

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post, i) => (
              <motion.a
                key={post.title}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.07 }}
                className="group rounded-2xl overflow-hidden bg-white border border-slate-100 hover:border-teal-200 shadow-sm hover:shadow-md transition-all flex flex-col"
              >
                <div className="aspect-video overflow-hidden bg-slate-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {post.tags.map(t => (
                      <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-teal-50 text-teal-700 border border-teal-100">{t}</span>
                    ))}
                  </div>
                  <h3 className="font-semibold text-teal-900 leading-snug group-hover:text-teal-600 transition-colors">{post.title}</h3>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-teal-900 mb-3">Want to contribute?</h2>
          <p className="text-slate-500 mb-8">Have a story, insight, or lesson worth sharing with the FoB community? We would love to feature it.</p>
          <Link
            to="/Apply"
            className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-3.5 rounded-full transition-all hover:shadow-lg hover:shadow-teal-500/20 text-sm"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}