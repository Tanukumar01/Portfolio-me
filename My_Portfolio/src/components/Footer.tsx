import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 dark:bg-dark-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-8 pb-8 border-b border-gray-700 dark:border-dark-700">
          <div className="md:w-1/3">
            <ScrollLink 
              to="hero" 
              smooth={true} 
              duration={500} 
              className="text-2xl font-bold text-primary-400 cursor-pointer inline-block mb-4"
            >
              <span className="font-mono">&#60;</span>
              <span>John Doe</span>
              <span className="font-mono">/&#62;</span>
            </ScrollLink>
            <p className="text-gray-400 mb-6">
              Passionate software engineer and full-stack developer creating innovative solutions to real-world problems.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:johndoe@example.com" 
                className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <li key={item}>
                  <ScrollLink
                    to={item.toLowerCase()}
                    smooth={true}
                    duration={500}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-300 cursor-pointer"
                  >
                    {item}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Info</h3>
            <ul className="space-y-3 text-gray-400">
              <li>Mumbai, Maharashtra, India</li>
              <li>johndoe@example.com</li>
              <li>+91 9876543210</li>
            </ul>
          </div>
        </div>
        
        <div className="text-center text-gray-500 dark:text-gray-400 text-sm">
          <p>&copy; {currentYear} John Doe. All rights reserved.</p>
          <p className="mt-2">
            Built with React, TypeScript, Tailwind CSS, and Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;