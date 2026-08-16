import React from 'react';
import { CodeIcon, ServerIcon, DatabaseIcon, TerminalIcon, UsersIcon } from 'lucide-react';
import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation';

const CATEGORIES = [
  {
    icon: <CodeIcon size={22} />,
    title: 'Frontend',
    color: 'indigo',
    skills: [
      { name: 'React.js',    level: 'Intermediate' },
      { name: 'JavaScript',  level: 'Intermediate' },
      { name: 'HTML5',       level: 'Advanced'     },
      { name: 'CSS3',        level: 'Advanced'     },
      { name: 'Tailwind CSS',level: 'Intermediate' },
    ],
  },
  {
    icon: <ServerIcon size={22} />,
    title: 'Backend',
    color: 'violet',
    skills: [
      { name: 'Node.js',    level: 'Intermediate' },
      { name: 'Express.js', level: 'Intermediate' },
      { name: 'PHP',        level: 'Intermediate' },
      { name: 'REST APIs',  level: 'Intermediate' },
      { name: 'JWT Auth',   level: 'Intermediate' },
    ],
  },
  {
    icon: <DatabaseIcon size={22} />,
    title: 'Database',
    color: 'purple',
    skills: [
      { name: 'MongoDB',  level: 'Intermediate' },
      { name: 'MySQL',    level: 'Intermediate' },
      { name: 'SQLite',   level: 'Beginner'     },
    ],
  },
  {
    icon: <TerminalIcon size={22} />,
    title: 'Tools & Platforms',
    color: 'pink',
    skills: [
      { name: 'Git & GitHub',     level: 'Intermediate' },
      { name: 'Android Studio',   level: 'Intermediate' },
      { name: 'VS Code',          level: 'Advanced'     },
      { name: 'Figma',            level: 'Beginner'     },
      { name: 'Postman',          level: 'Intermediate' },
    ],
  },
  {
    icon: <UsersIcon size={22} />,
    title: 'Soft Skills',
    color: 'indigo',
    skills: [
      { name: 'Teamwork',         level: '' },
      { name: 'Communication',    level: '' },
      { name: 'Problem-solving',  level: '' },
      { name: 'Time Management',  level: '' },
      { name: 'Fast Learner',     level: '' },
    ],
  },
];

const LEVEL_COLOR: Record<string, string> = {
  'Advanced':     'bg-indigo-500/20 border-indigo-500/30 text-indigo-300',
  'Intermediate': 'bg-violet-500/20 border-violet-500/30 text-violet-300',
  'Beginner':     'bg-slate-500/20 border-slate-500/30 text-slate-400',
  '':             'bg-purple-500/20 border-purple-500/30 text-purple-300',
};

export const Skills = () => {
  const titleRef = useScrollAnimation();
  const setRef   = useStaggerAnimation(CATEGORIES.length);

  return (
    <section id="skills" className="py-24 w-full bg-slate-900/50 relative">
      <div className="absolute inset-0 opacity-30" style={{backgroundImage:'radial-gradient(circle at 70% 30%, rgba(139,92,246,0.12) 0%, transparent 55%)'}} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative">

        {/* Title */}
        <div ref={titleRef} className="fade-in-up text-center mb-16">
          <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">What I Know</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-white">Skills & Technologies</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((cat, i) => (
            <div
              key={i}
              ref={setRef(i)}
              className="fade-in-up gradient-card glass p-6 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-indigo-500/15 text-indigo-400">
                  {cat.icon}
                </div>
                <h3 className="text-white font-semibold text-lg">{cat.title}</h3>
              </div>
              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(skill => (
                  <span
                    key={skill.name}
                    className={'px-3 py-1.5 text-sm font-medium rounded-full border transition-all duration-200 hover:scale-105 cursor-default ' + (LEVEL_COLOR[skill.level] || LEVEL_COLOR[''])}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Always learning banner */}
        <div className="mt-12 gradient-card glass p-6 sm:p-8 text-center">
          <h3 className="text-white font-bold text-xl mb-2">Always Learning</h3>
          <p className="text-slate-400 max-w-xl mx-auto">
            Technology evolves rapidly and so do I. Currently exploring advanced React patterns, cloud deployment,
            and system design to level up my engineering skills.
          </p>
        </div>
      </div>
    </section>
  );
};
