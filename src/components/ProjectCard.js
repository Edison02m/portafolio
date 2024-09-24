import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ project, index, isHovered, setHoveredIndex, anyHovered }) => {
  return (
    <motion.div
      className="group relative rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:bg-gray-800/10 dark:hover:bg-gray-700/20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 rounded-lg shadow-[inset_0_1px_0_0_rgba(0,0,0,0.1)] group-hover:shadow-[inset_0_1px_0_0_rgba(0,0,0,0.1),_0_0_0_1px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] dark:group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),_0_0_0_1px_rgba(255,255,255,0.1)]"></div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className={`w-full md:w-1/3 p-4 flex justify-center items-center transition-opacity duration-300 ${anyHovered && !isHovered ? 'opacity-50' : ''}`}>
          <div className="w-48 h-24 overflow-hidden rounded-lg border-2 border-gray-600/10 group-hover:border-blue-800/30 dark:border-white/10 group-hover:border-2 group-hover:dark:border-white/30">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className={`w-full md:w-2/3 p-4 transition-opacity duration-300 ${anyHovered && !isHovered ? 'opacity-50' : ''}`}>
          <h3 className="text-lg font-semibold mb-2 transition-colors duration-300 text-gray-900 group-hover:text-blue-800 dark:text-white dark:group-hover:text-teal-400">
            {project.title}
          </h3>
          <p className="text-sm mb-3 line-clamp-2 text-gray-700 dark:text-gray-400">
            {project.description}
          </p>
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex flex-wrap gap-2 mb-2">
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="px-2 py-1 text-xs rounded-full bg-blue-100/50 text-blue-800 dark:bg-teal-900/30 dark:text-teal-300">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex space-x-3">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-blue-500 dark:text-teal-400 dark:hover:text-teal-300 transition-colors">
                <Github size={18} />
              </a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-blue-500 dark:text-teal-400 dark:hover:text-teal-300 transition-colors">
                <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
