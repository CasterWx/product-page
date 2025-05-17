import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
      whileHover={{ y: -5 }}
    >
      {/* Project image with larger height */}
      <div className="relative overflow-hidden h-64 md:h-80 lg:h-96">
        <img 
          src={typeof project.image === 'string' ? project.image : project.image[0]} 
          alt={project.title} 
          className="w-full h-full object-contain bg-gray-50 dark:bg-gray-900 p-2"
        />
        <div className="absolute top-4 right-4">
          <span className="px-4 py-1.5 text-sm font-medium text-white bg-blue-600 rounded-full shadow-md">
            {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
          </span>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <div className="flex flex-col mb-3">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            {project.title}
          </h3>
          {project.date && (
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {project.date}
            </span>
          )}
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-4 text-lg leading-relaxed">
          {project.description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="px-3 py-1.5 text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Links */}
        <div className="flex items-center space-x-4">
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 rounded-lg transition-colors shadow-md"
            >
              <ExternalLink size={18} />
              <span>Live Preview</span>
            </a>
          )}
          
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg transition-colors shadow-md"
            >
              <Github size={18} />
              <span>Source Code</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;