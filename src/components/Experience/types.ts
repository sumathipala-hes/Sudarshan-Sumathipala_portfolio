import { Skill } from '../../types/skills';

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  skills: Skill[];
}