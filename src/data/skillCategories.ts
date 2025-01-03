import { Code, Database, Server, Terminal } from 'lucide-react';
import type { SkillCategory } from '../types/skills';
import * as assets from "../assets";

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces",
    icon: Code,
    skills: [
      { name: "HTML", logo: assets.html },
      { name: "CSS", logo: assets.css },
      { name: "React", logo: assets.react },
      { name: "Next.js", logo: assets.next },
      { name: "Tailwind CSS", logo: assets.tailwind },
    ],
  },
  {
    title: "Backend Development",
    description: "Creating robust server-side applications",
    icon: Server,
    skills: [
      { name: "Node.js", logo: assets.node },
      { name: "Express.js", logo: assets.express },
      { name: "Spring Boot", logo: assets.spring },
      { name: "Nest.js", logo: assets.nest },
      { name: "GraphQL", logo: assets.gql },
    ],
  },
  {
    title: "Programming Languages",
    description: "Core languages and technologies",
    icon: Terminal,
    skills: [
      { name: "JavaScript", logo: assets.js },
      { name: "TypeScript", logo: assets.ts },
      { name: "Java", logo: assets.java },
      { name: "Python", logo: assets.python },
      { name: "C++", logo: assets.cpp },
    ],
  },
  {
    title: "Databases",
    description: "Database management and optimization",
    icon: Database,
    skills: [
      { name: "MySQL", logo: assets.mysql },
      { name: "PostgreSQL", logo: assets.pg },
      { name: "MongoDB", logo: assets.mogodb },
    ],
  },
];