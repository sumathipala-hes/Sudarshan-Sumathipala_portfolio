import { motion } from 'framer-motion';

interface ProfileImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ProfileImage({ src, alt, className = '' }: ProfileImageProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="relative group"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full opacity-75 group-hover:opacity-100 blur transition-opacity duration-300" />
      <img
        src={src}
        alt={alt}
        className={`relative rounded-full object-cover shadow-2xl transition-transform duration-300 ${className}`}
      />
    </motion.div>
  );
}