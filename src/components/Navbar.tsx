import React, { useEffect, useState } from 'react';
import { SunIcon, MoonIcon, MenuIcon, XIcon, DownloadIcon } from 'lucide-react';

interface NavbarProps { theme: string; toggleTheme: () => void; }

const NAV_LINKS = [
  { name: 'Home',     href: '#home'     },
  { name: 'About',    href: '#about'    },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills',   href: '#skills'   },
  { name: 'Contact',  href: '#contact'  },
];

export const Navbar = ({ theme, toggleTheme }: NavbarProps) => {
  const [scrolled, setScrolled]     = useState(false);
  const [menuOpen, setMenuOpen]     = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = ['home','about','projects','skills','contact'];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) { setActiveLink(id); break; }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={'fixed top-0 w-full z-50 transition-all duration-500 ' + (scrolled ? 'glass border-b border-white/10 shadow-lg shadow-black/20' : 'bg-transparent')}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="text-xl font-bold text-white hover:opacity-80 transition-opacity">
            Janaka<span className="gradient-text">.</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(link => (
              <a
                key={link.name}
                href={link.href}
                className={'relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ' + (activeLink === link.href.slice(1) ? 'text-indigo-400' : 'text-slate-400 hover:text-white hover:bg-white/5')}
              >
                {link.name}
                {activeLink === link.href.slice(1) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-indigo-400" />
                )}
              </a>
            ))}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            {/* Download CV */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white rounded-lg shadow-md shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-105 transition-all duration-300"
            >
              <DownloadIcon size={14} />
              CV
            </a>
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <SunIcon size={18} /> : <MoonIcon size={18} />}
            </button>
            {/* Mobile menu */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-all"
              aria-label="Toggle menu"
            >
              {menuOpen ? <XIcon size={20} /> : <MenuIcon size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={'md:hidden overflow-hidden transition-all duration-300 ' + (menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0')}>
        <div className="glass border-t border-white/10 px-4 py-4 space-y-1">
          {NAV_LINKS.map(link => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={'block px-4 py-3 rounded-xl text-sm font-medium transition-all ' + (activeLink === link.href.slice(1) ? 'bg-indigo-500/15 text-indigo-400 border border-indigo-500/20' : 'text-slate-400 hover:text-white hover:bg-white/5')}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#"
            className="flex items-center gap-2 mt-2 px-4 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-indigo-600 to-violet-600 text-white"
          >
            <DownloadIcon size={14} />
            Download CV
          </a>
        </div>
      </div>
    </header>
  );
};
