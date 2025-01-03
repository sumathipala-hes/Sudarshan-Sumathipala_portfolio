import { ExperienceItem } from './types';
import * as assets from '../../assets';

export const experiences: ExperienceItem[] = [
  {
    role: 'Associate Software Engineer',
    company: 'Fcode Labs pvt.ltd.',
    period: '2024/05 - 2024/12',
    description: 'Working on client projects and internal products, developing full-stack applications with modern technologies.',
    skills: [
      { name: 'TypeScript', logo: assets.ts },
      { name: 'React', logo: assets.react },
      { name: 'Redux', logo: assets.redux },
      { name: 'Express.js', logo: assets.express },
      { name: 'MongoDB', logo: assets.mogodb },
      { name: 'PostgreSQL', logo: assets.pg },
      { name: 'GraphQL', logo: assets.gql },
      { name: 'AWS Lambda', logo: assets.aws }
    ]
  },
  {
    role: 'Intern Software Engineer',
    company: 'Fcode Labs pvt.ltd.',
    period: '2023/11 - 2024/05',
    description: 'Developed two training projects, participated in regular code reviews and mentoring sessions. Contributed to client projects and company products.',
    skills: [
      { name: 'TypeScript', logo: assets.ts },
      { name: 'React', logo: assets.react },
      { name: 'Redux', logo: assets.redux },
      { name: 'Express.js', logo: assets.express },
      { name: 'MongoDB', logo: assets.mogodb },
      { name: 'PostgreSQL', logo: assets.pg },
      { name: 'GraphQL', logo: assets.gql },
      { name: 'AWS Lambda', logo: assets.aws }
    ]
  }
];