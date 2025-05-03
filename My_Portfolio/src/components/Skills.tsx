import React from 'react';
import { motion } from 'framer-motion';

interface SkillItemProps {
  name: string;
  level: number;
}

const SkillItem: React.FC<SkillItemProps> = ({ name, level }) => {
  return (
    <div className="mb-5">
      <div className="flex justify-between mb-1">
        <span className="font-medium text-gray-700 dark:text-gray-300">{name}</span>
        <span className="text-sm text-gray-600 dark:text-gray-400">{level}%</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-dark-600 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-primary-600 dark:bg-primary-500 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => {
  return (
    <motion.div 
      className="mb-8 p-6 bg-white dark:bg-dark-700 rounded-xl shadow-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="py-2 px-4 bg-gray-100 dark:bg-dark-600 rounded-lg text-center text-gray-800 dark:text-gray-200"
          >
            {skill}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  const frontendSkills = ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Redux'];
  const backendSkills = ['Node.js', 'Express', 'MongoDB','REST API', ];
  const languageSkills = ['JavaScript', 'TypeScript', 'Python', 'C++', 'SQL'];
  const toolsSkills = ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma', 'Docker'];
  
  const mainSkills = [
    { name: 'Frontend Development', level: 85 },
    { name: 'Backend Development', level: 75 },
    { name: 'JavaScript/TypeScript', level: 90 },
    { name: 'React.js', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Database Design', level: 70 },
  ];
  
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">My Skills</h2>
          <div className="w-24 h-1 bg-primary-600 dark:bg-primary-500 mx-auto mb-10 rounded-full"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            I've accumulated a diverse set of skills, focusing on full-stack development.
            Here's an overview of my technical expertise:
          </p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row gap-8">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white dark:bg-dark-700 p-6 rounded-xl shadow-md mb-8">
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Main Skills</h3>
              {mainSkills.map((skill, index) => (
                <SkillItem key={index} name={skill.name} level={skill.level} />
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <SkillCategory title="Frontend" skills={frontendSkills} />
            <SkillCategory title="Backend" skills={backendSkills} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <SkillCategory title="Languages" skills={languageSkills} />
              <SkillCategory title="Tools" skills={toolsSkills} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;