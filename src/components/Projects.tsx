import React from 'react';
import { ExternalLinkIcon, CodeIcon, UsersIcon, SmartphoneIcon } from 'lucide-react';
export const Projects = () => {
  const projects = [{
    title: 'Rice Mill Web App',
    description: 'A comprehensive platform connecting rice millers and farmers with features like rice price listings, filtered mill search, and multiple user roles (admin, farmer, miller).',
    type: 'Web App',
    icon: <CodeIcon size={20} />,
    teamProject: true,
    features: ['Rice price listings', 'Filtered mill search', 'User role management', 'Farmer-miller connection'],
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL']
  }, {
    title: 'Android Mobile Application',
    description: 'A native Android application developed using Android Studio, implementing modern Material Design principles and following best practices for mobile development.',
    type: 'Mobile App',
    icon: <SmartphoneIcon size={20} />,
    teamProject: false,
    features: ['Native Android UI', 'Material Design', 'Local data storage', 'REST API integration'],
    technologies: ['Java', 'Android SDK', 'SQLite', 'XML']
  }];
  return <section id="projects" className="py-20 w-full bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="space-y-8">
          {projects.map((project, index) => <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden transition-transform hover:scale-[1.01] duration-300">
              <div className="p-1 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="text-blue-600 dark:text-blue-400">
                      {project.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {project.type}
                    </h3>
                  </div>
                  <span className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full">
                    {project.type}
                  </span>
                </div>
                <h4 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  {project.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {project.description}
                </p>
                <div className="space-y-4">
                  {project.teamProject && <div className="flex items-start space-x-3">
                      <UsersIcon size={20} className="text-gray-500 dark:text-gray-400 mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="font-medium text-gray-900 dark:text-white">
                          Group Project
                        </h5>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          Collaborated with a team to design and develop this
                          solution
                        </p>
                      </div>
                    </div>}
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <h5 className="font-medium mb-2 text-gray-900 dark:text-white">
                      Key Features:
                    </h5>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                      {project.features.map((feature, idx) => <li key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                          <span className="text-gray-600 dark:text-gray-300">
                            {feature}
                          </span>
                        </li>)}
                    </ul>
                  </div>
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <h5 className="font-medium mb-2 text-gray-900 dark:text-white">
                      Technologies Used:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map(tech => <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded-md">
                          {tech}
                        </span>)}
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <a href="#" className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300">
                    <span>View Project</span>
                    <ExternalLinkIcon size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};