import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'Sistema de Reservas',
      description: 'Gestión de reservas para hoteles y restaurantes con control de disponibilidad.',
      link: '#'
    },
    {
      title: 'API de Recomendación',
      description: 'Motor de recomendaciones usando machine learning para productos y contenido.',
      link: '#'
    },
    {
      title: 'Aplicación de Recetas',
      description: 'Buscador y creador de recetas con filtros avanzados.',
      link: '#'
    },
    {
      title: 'Galería de Imágenes',
      description: 'Galería con scroll infinito para visualizar imágenes.',
      link: '#'
    }
  ];

  return (
    <section id="projects" className="p-6 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">Mis Proyectos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
