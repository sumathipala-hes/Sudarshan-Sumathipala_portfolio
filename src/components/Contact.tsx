import { Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';
import links from '../data/links';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <SectionTitle>Get in Touch</SectionTitle>
        <div className="max-w-2xl mx-auto">
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8">
            <div className="space-y-6">
              <div className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <MapPin className="w-6 h-6 mr-4" />
                <span className="text-lg">Colombo Sri Lanka</span>
              </div>
              <a
                href={links.phone}
                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Phone className="w-6 h-6 mr-4" />
                <span className="text-lg">+94 76 216 5346</span>
              </a>
              <a
                href={links.email}
                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Mail className="w-6 h-6 mr-4" />
                <span className="text-lg">sumathipalahes@gmail.com</span>
              </a>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Connect with me
              </h3>
              <div className="flex space-x-6">
                <a
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href={links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}