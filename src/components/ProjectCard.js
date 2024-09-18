import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded shadow-lg overflow-hidden transition-colors duration-300 p-4">
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{project.title}</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
      <a href={project.link} className="text-blue-500 dark:text-blue-400 hover:underline">Ver Proyecto</a>
    </div>
  );
};

export default ProjectCard;

