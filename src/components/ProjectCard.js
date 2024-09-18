import React from 'react';
import { ArrowRight } from 'lucide-react';

const ProjectCard = ({ title, description, tags = [] }) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-300">
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span key={index} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <button className="flex items-center text-blue-500 hover:text-blue-600 transition-colors duration-300">
        Ver más
        <ArrowRight size={16} className="ml-1" />
      </button>
    </div>
  </div>
);

export default ProjectCard;