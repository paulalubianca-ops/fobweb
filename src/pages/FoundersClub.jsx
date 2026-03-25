import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const MEMBERS = [
  {
    name: "Jakub Veselsky",
    role: "Co-Founder - FreshLabels",
    bio: "Co-founder at Freshlabels, holds a Marketing and Management degree from the University of Economics, Prague. With expertise in Event Planning, Marketing Communications, and Brand Management, he contributes valuable insights to the Czech Fashion industry.",
    image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/66c9acbabea7984c4ae782ce_Jakub%20Veselsky.avif",
    linkedin: "https://www.linkedin.com/in/jakub-veselsky-566b5a3a/",
  },
  {
    name: "Friedi Feige-Bata",
    role: "Sustainability Manager - MGG",
    bio: "Sustainability guru with a background in infectious disease microbiology and public health. I've lived on three continents and am happiest when outside enjoying nature, biking, hiking, or making the most of snow in the mountains.",
    image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/66c9acf5e1337c5e22286ada_Friedi%20Feige-Bata.avif",
    linkedin: "https://www.linkedin.com/in/friederike-feige-94a06153/",
  },
  {
    name: "Julieta Rueff",
    role: "Founder - Flamaid",
    bio: "Founder at Flamaid, currently pursuing a degree in Marketing and International Business in ESCI Barcelona. Her dedication to empowering women and challenging societal norms has garnered international recognition, positioning Flamaid as a pioneering force in social entrepreneurship.",
    image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/66c9ad3280c801a57f266da3_Julieta%20Rueff.avif",
    linkedin: "https://www.linkedin.com/in/julietarueff/",
  },
  {
    name: "Jonne Hellgren",
    role: "Co-Founder - Repack",
    bio: "Visionary leader at the forefront of the sustainable packaging revolution. With a background in design and a passion for environmental stewardship, Jonne has spearheaded Repack's mission to redefine packaging norms in the e-commerce ecosystem.",
    image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/66c9ad5d3643526e304149fc_Jonne%20Hellgren.avif",
    linkedin: "https://www.linkedin.com/in/jonnehellgren/",
  },
  {
    name: "Jan Kratochvil",
    role: "Co-Founder - Winqs",
    bio: "Communication, marketing, and branding expert with a passion for sustainable sports and technology. As CEO of Winqs Sports, he's dedicated to transforming the sports industry for the better.",
    image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/66c9adaa0eb4645715e7a06f_Jan%20Kratochvil.avif",
    linkedin: "https://www.linkedin.com/in/kratochvilj/",
  },
  {
    name: "Marek Brincil",
    role: "Co-Founder - Winqs",
    bio: "Seasoned leader with a robust background in business management and corporate finance. His experience as Managing Director at Salming Deutschland GmbH and proven track record in sales and operations make him an invaluable asset to the Winqs team.",
    image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/66c9adcb076392a46087568b_Marek%20Brincil.avif",
    linkedin: "https://www.linkedin.com/in/marek-brincil-64580725/",
  },
  {
    name: "Thomas A. Bata",
    role: "Co-Founder - Time Tennis",
    bio: "Seasoned business leader and entrepreneur. CEO of Triple B International, Director of Friends of Bata, founder of MGG outdoor clothing brand and has held managerial positions at global brands such as Bata, Aldo, and Nike.",
    image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/66c9adf52841a4a5483e1cc1_Thomas%20A.%20Bata.avif",
    linkedin: "https://www.linkedin.com/in/thomasabata/",
  },
  {
    name: "Adrian Escabias",
    role: "CEO & Co-Founder - Aticco Ventures",
    bio: "Creative and resilient professional with a solid career combining corporate and entrepreneurial experience. As CEO and co-founder of Aticco Ventures, he has led a diversified portfolio of startups in Spain.",
    image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/66c9ae30e9cc11d29a1c8a0e_Adrian%20Escabias.avif",
    linkedin: "https://www.linkedin.com/in/adrian-escabias/",
  },
  {
    name: "David Mayer-Heinisch",
    role: "Co-Founder - froots.io",
    bio: "Founder of froots.io, a pioneering wealth-building platform. With a strong background in asset management and investment, he previously held key roles at Lingohr & Partner and Raiffeisen Bank International.",
    image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/67374c4a4411d6a90380d8cf_1701367045958.jpeg",
    linkedin: "https://www.linkedin.com/in/david-mayer-heinisch/",
  },
  {
    name: "Mattia Curma",
    role: "Co-Founder - Forestmatic",
    bio: "Co-founder of Forestmatic, a B2B platform that helps businesses measure and verify the impact of investments in forest restoration through digital tools.",
    image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/67374ea4778c5748e79967a5_NWcfL6xccnH5XVRStCJnk35xyCm2Rn2GX0J3fqkJ.webp",
    linkedin: "https://www.linkedin.com/in/mattia-curma/",
  },
  {
    name: "Flavien Chaussegros",
    role: "Co-Founder - Invisible Company",
    bio: "Co-founder of Invisible Company, creating innovative packaging solutions like #INVISIBLEBAG — a plastic-free, water-soluble alternative to conventional plastic. Previously COO at Simplylive.",
    image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/67cedf10a464abf7298fd135_Screenshot%202025-03-10%20at%2013.43.48.png",
    linkedin: "https://www.linkedin.com/in/flavien-chaussegros-89592610/",
  },
  {
    name: "Devana Ng",
    role: "Co-Founder - Invisible Company",
    bio: 'Co-founder of Invisible Company and passionate advocate for eco-conscious living. Known as the "Chief Trash Officer," she leads development of sustainable alternatives. An Unreasonable Fellow and TEDx speaker.',
    image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/67cf01f566898a7476e9994a_Screenshot%202025-03-10%20at%2013.44.32.png",
    linkedin: "https://www.linkedin.com/in/devanang/",
  },
  {
    name: "Kathryn Bricken",
    role: "Founder - Doughlicious",
    bio: "Founder and CEO of Doughlicious, launched in 2017. With a background in sales, marketing, and innovation, she has led the brand from a small startup to an internationally recognized premium cookie dough company.",
    image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/67f4dd0f6620d9b7013c0542_1710350725678.jpeg",
    linkedin: "https://www.linkedin.com/in/kathryn-bricken-78620625/",
  },
  {
    name: "Singal Depéry",
    role: "Co-Founder & Designer - ID Genève Watches",
    bio: "Co-founder and Lead Designer at ID Genève Watches, Singal brings nearly two decades of industrial design expertise. A graduate of ECAL, he's driven by circularity, transparency, and innovation in Swiss watchmaking.",
    image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/6852a7f1175ededfb379d151_1709981028475.jpeg",
    linkedin: "https://www.linkedin.com/in/singal-dep%C3%A9ry-b164552b/",
  },
  {
    name: "Nicolas Freudiger",
    role: "Co-Founder & CEO - ID Genève Watches",
    bio: "Entrepreneur and circular economy advocate. Co-founder and CEO of ID Genève Watches. With a background at Coca-Cola HBC, LVMH, and EHL, he bridges sustainability, strategy, and co-creation.",
    image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/6852a8af76ec47625e2a76d7_1539600609016.jpeg",
    linkedin: "https://www.linkedin.com/in/nicolas-freudiger-9a684a31/",
  },
  {
    name: "Cédric Mulhauser",
    role: "Watchmaker & Co-Founder - ID Genève",
    bio: "Master watchmaker and co-founder of ID Genève Watches. Brings deep technical expertise from roles at Vacheron Constantin and Emile Chouriet. Also teaches at the Geneva Watchmaking School.",
    image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/6852a921aa41f6bbf384d5d8_1701374292316.jpeg",
    linkedin: "https://www.linkedin.com/in/c%C3%A9dric-mulhauser-856749122/",
  },
  {
    name: "Vincent Borel",
    role: "CEO - Equip Sport",
    bio: "Entrepreneur and tech leader redefining access to sports through circular, sustainable models. With a global career spanning Nestlé, Logitech, and multiple board roles, he bridges innovation, impact, and business transformation.",
    image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/68fb81683ebff1362df3f808_1661130112270.jpeg",
    linkedin: "https://www.linkedin.com/in/vborel/",
  },
];

export default function FoundersClub() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-teal-600 text-sm font-semibold tracking-wide mb-3">FOUNDERS CLUB</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-teal-900 mb-5">
              Meet the disruptive founders{' '}
              <span className="text-teal-600">behind FoB.</span>
            </h1>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
              These are the startup leaders who actively support us in developing high-quality content for our future entrepreneurs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Members Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {MEMBERS.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
                className="flex gap-4 p-5 rounded-2xl border border-purple-100 hover:border-teal-200 bg-white hover:shadow-sm transition-all"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-16 h-16 rounded-xl object-cover object-top shrink-0"
                />
                <div className="min-w-0">
                  <h3 className="font-semibold text-teal-900 text-sm">{member.name}</h3>
                  <p className="text-teal-600 text-xs font-semibold mt-0.5 mb-2">{member.role}</p>
                  <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">{member.bio}</p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-xs text-slate-400 hover:text-teal-600 transition-colors"
                  >
                    LinkedIn →
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
          <h2 className="text-3xl font-bold tracking-tight text-teal-900 mb-3">Ready to Join the Network?</h2>
          <p className="text-slate-500 mb-8">
            Whether you're building your first prototype or scaling a bold idea — we're here to help you test, grow, and connect.
          </p>
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