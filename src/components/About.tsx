import React from 'react';
import { GraduationCapIcon, BookOpenIcon, BriefcaseIcon, CodeIcon, LayersIcon, AwardIcon } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const EDUCATION = [
  {
    icon: <GraduationCapIcon size={22} />,
    title: 'Bachelor of Information Technology',
    institution: 'University of Moratuwa',
    period: '2023 – Present',
    detail: 'Currently in 3rd Year',
    color: 'indigo',
  },
  {
    icon: <BookOpenIcon size={22} />,
    title: 'Diploma in Human Resource Management',
    institution: 'Open University of Sri Lanka, Polonnaruwa',
    period: 'Completed',
    detail: '',
    color: 'violet',
  },
  {
    icon: <BriefcaseIcon size={22} />,
    title: 'Bachelor of ICT',
    institution: 'University of Vavuniya',
    period: '1 year',
    detail: 'Prior education',
    color: 'purple',
  },
];

const STATS = [
  { icon: <CodeIcon size={22} />, label: 'Projects Built', value: '3+' },
  { icon: <LayersIcon size={22} />, label: 'Tech Stacks', value: '10+' },
  { icon: <AwardIcon size={22} />, label: 'Universities', value: '2' },
];

export const About = () => {
  const titleRef   = useScrollAnimation();
  const statsRef   = useScrollAnimation(0.1);
  const leftRef    = useScrollAnimation();
  const rightRef   = useScrollAnimation();

  return (
    <section id="about" className="py-24 w-full bg-slate-900/50 dark:bg-slate-900/50 relative">
      <div className="absolute inset-0 opacity-30" style={{backgroundImage:'radial-gradient(circle at 80% 50%, rgba(99,102,241,0.1) 0%, transparent 60%)' }} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative">

        {/* Title */}
        <div ref={titleRef} className="fade-in-up text-center mb-16">
          <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">Who I Am</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-white">About Me</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Stats */}
        <div ref={statsRef} className="fade-in-up grid grid-cols-3 gap-4 sm:gap-6 mb-16">
          {STATS.map((stat, i) => (
            <div key={i} className={'gradient-card glass p-5 text-center stagger-' + (i+1)}>
              <div className="flex justify-center mb-2 text-indigo-400">{stat.icon}</div>
              <div className="text-2xl sm:text-3xl font-bold gradient-text">{stat.value}</div>
              <div className="text-slate-400 text-xs sm:text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left: Education */}
          <div ref={leftRef} className="slide-in-left space-y-6">
            <h3 className="text-xl font-semibold text-white">Educational Background</h3>
            <div className="space-y-4">
              {EDUCATION.map((item, i) => (
                <div key={i} className="gradient-card glass p-5 flex gap-4 hover:scale-[1.02] transition-transform duration-300">
                  <div className={'flex-shrink-0 p-3 rounded-xl bg-indigo-500/15 text-indigo-400'}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{item.title}</h4>
                    <p className="text-slate-400 text-sm mt-0.5">{item.institution}</p>
                    <p className="text-indigo-400 text-xs mt-1 font-medium">
                      {item.period}{item.detail ? ' · ' + item.detail : ''}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Bio */}
          <div ref={rightRef} className="slide-in-right space-y-6">
            <h3 className="text-xl font-semibold text-white">My Story</h3>
            <div className="gradient-card glass p-6 space-y-4">
              <p className="text-slate-300 leading-relaxed">
                I am a tech enthusiast with a passion for creating innovative solutions that make a real difference.
                My academic journey spans multiple disciplines — from ICT to Human Resource Management — giving me
                a unique perspective on building technology that serves people.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Currently in my 3rd year at the University of Moratuwa, I am focused on full-stack web development
                and building scalable applications. I love turning complex problems into elegant, user-friendly experiences.
              </p>
              <div className="pt-2 border-t border-white/10">
                <p className="text-slate-400 text-sm">Currently focused on</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {['React', 'Node.js', 'MongoDB', 'REST APIs', 'Android'].map(t => (
                    <span key={t} className="px-3 py-1 text-xs font-medium bg-indigo-500/15 border border-indigo-500/25 text-indigo-300 rounded-full">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
