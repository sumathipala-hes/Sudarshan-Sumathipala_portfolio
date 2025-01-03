import { LucideIcon } from 'lucide-react';

export interface Skill {
  name: string;
  logo: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  icon: LucideIcon;
  skills: Skill[];
}