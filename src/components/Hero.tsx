import React, { useEffect, useState } from 'react';
import { ArrowDownIcon, GithubIcon, LinkedinIcon, DownloadIcon, ArrowRightIcon } from 'lucide-react';

const ROLES = ['Full Stack Developer', 'BIT Undergraduate', 'Tech Enthusiast', 'Problem Solver'];

export const Hero = () => {
  const [roleIdx, setRoleIdx]         = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting]   = useState(false);
  const [mounted, setMounted]         = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const current = ROLES[roleIdx];
    let timeout: ReturnType<typeof setTimeout>;
    if (!isDeleting) {
      if (displayText.length < current.length) {
        timeout = setTimeout(() => setDisplayText(current.slice(0, displayText.length + 1)), 100);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2200);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => setDisplayText(current.slice(0, displayText.length - 1)), 50);
      } else {
        setIsDeleting(false);
        setRoleIdx(prev => (prev + 1) % ROLES.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIdx]);

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* ── Animated Background ── */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900" />
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-30" style={{backgroundImage:'linear-gradient(rgba(99,102,241,0.07) 1px,transparent 1px),linear-gradient(to right,rgba(99,102,241,0.07) 1px,transparent 1px)',backgroundSize:'64px 64px'}} />
        {/* Blobs */}
        <div className="animate-blob absolute -top-10 -left-10 w-96 h-96 rounded-full bg-indigo-700 mix-blend-multiply filter blur-3xl opacity-20" />
        <div className="animate-blob animation-delay-2000 absolute top-1/3 right-0 w-80 h-80 rounded-full bg-violet-700 mix-blend-multiply filter blur-3xl opacity-20" />
        <div className="animate-blob animation-delay-4000 absolute bottom-0 left-1/3 w-96 h-96 rounded-full bg-purple-700 mix-blend-multiply filter blur-3xl opacity-15" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl z-10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: Text ── */}
          <div className={'space-y-7 text-center lg:text-left transition-all duration-1000 ' + (mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10')}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-500/15 border border-indigo-500/25 text-indigo-300 rounded-full text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
              Open to opportunities
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
              Hi, I'm{' '}
              <span className="gradient-text">Janaka Jeewantha</span>
            </h1>

            {/* Typewriter */}
            <div className="text-xl sm:text-2xl text-slate-300 font-light min-h-[2.5rem] flex items-center justify-center lg:justify-start gap-1">
              <span>{displayText}</span>
              <span className="inline-block w-0.5 h-6 bg-indigo-400 animate-pulse" />
            </div>

            {/* Bio */}
            <p className="text-slate-400 max-w-md mx-auto lg:mx-0 leading-relaxed">
              A passionate tech enthusiast and BIT undergraduate based in Sri Lanka,
              crafting innovative digital experiences and building impactful software.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="https://drive.google.com/file/d/1mWAPrUjlVDwJhsfRUzkJGUYr7sAN4WoB/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/45 hover:scale-105 transition-all duration-300"
              >
                <DownloadIcon size={17} className="group-hover:-translate-y-0.5 transition-transform" />
                Download CV
              </a>
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-7 py-3.5 border border-white/15 hover:border-indigo-500/50 text-slate-200 hover:text-white font-semibold rounded-xl hover:bg-indigo-500/10 hover:scale-105 transition-all duration-300"
              >
                View my work
                <ArrowRightIcon size={17} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 justify-center lg:justify-start">
              <a href="https://github.com/JanakaJeewantha" target="_blank" rel="noopener noreferrer"
                className="p-3 bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-indigo-500/20 hover:border-indigo-500/40 rounded-xl transition-all duration-300 hover:scale-110"
                aria-label="GitHub">
                <GithubIcon size={20} />
              </a>
              <a href="https://www.linkedin.com/in/janaka-jeewantha-9759a8369/" target="_blank" rel="noopener noreferrer"
                className="p-3 bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-indigo-500/20 hover:border-indigo-500/40 rounded-xl transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn">
                <LinkedinIcon size={20} />
              </a>
            </div>
          </div>

          {/* ── Right: Profile Image ── */}
          <div className={'flex justify-center transition-all duration-1000 delay-300 ' + (mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10')}>
            <div className="relative">
              {/* Glow aura */}
              <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 opacity-20 blur-3xl animate-pulse" />
              {/* Gradient ring */}
              <div className="p-1 rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 animate-glow-pulse">
                <div className="p-1 rounded-full bg-slate-950">
                  <img
                    src="https://i.postimg.cc/htqkqy3t/profilepic.jpg"
                    alt="Janaka Jeewantha"
                    className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 object-cover rounded-full"
                  />
                </div>
              </div>
              {/* Dev badge */}
              <div className="absolute -bottom-5 -right-5 glass border border-indigo-500/30 rounded-2xl px-4 py-2.5 shadow-2xl animate-float">
                <code className="text-indigo-400 text-sm font-bold">{'<dev />'}</code>
              </div>
              {/* BIT badge */}
              <div className="absolute -top-3 -left-8 glass border border-violet-500/30 rounded-2xl px-3 py-2 shadow-2xl animate-float-delayed">
                <span className="text-violet-300 text-xs font-semibold">BIT @ UoM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex flex-col items-center gap-2 mt-16 pb-4 animate-bounce">
          <span className="text-slate-600 text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDownIcon className="text-indigo-500" size={18} />
        </div>
      </div>
    </section>
  );
};
