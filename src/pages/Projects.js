import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import raze from '../assets/icons/raze.webp';
import gekko from '../assets/icons/gekko.webp';
import yoru from '../assets/icons/yoru.webp';
import ia_colorizer_iamge from '../assets/images/colorizacion-diagrama.svg';

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: "ColorizeAI: Colorización de Imágenes",
      description: "Transforma imágenes en blanco y negro a color usando redes neuronales convolucionales (CNN).",
      tags: ["Python"],
      image: ia_colorizer_iamge,
      github: "https://github.com/Edison02m/ia-colorizer"
    },
    {
      title: "Aplicación de Recetas",
      description: "Búsqueda avanzada de recetas con experiencia visual única.",
      tags: ["definir", "definir", "definir"],
      image: raze,
      github: "https://github.com/yourusername/recetas",
      demo: "https://recetas-app.com"
    },
    {
      title: "Galería de Imágenes",
      description: "Galería minimalista con scroll infinito y carga optimizada.",
      tags: ["definir", "definir", "definir"],
      image: gekko,
      github: "https://github.com/yourusername/galeria",
      demo: "https://galeria-imagenes.com"
    },
    {
      title: "API",
      description: "End point con diferentes estados",
      tags: ["definir", "definir", "definir"],
      image: yoru,
      github: "https://github.com/yourusername/galeria",
      demo: "https://galeria-imagenes.com"
    },
  ];

  return (
    <section id="projects" className="py-6 -pt-8 px-4 font-varela ">
      <div className="container mx-auto max-w-6xl">
        <motion.h2 
          className="text-3xl font-bold mb-10 text-center text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Proyectos
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              index={index}
              isHovered={hoveredIndex === index}
              setHoveredIndex={setHoveredIndex}
              anyHovered={hoveredIndex !== null}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
