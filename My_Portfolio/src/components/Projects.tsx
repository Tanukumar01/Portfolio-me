import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Maximize2, X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo?: string;
  features: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'TalentTrek',
    description: 'Job portal with AI resume screening and intelligent job matching algorithm.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'APIs', 'AI/ML'],
    github: 'https://github.com/Tanukumar01/TalentTrek',
    demo: 'https://talent-trek.onrender.com/',
    features: [
      'Resume parsing and keyword extraction',
      'Job recommendation based on skills',
      'Real-time chat with recruiters',
      'Application tracking system'
    ]
  },
  {
    id: 2,
    title: 'AI Task Agent',
    description: 'AI-powered personal assistant that executes local tasks using advanced planning algorithms.',
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['HTML', 'CSS', 'JavaScript','Node js','Express js', 'OpenRouter APIs'],
    github: 'https://github.com/Tanukumar01/AI_Task_Agent',
    demo: 'https://ai-task-agent-oqf0.onrender.com/',
    features: [
      'Natural language processing',
      'Task scheduling and prioritization',
      'Integration with calendar and productivity apps',
      'Voice command capability'
    ]
  },
  
  {
    id: 3,
    title: 'Weather App',
    description: 'A responsive weather application providing real-time forecasts for locations worldwide.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['HTML', 'CSS', 'JavaScript', 'API'],
    github: 'https://github.com/Tanukumar01/Weather-app',
    demo: 'https://tanukumar01.github.io/Weather-app/',
    features: [
      'Current weather conditions',
      'Location-based weather',
      'Show Location Based Images',
      'Dynamic weather icons and backgrounds'
    ]
  },
  
];

const ProjectCard: React.FC<{ project: Project; onClick: () => void }> = ({ project, onClick }) => {
  return (
    <motion.div
      className="bg-white dark:bg-dark-700 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <button 
          onClick={onClick}
          className="absolute top-2 right-2 p-2 bg-white/80 dark:bg-dark-800/80 rounded-full text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-dark-800 transition-colors duration-200"
          aria-label="View project details"
        >
          <Maximize2 size={16} />
        </button>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs px-2 py-1 bg-gray-100 dark:bg-dark-600 text-gray-700 dark:text-gray-300 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
          >
            <Github size={16} />
            <span>Code</span>
          </a>
          {project.demo && (
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
            >
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectDetailModal: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="bg-white dark:bg-dark-800 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      >
        <div className="relative h-64 sm:h-80">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/80 dark:bg-dark-800/80 rounded-full text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-dark-800 transition-colors duration-200"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-6">
          <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, index) => (
              <span 
                key={index} 
                className="text-sm px-3 py-1 bg-gray-100 dark:bg-dark-600 text-gray-700 dark:text-gray-300 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <h4 className="text-lg font-medium mb-3 text-gray-900 dark:text-white">Key Features</h4>
          <ul className="list-disc pl-5 mb-6 text-gray-600 dark:text-gray-400 space-y-1">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          
          <div className="flex gap-6">
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200"
            >
              <Github size={18} />
              <span>View Code</span>
            </a>
            {project.demo && (
              <a 
                href={project.demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-primary-600 dark:bg-primary-700 text-white rounded-lg hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors duration-200"
              >
                <ExternalLink size={18} />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-dark-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">My Projects</h2>
          <div className="w-24 h-1 bg-primary-600 dark:bg-primary-500 mx-auto mb-10 rounded-full"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            Here are some of my recent projects. Each one demonstrates different skills and technologies.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={() => setSelectedProject(project)} 
            />
          ))}
        </div>
        
        {selectedProject && (
          <ProjectDetailModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </div>
    </section>
  );
};

export default Projects;