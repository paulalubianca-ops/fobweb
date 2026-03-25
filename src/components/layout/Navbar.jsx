import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { label: 'About', path: '/About' },
  { label: 'Mentorship', path: '/Mentorship' },
  { label: 'Founders Club', path: '/FoundersClub' },
  { label: 'Case Studies', path: '/CaseStudies' },
  { label: 'Podcast', path: '/Podcast' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/90 backdrop-blur-xl shadow-sm border-b border-slate-100' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/Home" className="flex items-center gap-2.5">
            <img 
              src="https://cdn.prod.website-files.com/6552207c5f7b80924e9ed66d/65aa4a01bdac923e99870eff_logo.png" 
              alt="Friends of Bata" 
              className="h-8"
            />
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              link.href ? (
                <a 
                  key={link.label}
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-slate-600 hover:text-teal-700 transition-colors font-medium"
                >
                  {link.label}
                </a>
              ) : (
                <Link 
                  key={link.label}
                  to={link.path} 
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === link.path ? 'text-teal-700' : 'text-slate-600 hover:text-teal-700'
                  }`}
                >
                  {link.label}
                </Link>
              )
            ))}
            <Link 
              to="/Apply" 
              className="text-sm font-semibold bg-teal-600 hover:bg-teal-700 text-white px-5 py-2 rounded-full transition-all hover:shadow-lg hover:shadow-teal-500/20"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile toggle */}
          <button 
            className="md:hidden text-slate-700 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-40 bg-white/98 backdrop-blur-xl pt-20 px-6"
          >
            <div className="flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                link.href ? (
                  <a 
                    key={link.label}
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-2xl text-slate-700 hover:text-teal-700 transition-colors font-medium"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link 
                    key={link.label}
                    to={link.path} 
                    className="text-2xl text-slate-700 hover:text-teal-700 transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                )
              ))}
              <Link 
                to="/Apply" 
                className="text-lg font-semibold bg-teal-600 text-white px-6 py-3 rounded-full text-center mt-4"
              >
                Apply Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}