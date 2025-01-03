import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  imageCard?: boolean;
}

export default function Card({ children, className = '', imageCard = false }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.2,
        ease: [0.23, 1, 0.32, 1] // Custom easing for smoother animation
      }}
      className={`h-full bg-white dark:bg-gray-700 rounded-lg ${imageCard ? '' : 'p-6'} shadow-lg hover:shadow-xl transition-all duration-200 ${className}`}
    >
      {children}
    </motion.div>
  );
}