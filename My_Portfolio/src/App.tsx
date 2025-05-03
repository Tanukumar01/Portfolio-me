import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeProvider from './components/ThemeProvider';
import { Link as ScrollLink } from 'react-scroll';
import { ArrowUp } from 'lucide-react';

function App() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-dark-800 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
        
        {/* Scroll to top button */}
        <ScrollLink
          to="hero"
          smooth={true}
          duration={500}
          className={`fixed bottom-6 right-6 bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-full shadow-lg cursor-pointer transition-all duration-300 ${
            showScrollToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
          }`}
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </ScrollLink>
      </div>
    </ThemeProvider>
  );
}

export default App;