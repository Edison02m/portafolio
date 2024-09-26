import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import ia_colorizer_iamge from '../assets/images/colorizacion-diagrama.svg';
import construccion from '../assets/icons/contruccion.gif';

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
      title: "Coming soon",
      description: "Este proyecto esta en desarrollo.",
      tags: ["definir", "definir", "definir"],
      image: construccion,
      github: "https://github.com/yourusername/recetas",
      demo: "https://recetas-app.com"
    },
    {
      title: "Coming soon",
      description: "Este proyecto esta en desarrollo",
      tags: ["definir", "definir", "definir"],
      image: construccion,
      github: "https://github.com/yourusername/galeria",
      demo: "https://galeria-imagenes.com"
    },
    {
      title: "Coming soon",
      description: "Este proyecto esta en desarrollo",
      tags: ["definir", "definir", "definir"],
      image: construccion,
      github: "https://github.com/yourusername/galeria",
      demo: "https://galeria-imagenes.com"
    },
  ];

  return (
    <section id="projects" className=" px-4 font-varela ">
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
