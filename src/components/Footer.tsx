import React from 'react';
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="py-8 bg-gray-100 dark:bg-gray-900 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {currentYear} Janaka Jeewantha. All rights reserved.
          </p>
          <div className="mt-2">
            <a href="#home" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
              Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>;
};