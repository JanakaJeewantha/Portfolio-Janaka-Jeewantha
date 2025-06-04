import React from 'react';
import { CodeIcon, TerminalIcon, PenToolIcon, UsersIcon } from 'lucide-react';
export const Skills = () => {
  const skillCategories = [{
    icon: <CodeIcon size={24} />,
    title: 'Programming',
    skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Java', 'XML']
  }, {
    icon: <TerminalIcon size={24} />,
    title: 'Tools & Technologies',
    skills: ['Android Studio', 'MySQL', 'Git', 'VS Code', 'SQLite', 'Figma']
  }, {
    icon: <UsersIcon size={24} />,
    title: 'Soft Skills',
    skills: ['Communication', 'Teamwork', 'Problem-solving', 'Time Management']
  }];
  return <section id="skills" className="py-20 w-full bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-transform hover:scale-[1.02] duration-300">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-full mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, index) => <div key={index} className="flex items-center">
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2.5 rounded-full" style={{
                  width: `${Math.floor(70 + Math.random() * 25)}%`
                }}></div>
                    </div>
                    <span className="ml-4 text-gray-700 dark:text-gray-300 min-w-[80px]">
                      {skill}
                    </span>
                  </div>)}
              </div>
            </div>)}
        </div>
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 sm:p-8 shadow-lg">
          <div className="flex flex-col sm:flex-row items-center">
            <div className="mb-6 sm:mb-0 sm:mr-8">
              <div className="p-4 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-full">
                <PenToolIcon size={32} />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Always Learning</h3>
              <p className="text-gray-600 dark:text-gray-300">
                I'm constantly expanding my skill set and staying up-to-date
                with the latest technologies. Currently focusing on enhancing my
                backend development skills and exploring new frameworks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};