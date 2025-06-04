import React from 'react';
import { GraduationCapIcon, BookOpenIcon, BriefcaseIcon } from 'lucide-react';
export const About = () => {
  const educationItems = [{
    icon: <GraduationCapIcon size={24} />,
    title: 'Bachelor of Information Technology',
    institution: 'University of Moratuwa',
    period: '2023 - Present',
    details: 'Currently in 3rd Year'
  }, {
    icon: <BookOpenIcon size={24} />,
    title: 'Diploma in Human Resource Management',
    institution: 'Open University, Polonnaruwa',
    period: 'Completed',
    details: ''
  }, {
    icon: <BriefcaseIcon size={24} />,
    title: 'Bachelor of ICT',
    institution: 'University of Vavuniya',
    period: '1 year',
    details: 'Prior education'
  }];
  return <section id="about" className="py-20 w-full bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                Educational Background
              </h3>
              <div className="space-y-6">
                {educationItems.map((item, index) => <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="p-3 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-full">
                        {item.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-800 dark:text-white">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {item.institution}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {item.period} {item.details && `• ${item.details}`}
                      </p>
                    </div>
                  </div>)}
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a tech enthusiast with a passion for creating innovative
                solutions. My academic journey has equipped me with a strong
                foundation in information technology and I'm constantly
                expanding my knowledge in web development and software
                engineering.
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 opacity-30 blur-xl"></div>
              <div className="relative overflow-hidden rounded-xl">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="Tech workspace with laptop and coding environment" className="w-full h-auto rounded-xl shadow-lg" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6">
                    <p className="text-white font-medium">
                      Passionate about building technology that makes a
                      difference
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};