import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-4  text-gray-900 dark:text-gray-100">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-extrabold mb-12 text-center tracking-wide transition-all duration-300 ease-in-out transform hover:scale-105">
          Mis Proyectos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <ProjectCard
            title="Sistema de Reservas"
            description="Aplicación moderna para gestionar reservas en hoteles, restaurantes o eventos, con una interfaz fluida y amigable."
          />
          <ProjectCard
            title="Aplicación de Recetas"
            description="Busca y crea recetas con filtros avanzados por ingredientes, con una experiencia visual única."
          />
          <ProjectCard
            title="Galería de Imágenes"
            description="Galería con scroll infinito, presentando imágenes en un formato limpio y minimalista."
          />
          {/* Agrega más ProjectCards aquí si es necesario */}
        </div>
      </div>
    </section>
  );
};

export default Projects;

