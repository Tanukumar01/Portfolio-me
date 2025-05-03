import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'Home', to: 'hero' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Experience', to: 'experience' },
  { name: 'Contact', to: 'contact' },
];

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSetActive = (to: string) => {
    setActiveSection(to);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-dark-800/90 backdrop-blur-sm shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <ScrollLink 
          to="hero" 
          smooth={true} 
          duration={500} 
          className="text-xl md:text-2xl font-bold text-primary-700 dark:text-primary-400 cursor-pointer"
        >
          <span className="font-mono">&#60;</span>
          <span>Tanu Kumar</span>
          <span className="font-mono">/&#62;</span>
        </ScrollLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <ScrollLink
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              onSetActive={handleSetActive}
              className={`cursor-pointer transition-colors duration-300 hover:text-primary-600 dark:hover:text-primary-400 ${
                activeSection === item.to 
                  ? 'font-medium text-primary-700 dark:text-primary-400' 
                  : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              {item.name}
            </ScrollLink>
          ))}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-dark-700 hover:bg-gray-200 dark:hover:bg-dark-600 transition-colors duration-300"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} className="text-primary-700" />
            )}
          </button>
        </nav>

        {/* Mobile menu button */}
        <div className="flex items-center space-x-4 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-dark-700 hover:bg-gray-200 dark:hover:bg-dark-600 transition-colors duration-300"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <Sun size={18} className="text-yellow-400" />
            ) : (
              <Moon size={18} className="text-primary-700" />
            )}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-gray-100 dark:bg-dark-700 hover:bg-gray-200 dark:hover:bg-dark-600 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X size={24} className="text-gray-900 dark:text-gray-100" />
            ) : (
              <Menu size={24} className="text-gray-900 dark:text-gray-100" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-white dark:bg-dark-800 shadow-lg"
        >
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <ScrollLink
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                onSetActive={handleSetActive}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 cursor-pointer transition-colors duration-300 hover:text-primary-600 dark:hover:text-primary-400 ${
                  activeSection === item.to 
                    ? 'font-medium text-primary-700 dark:text-primary-400' 
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                {item.name}
              </ScrollLink>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;