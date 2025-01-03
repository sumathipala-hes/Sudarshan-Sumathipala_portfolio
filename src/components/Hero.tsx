import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import ProfileImage from '../assets/sudarshan.png';
import links from '../data/links';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16"
    >
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
          <motion.div
            className="md:w-1/2 mt-10 md:mt-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Hi, I'm{" "}
              <span className="text-blue-600 dark:text-blue-400">
                Sudarshan Sumathipala
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Full Stack Developer specializing in building exceptional digital
              experiences
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                href="src/assets/sudarshan_sumathipala_resume.pdf"
                download
                variant="secondary"
                icon={Download}
              >
                Download Resume
              </Button>
              <Button href="#contact">Contact Me</Button>
              <motion.div
                className="flex space-x-4 items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <a
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href={links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href={links.email}
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </motion.div>
            </div>
          </motion.div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src={ProfileImage}
              alt="Profile"
              className="w-64 h-64 rounded-full object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}