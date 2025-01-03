import ProjectCard from './ui/ProjectCard';
import SectionTitle from './ui/SectionTitle';
import { vectify, talkmaster, mediroster } from '../assets'

const projects = [
  {
    title: "Vectify",
    description:
      "A Mobile application to generate High-Quality vector graphics of brand logos",
    image: vectify,
    note: "Work in progress",
  },
  {
    title: "Talk Master",
    description: "A Spoken English practice platform",
    image: talkmaster,
    github: "https://github.com/sumathipala-hes/Talk-Master-FE",
    note: "Work in progress",
  },
  {
    title: "Medi Roster",
    description: "A web application to manage hospital staff roster",
    image: mediroster,
    github: "https://github.com/sumathipala-hes/MediRoster",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <SectionTitle>Featured Projects</SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}