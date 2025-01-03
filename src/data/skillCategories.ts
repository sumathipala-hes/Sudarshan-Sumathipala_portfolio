import { Code, Database, Server, Terminal } from 'lucide-react';
import type { SkillCategory } from '../types/skills';
import { images } from '../assets';

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces",
    icon: Code,
    skills: [
      { name: "HTML", logo: "/src/assets/HTML5.svg" },
      { name: "CSS", logo: "/src/assets/css3.svg" },
      { name: "React", logo: "/src/assets/React.svg" },
      { name: "Next.js", logo: "/src/assets/Next.js.svg" },
      { name: "Tailwind CSS", logo: "/src/assets/Tailwind CSS.svg" },
    ],
  },
  {
    title: "Backend Development",
    description: "Creating robust server-side applications",
    icon: Server,
    skills: [
      { name: "Node.js", logo: "/src/assets/Node.js.svg" },
      { name: "Express.js", logo: "/src/assets/express.svg" },
      { name: "Spring Boot", logo: "/src/assets/Spring.svg" },
      { name: "Nest.js", logo: "/src/assets/Nest.js.svg" },
      { name: "GraphQL", logo: "/src/assets/graphql.svg" },
    ],
  },
  {
    title: "Programming Languages",
    description: "Core languages and technologies",
    icon: Terminal,
    skills: [
      { name: "JavaScript", logo: "/src/assets/javascript.svg" },
      { name: "TypeScript", logo: "/src/assets/Typescript.svg" },
      { name: "Java", logo: "/src/assets/java.svg" },
      { name: "Python", logo: "/src/assets/Python.svg" },
      { name: "C++", logo: images.cpp },
    ],
  },
  {
    title: "Databases",
    description: "Database management and optimization",
    icon: Database,
    skills: [
      { name: "MySQL", logo: "/src/assets/MySQL.svg" },
      { name: "PostgreSQL", logo: "/src/assets/PostgreSQL.svg" },
      { name: "MongoDB", logo: "/src/assets/mongodb.svg" },
    ],
  },
];