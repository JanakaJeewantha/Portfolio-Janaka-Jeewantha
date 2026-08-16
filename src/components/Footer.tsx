import React from 'react';
import { GithubIcon, LinkedinIcon, HeartIcon } from 'lucide-react';

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="py-8 bg-slate-950 border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <a href="#home" className="text-lg font-bold text-white hover:opacity-80 transition-opacity">
            Janaka<span className="gradient-text">.</span>
          </a>

          {/* Copyright */}
          <p className="text-slate-600 text-sm flex items-center gap-1.5">
            Copyright {year} Janaka Jeewantha
          </p>

          {/* Social */}
          <div className="flex items-center gap-2">
            <a href="https://github.com/JanakaJeewantha" target="_blank" rel="noopener noreferrer"
              className="p-2 text-slate-600 hover:text-indigo-400 transition-colors" aria-label="GitHub">
              <GithubIcon size={18} />
            </a>
            <a href="https://www.linkedin.com/in/janaka-jeewantha-9759a8369/" target="_blank" rel="noopener noreferrer"
              className="p-2 text-slate-600 hover:text-indigo-400 transition-colors" aria-label="LinkedIn">
              <LinkedinIcon size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
