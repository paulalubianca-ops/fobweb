import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-teal-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <img 
              src="https://cdn.prod.website-files.com/6552207c5f7b80924e9ed66d/65aa4a01bdac923e99870eff_logo.png" 
              alt="Friends of Bata" 
              className="h-8 brightness-0 invert mb-4"
            />
            <p className="text-teal-200 text-sm leading-relaxed max-w-sm">
              The mentorship-first community for Gen Z founders who are ready to build, not just learn.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-teal-300 uppercase tracking-wider mb-4">Navigate</h4>
            <div className="flex flex-col gap-3">
              <Link to="/Home" className="text-sm text-teal-200 hover:text-white transition-colors">Home</Link>
              <Link to="/About" className="text-sm text-teal-200 hover:text-white transition-colors">About</Link>
              <Link to="/Mentorship" className="text-sm text-teal-200 hover:text-white transition-colors">Mentorship</Link>
              <Link to="/Apply" className="text-sm text-teal-200 hover:text-white transition-colors">Apply</Link>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-teal-300 uppercase tracking-wider mb-4">Connect</h4>
            <div className="flex flex-col gap-3">
              <a href="https://www.linkedin.com/company/friends-of-bata/" target="_blank" rel="noopener noreferrer" className="text-sm text-teal-200 hover:text-white transition-colors">LinkedIn</a>
              <a href="https://www.instagram.com/friendsofbata/" target="_blank" rel="noopener noreferrer" className="text-sm text-teal-200 hover:text-white transition-colors">Instagram</a>
              <a href="https://www.friendsofbata.org/pitch-lab-podcast" target="_blank" rel="noopener noreferrer" className="text-sm text-teal-200 hover:text-white transition-colors">Pitch Lab Podcast</a>
            </div>
          </div>
        </div>

        <div className="border-t border-teal-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-teal-400">© {new Date().getFullYear()} Friends of Bata. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://www.friendsofbata.org/privacy-policy" className="text-xs text-teal-400 hover:text-teal-200 transition-colors">Privacy</a>
            <a href="https://www.friendsofbata.org/cookies-policy" className="text-xs text-teal-400 hover:text-teal-200 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}