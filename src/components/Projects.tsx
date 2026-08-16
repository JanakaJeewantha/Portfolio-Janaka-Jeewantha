import React from 'react';
import { ExternalLinkIcon, GithubIcon, UsersIcon, StarIcon } from 'lucide-react';
import { useStaggerAnimation, useScrollAnimation } from '../hooks/useScrollAnimation';

const PROJECTS = [
  {
    title: 'EdiTrack',
    subtitle: 'Education Tracking System',
    description: 'A full-stack web application for managing student attendance and academic marks with role-based access for admins, teachers, and students. Features JWT authentication, real-time data, and a responsive React dashboard.',
    type: 'Full Stack Web App',
    year: '2024 – Present',
    team: false,
    featured: true,
    github: 'https://github.com/JanakaJeewantha/EdiTrack-App',
    live: '',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'REST API'],
    gradient: 'from-indigo-600 via-violet-600 to-purple-600',
    glow: 'rgba(99,102,241,0.3)',
  },
  {
    title: 'PaddyGate',
    subtitle: 'Agricultural Marketplace Platform',
    description: 'A comprehensive web platform connecting rice millers and farmers across Sri Lanka. Features real-time rice price listings, location-based mill search, and multi-role user management for admins, farmers, and millers.',
    type: 'Web App',
    year: '2023',
    team: true,
    featured: false,
    github: 'https://github.com/JanakaJeewantha/PaddyGateApp',
    live: '',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    gradient: 'from-emerald-600 via-teal-600 to-cyan-600',
    glow: 'rgba(16,185,129,0.3)',
  },
  {
    title: 'UniConnect',
    subtitle: 'Android Mobile Application',
    description: 'A native Android application built with Material Design principles, implementing local data persistence and REST API integration. Designed for students to manage academic activities on the go.',
    type: 'Mobile App',
    year: '2022',
    team: false,
    featured: false,
    github: 'https://github.com/JanakaJeewantha',
    live: '',
    technologies: ['Java', 'Android SDK', 'SQLite', 'XML', 'REST API'],
    gradient: 'from-orange-600 via-rose-600 to-pink-600',
    glow: 'rgba(239,68,68,0.3)',
  },
];

export const Projects = () => {
  const titleRef = useScrollAnimation();
  const setRef   = useStaggerAnimation(PROJECTS.length);

  return (
    <section id="projects" className="py-24 w-full bg-slate-950 relative">
      <div className="absolute inset-0 opacity-40" style={{backgroundImage:'radial-gradient(circle at 20% 60%, rgba(99,102,241,0.1) 0%, transparent 50%)'}} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative">

        {/* Title */}
        <div ref={titleRef} className="fade-in-up text-center mb-16">
          <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">What I've Built</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-white">Featured Projects</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Cards */}
        <div className="space-y-8">
          {PROJECTS.map((project, i) => (
            <div
              key={i}
              ref={setRef(i)}
              className="fade-in-up group gradient-card glass overflow-hidden hover:scale-[1.015] transition-all duration-500 hover:shadow-2xl"
              style={{transitionDelay: i * 0.12 + 's'}}
            >
              {/* Gradient top bar */}
              <div className={'h-1 w-full bg-gradient-to-r ' + project.gradient} />

              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      {project.featured && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-amber-500/15 border border-amber-500/25 text-amber-400 text-xs font-semibold rounded-full">
                          <StarIcon size={10} />
                          Featured
                        </span>
                      )}
                      <span className="text-xs text-slate-500">{project.year}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    <p className="text-indigo-400 text-sm font-medium">{project.subtitle}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={'px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ' + project.gradient + ' text-white'}>
                      {project.type}
                    </span>
                  </div>
                </div>

                <p className="text-slate-400 leading-relaxed mb-6">{project.description}</p>

                {project.team && (
                  <div className="flex items-center gap-2 mb-5 text-slate-400">
                    <UsersIcon size={15} />
                    <span className="text-sm">Group / Team Project</span>
                  </div>
                )}

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map(tech => (
                    <span key={tech} className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 text-slate-300 rounded-lg hover:border-indigo-500/40 hover:text-indigo-300 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 hover:bg-indigo-500/15 hover:border-indigo-500/40 text-slate-300 hover:text-white text-sm font-medium rounded-lg transition-all duration-200"
                  >
                    <GithubIcon size={15} />
                    View Code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors"
                    >
                      <ExternalLinkIcon size={15} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-14 fade-in-up">
          <a
            href="https://github.com/JanakaJeewantha"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-indigo-500/40 text-slate-400 hover:text-white rounded-xl hover:bg-indigo-500/10 transition-all duration-300"
          >
            <GithubIcon size={18} />
            See all projects on GitHub
            <ExternalLinkIcon size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};
