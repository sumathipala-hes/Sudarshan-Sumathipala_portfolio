import { motion } from 'framer-motion';

interface SectionTitleProps {
  children: React.ReactNode;
}

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
      className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8"
    >
      {children}
    </motion.h2>
  );
}