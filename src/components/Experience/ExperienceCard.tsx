import { Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { ExperienceItem } from './types';
import Card from '../ui/Card';

export default function ExperienceCard({ role, company, period, description, skills }: ExperienceItem) {
  return (
    <Card>
      <div className="h-full flex flex-col">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{role}</h3>
        <div className="text-lg text-blue-600 dark:text-blue-400 mb-2">{company}</div>
        <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
          <Calendar className="w-4 h-4 mr-2" />
          <span>{period}</span>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="px-3 py-1.5 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-sm flex items-center gap-2"
            >
              <img 
                src={skill.logo} 
                alt={`${skill.name} logo`} 
                className="w-4 h-4"
              />
              <span>{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </Card>
  );
}