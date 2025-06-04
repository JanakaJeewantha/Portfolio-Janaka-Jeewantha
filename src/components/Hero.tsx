import React from 'react';
import { ArrowDownIcon, GithubIcon, LinkedinIcon } from 'lucide-react';
export const Hero = () => {
  return <section id="home" className="relative min-h-screen w-full flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800"></div>
        <div className="absolute top-20 right-0 w-72 h-72 bg-blue-900/30 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-indigo-900/30 rounded-full filter blur-3xl opacity-30"></div>
      </div>
      <div className="container mx-auto max-w-5xl z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
              BIT Undergraduate
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              Hi, I'm{' '}
              <span className="text-blue-600 dark:text-blue-400">
                Janaka Jeewantha
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-lg mx-auto lg:mx-0">
              A passionate tech enthusiast and BIT undergraduate based in Sri
              Lanka.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a href="#contact" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors shadow-md hover:shadow-lg">
                Get in touch
              </a>
              <a href="#projects" className="px-6 py-3 border border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-500 text-gray-800 dark:text-gray-200 font-medium rounded-md transition-colors hover:text-blue-600 dark:hover:text-blue-400">
                View my work
              </a>
            </div>
            <div className="flex gap-4 justify-center lg:justify-start pt-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors" aria-label="GitHub">
                <GithubIcon size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors" aria-label="LinkedIn">
                <LinkedinIcon size={24} />
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 opacity-20 blur-2xl animate-pulse"></div>
              <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" alt="Professional portrait of Janaka Jeewantha" className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-lg" />
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg">
                <div className="bg-blue-600 text-white p-2 rounded-full">
                  <code className="text-xs font-bold">{'<coder/>'}</code>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <ArrowDownIcon className="text-gray-600 dark:text-gray-400" size={24} />
          </a>
        </div>
      </div>
    </section>;
};