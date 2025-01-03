import { motion } from 'framer-motion';
import type { SkillCategory } from '../../types/skills';
import Card from '../ui/Card';

export default function SkillCard({ title, description, icon: Icon, skills }: SkillCategory) {
  return (
    <Card>
      <div className="h-full flex flex-col">
        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
          {description}
        </p>
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
              className="w-10 h-7"
              />
              <span className="font-bold">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </Card>
  );
}