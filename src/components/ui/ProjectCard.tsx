import { ExternalLink, Github } from "lucide-react";
import Card from "./Card";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  github?: string;
  demo?: string;
  note?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  github,
  demo,
  note,
}: ProjectCardProps) {
  return (
    <Card imageCard>
      <div className="relative overflow-hidden group">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transform transition-transform duration-200 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex space-x-4">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-200"
            >
              <Github className="w-5 h-5 mr-2" />
              Code
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-200"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Demo
            </a>
          )}
          {note && <p className="text-gray-600 dark:text-gray-400">{note}</p>}
        </div>
      </div>
    </Card>
  );
}
