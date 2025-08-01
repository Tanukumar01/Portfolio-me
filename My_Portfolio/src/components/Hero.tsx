import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import { FileDown, ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import myPhoto from '/src/Photos/my_photo.jpg'; 


const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16 pb-16"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 to-transparent dark:from-primary-950/20 dark:to-transparent z-0" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="w-full md:w-3/5 mb-12 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary-600 dark:text-primary-400 font-mono mb-4">
              Hello, my name is Tanu
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
              Tanu
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-6 text-gray-700 dark:text-gray-300">
              Aspiring{" "}
              <span className="text-primary-600 dark:text-primary-400">
                Software Engineer
              </span>{" "}
              &<br />
              <span className="text-secondary-600 dark:text-secondary-400">
                Full Stack Developer
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
              I'm a passionate final year B.Tech CSE student focused on creating
              exceptional digital experiences. Currently exploring Web
              Development, AI.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/Tanu_Kumar_resume_Exp.pdf"
                className="flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors duration-300 shadow-md"
                download
              >
                <FileDown size={24} />
                <span>Download Resume </span>
              </a>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                className="flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-primary-600 dark:border-primary-500 text-primary-600 dark:text-primary-400 hover:bg-primary-600/10 rounded-lg transition-colors duration-300"
              >
                <span>Get In Touch</span>
                <ArrowRight size={20} />
              </ScrollLink>
            </div>

            <div className="flex items-center mt-10 gap-6">
              <a
                href="https://github.com/Tanukumar01/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors duration-300"
                aria-label="GitHub Profile"
              >
                <Github size={30} />
              </a>
              <a
                href="https://www.linkedin.com/in/tanukumar01/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={30} />
              </a>
              <a
                href="mailto:tanukumar842785@gmail.com"
                className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={30} />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="w-full md:w-2/5 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg blur opacity-75 dark:opacity-50"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 bg-white dark:bg-dark-700 rounded-lg overflow-hidden shadow-xl">
                <img
                src={myPhoto}
                alt="Tanu Kumar"
                className="w-full h-full transform transition-transform duration-300 hover:scale-110 object-cover rounded-lg"
               />           
                </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            className="flex flex-col items-center cursor-pointer"
          >
            <span className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              Scroll Down
            </span>
            <div className="w-5 h-9 border-2 border-gray-600 dark:border-gray-400 rounded-full flex justify-center">
              <div className="w-1.5 h-1.5 bg-gray-600 dark:bg-gray-400 rounded-full mt-2 animate-bounce-slow"></div>
            </div>
          </ScrollLink>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
