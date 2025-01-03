import { Code, Globe, Server } from 'lucide-react';
import Card from './ui/Card';
import SectionTitle from './ui/SectionTitle';

export default function About() {
  const skills = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Frontend Development',
      description: 'Building responsive websites using React, TypeScript, and Tailwind CSS',
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: 'Backend Development',
      description: 'Creating scalable server solutions with Node.js and Python',
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Web Performance',
      description: 'Optimizing web applications for maximum speed and scalability',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <SectionTitle>About Me</SectionTitle>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg text-gray-600 dark:text-gray-300">
            I'm a passionate developer with 5 years of experience in creating web applications.
            I love turning complex problems into simple, beautiful, and intuitive solutions.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Card key={index}>
              <div className="h-full flex flex-col">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{skill.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 flex-grow">{skill.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}