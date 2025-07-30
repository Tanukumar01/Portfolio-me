import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, Briefcase } from 'lucide-react';

interface TimelineItemProps {
  date: string;
  title: string;
  organization: string;
  description: string;
  type: 'education' | 'training' | 'certification' | 'internship';
}

const TimelineItem: React.FC<TimelineItemProps> = ({ date, title, organization, description, type }) => {
  const getIcon = () => {
    switch (type) {
      case 'education':
        return <Calendar className="text-primary-600 dark:text-primary-400" size={20} />;
      case 'training':
        return <Briefcase className="text-secondary-600 dark:text-secondary-400" size={20} />;
      case 'certification':
        return <Award className="text-accent-600 dark:text-accent-400" size={20} />;
      case 'internship':
        return <Award className="text-green-600 dark:text-green-400" size={20} />;
      default:
        return <Briefcase className="text-secondary-600 dark:text-secondary-400" size={20} />;
    }
  };
  
  return (
    <motion.div 
      className="relative pl-8 pb-8 border-l border-gray-300 dark:border-dark-600 last:border-0 last:pb-0"
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute left-[-9px] top-0 bg-white dark:bg-dark-800 p-1 rounded-full">
        {getIcon()}
      </div>
      <div className="bg-white dark:bg-dark-700 p-6 rounded-lg shadow-md">
        <span className="text-sm font-medium px-3 py-1 rounded-full bg-gray-100 dark:bg-dark-600 text-gray-700 dark:text-gray-300 inline-block mb-3">
          {date}
        </span>
        <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">{title}</h3>
        <h4 className="text-md text-primary-600 dark:text-primary-400 mb-3">{organization}</h4>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </motion.div>
  );
};

const Experience: React.FC = () => {
  const timelineItems: TimelineItemProps[] = [
    {
      date: '2022 - Present',
      title: 'B.Tech in Computer Science And Engineering (AI/ML)',
      organization: 'Kcc Institue Of Technology And Management',
      description: 'Pursuing a bachelor\'s degree in Computer Science And Engineering (AI/ML) with a focus on software engineering, data structures, and algorithms. Maintaining a 8.5 GPA while working on multiple projects.',
      type: 'education'
    },
    {
      date: '2025 - Present',
      title: 'Software Developer Intern',
      organization: 'HashPunch LLP',
      description: 'Developed and optimized RESTful APIs for AI tools like GitHub Issue Generator and Intent Classifier using Node.js, Express, and MongoDB. Reduced API response time by 40% and minimized infrastructure costs through backend optimizations. Integrated OpenAI APIs to enable intelligent automation and enhance AI-driven workflows. Currently building a company-wide ITSM tool, designing scalable backend systems and deploying services using AWS (EC2, S3).',
      type: 'internship'
    },
    {
      date: 'Dec 2024 - March 2025',
      title: 'Web Development Training',
      organization: 'HCL Tech',
      description: 'Contributed to the development of responsive web applications using React and Node.js. Implemented features that improved user experience and application performance.',
      type: 'training'
    },
    {
      date: 'May 2024',
      title: 'Full Stack Web Development',
      organization: 'Udemy',
      description: 'Completed 80+ hours of coursework covering HTML, CSS, JavaScript, React, Node.js, and MongoDB. Built 5 projects as part of the certification requirements.',
      type: 'certification'
    },
    {
      date: 'August 2022',
      title: 'C++ Programming Certification',
      organization: 'Internshala',
      description: 'Completed an 8-week training program in C++ programming, covering advanced concepts like object-oriented programming, data structures, and algorithm optimization.',
      type: 'certification'
    },
  ];
  
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience & Education</h2>
          <div className="w-24 h-1 bg-primary-600 dark:bg-primary-500 mx-auto mb-10 rounded-full"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            My academic journey, work experience, and certifications that have shaped my skills and knowledge.
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          {timelineItems.map((item, index) => {
            console.log('Rendering timeline item:', item.title, 'Type:', item.type);
            return (
              <TimelineItem 
                key={index}
                date={item.date}
                title={item.title}
                organization={item.organization}
                description={item.description}
                type={item.type}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;