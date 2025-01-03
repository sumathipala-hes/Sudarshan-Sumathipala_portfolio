import { motion } from 'framer-motion';
import { skillCategories } from '../../data/skillCategories';
import SectionTitle from '../ui/SectionTitle';
import SkillCard from './SkillCard';

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <SectionTitle>Skills</SectionTitle>
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {skillCategories.map((category, index) => (
            <SkillCard key={index} {...category} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}