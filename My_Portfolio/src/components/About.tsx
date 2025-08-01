import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, GraduationCap, LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon: Icon }) => {
  return (
    <motion.div 
      className="flex flex-col items-center text-center p-6 rounded-xl bg-white dark:bg-dark-700 shadow-md border border-gray-100 dark:border-dark-600"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="p-3 rounded-full bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 mb-5">
        <Icon size={28} />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </motion.div>
  );
};

const About: React.FC = () => {
  const features = [
    {
      title: 'Web Development',
      description: 'Building responsive, accessible, and performant web applications using modern technologies.',
      icon: Code,
    },
    {
      title: 'AI & Machine Learning',
      description: 'Exploring advanced AI solutions and implementing machine learning models for real-world problems.',
      icon: Cpu,
    },
    {
      title: 'Continuous Learning',
      description: 'Constantly seeking new knowledge, following best practices, and staying up-to-date with technology trends.',
      icon: GraduationCap,
    },
  ];
  
  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-dark-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
          <div className="w-24 h-1 bg-primary-600 dark:bg-primary-500 mx-auto mb-10 rounded-full"></div>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              Passionate Software Engineer with a focus on innovation
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a final year B.Tech Computer Science student with a deep passion for software development. My journey began with simple HTML websites and has evolved into building complex full-stack applications.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I enjoy solving complex problems and turning ideas into reality through elegant code. My experience spans across frontend and backend technologies, with a particular interest in creating intuitive user experiences.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              When I'm not coding, I contribute to open-source projects, participate in hackathons, and continuously expand my knowledge through online courses and technical literature.
            </p>
            <div className="grid grid-cols-2 gap-4 max-w-md">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Education</h4>
                <p className="text-gray-700 dark:text-gray-300">B.Tech in Computer Science And Engineering (AI/ML)</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Location</h4>
                <p className="text-gray-700 dark:text-gray-300">Kanpur, India</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Graduation Year</h4>
                <p className="text-gray-700 dark:text-gray-300">2026</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Interest</h4>
                <p className="text-gray-700 dark:text-gray-300">Web Dev, AI</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 grid grid-cols-1 gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;