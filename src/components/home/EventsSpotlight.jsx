import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Calendar } from 'lucide-react';

const EVENTS = [
{
  tag: "Innovation Sprint",
  title: "EHL Innovation Sprint",
  location: "Lausanne, Switzerland",
  type: "In-Person",
  desc: "24 hours. 5 universities. One challenge. Students collaborated to pitch real solutions to real problems — with live feedback from operators.",
  image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/69aeccd6865322352d600c93_1772567922553.jpeg"
},
{
  tag: "Masterclass",
  title: "Live with Yoseyomo",
  location: "Online",
  type: "Online",
  desc: "We broke down a real Web3 startup — the pivot, the failure, the traction — then opened the floor to the founder. No slides, no fluff.",
  image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/6995d68bdc0fbdf6d741f323_Screenshot%202026-02-18%20at%2016.00.58.png"
},
{
  tag: "Full-Day Workshop",
  title: "Founders of Tomorrow",
  location: "Toulouse, France",
  type: "In-Person",
  desc: "A full-day hands-on entrepreneurship experience for students who want to turn ideas into action — not just theory.",
  image: "https://cdn.prod.website-files.com/6552207d5f7b80924e9ed85f/69a6c93d66fbec21e3ecd9eb_Screenshot%202026-03-03%20at%2012.42.43.png"
}];


export default function EventsSpotlight() {
  return (
    <section className="py-24 md:py-32 bg-white" aria-labelledby="events-heading">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — messaging */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32">
            
            <p className="text-teal-600 text-sm font-semibold tracking-wide mb-3">EVENTS & PROGRAMS</p>
            <h2 id="events-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-teal-900 mb-5">
              The rooms you actually want to be in.
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-6">Not another conference. Not a generic networking event. FoB runs hands-on experiences — sprints, masterclasses, and workshops — designed specifically for curious minds like yours


            </p>
            <div className="space-y-4 mb-8">
              {[
              "Live case studies with real founders",
              "Innovation sprints at top universities",
              "Online masterclasses you can access from anywhere"].
              map((item) =>
              <div key={item} className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                  <p className="text-slate-600 text-sm">{item}</p>
                </div>
              )}
            </div>
            <Link
              to="/Apply"
              className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-7 py-3 rounded-full transition-all hover:shadow-lg hover:shadow-teal-500/20 text-sm">
              
              Apply to join our next event
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Right — event cards */}
          <ul className="space-y-4 list-none p-0">
            {EVENTS.map((event, i) =>
            <motion.li
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex gap-4 p-4 rounded-2xl bg-white border border-purple-100 hover:border-teal-300 shadow-sm hover:shadow-md transition-all">
              
                <div className="w-24 h-20 rounded-xl overflow-hidden shrink-0">
                  <img src={event.image} alt={event.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-teal-50 text-teal-700 border border-teal-100 font-medium">{event.tag}</span>
                    <span className="flex items-center gap-1 text-xs text-slate-400"><MapPin className="w-3 h-3" />{event.location}</span>
                  </div>
                  <h3 className="font-semibold text-sm text-teal-900 mb-1">{event.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">{event.desc}</p>
                </div>
              </motion.li>
            )}
          </ul>
        </div>
      </div>
    </section>);

}