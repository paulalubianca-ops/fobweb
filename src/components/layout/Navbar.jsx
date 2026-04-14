import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { label: 'About', path: '/About' },
  {
    label: 'Community',
    dropdown: [
      { label: 'Students', path: '/Students' },
      { label: 'Experts', path: '/Experts' },
    ],
  },
  { label: 'Case Studies', path: '/CaseStudies' },
  { label: 'Podcast', path: '/Podcast' },
  { label: 'Take Part', path: '/TakePart' },
];

function DropdownItem({ link, scrolled }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isActive = link.dropdown?.some(d => d.path === location.pathname);
  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button className={`flex items-center gap-1 text-sm font-medium transition-colors ${
        isActive
          ? 'text-teal-700'
          : scrolled ? 'text-slate-600 hover:text-teal-700' : 'text-white/80 hover:text-white'
      }`}>
        {link.label}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-xl border border-slate-100 py-2 min-w-[180px] z-50"
          >
            {link.dropdown.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className="block px-4 py-2.5 text-sm text-slate-600 hover:text-teal-700 hover:bg-teal-50 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState({});
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
      <nav aria-label="Main navigation" className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-slate-100' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/Home" className="flex items-center gap-2.5" aria-label="Friends of Bata – Home">
            <img
              src="https://cdn.prod.website-files.com/6552207c5f7b80924e9ed66d/65aa4a01bdac923e99870eff_logo.png"
              alt="Friends of Bata logo"
              width="auto"
              height="32"
              className={`h-8 transition-all ${scrolled ? '' : 'brightness-0 invert'}`}
            />
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) =>
              link.dropdown ? (
                <DropdownItem key={link.label} link={link} scrolled={scrolled} />
              ) : (
                <Link
                  key={link.label}
                  to={link.path}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-teal-400'
                      : scrolled ? 'text-slate-600 hover:text-teal-700' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              to="/Apply"
              className={`text-sm font-semibold px-5 py-2 rounded-full transition-all ${
                scrolled
                  ? 'bg-teal-600 hover:bg-teal-700 text-white'
                  : 'bg-white text-slate-900 hover:bg-white/90'
              }`}
            >
              Join us!
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className={`md:hidden p-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-500 rounded ${scrolled ? 'text-slate-700' : 'text-white'}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-40 bg-white/98 backdrop-blur-xl pt-20 px-6 overflow-y-auto"
          >
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link) =>
                link.dropdown ? (
                  <div key={link.label}>
                    <button
                      onClick={() => setMobileExpanded(p => ({ ...p, [link.label]: !p[link.label] }))}
                      className="flex items-center gap-2 text-2xl text-slate-700 font-medium w-full py-2"
                    >
                      {link.label}
                      <ChevronDown className={`w-5 h-5 transition-transform ${mobileExpanded[link.label] ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileExpanded[link.label] && (
                      <div className="ml-4 flex flex-col gap-2 mb-2">
                        {link.dropdown.map(item => (
                          <Link key={item.path} to={item.path} className="text-lg text-slate-500 hover:text-teal-700 py-1">
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    to={link.path}
                    className="text-2xl text-slate-700 hover:text-teal-700 transition-colors font-medium py-2"
                  >
                    {link.label}
                  </Link>
                )
              )}
              <Link
                to="/Apply"
                className="text-lg font-semibold bg-teal-600 text-white px-6 py-3 rounded-full text-center mt-4"
              >
                Join us!
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}