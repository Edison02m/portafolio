import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaReact, FaVuejs, FaNodeJs, FaPython, FaDocker, FaAws } from 'react-icons/fa';
import { SiMongodb, SiPostgresql } from 'react-icons/si';

const About = () => {
  const [hoveredTech, setHoveredTech] = useState(null);

  const experiences = [
    { year: '2022', description: 'Inicio de estudios en Ingeniería de Software' },
    { year: '2023', description: 'Primer proyecto freelance como desarrollador web' },
    { year: '2024', description: 'Práctica profesional en startup tecnológica' },
  ];

  const technologies = {
    'Frontend': [
      { name: 'React', icon: FaReact },
      { name: 'Vue.js', icon: FaVuejs },
    ],
    'Backend': [
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'Python', icon: FaPython },
    ],
    'Bases de Datos': [
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'PostgreSQL', icon: SiPostgresql },
    ],
    'DevOps': [
      { name: 'Docker', icon: FaDocker },
      { name: 'AWS', icon: FaAws },
    ],
  };

  return (
    <div className="min-h-screen flex items-center justify-center font-varela p-4 sm:p-8">
      <motion.div 
        className="max-w-7xl w-full rounded-2xl shadow-xl overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 sm:p-12">
          {/* Left column - About and Experience */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 border-b-2 border-blue-500/80 dark:border-teal-400/50 inline-block pb-2 mb-6">
                Sobre mí
              </h2>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-gray-600 dark:text-gray-300 leading-relaxed text-base"
              >
                <Typewriter
                  words={[
                    'Desarrollador Full Stack apasionado por crear experiencias digitales únicas que fusionan funcionalidad y estética. Siempre en busca de innovar y elevar la calidad en cada proyecto de desarrollo web y diseño de interfaces.'
                  ]}
                  cursor
                  cursorStyle="|"
                  typeSpeed={40}
                />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 border-b-2 border-blue-500/80 dark:border-teal-400/50 inline-block pb-2 mb-6">
                Experiencia
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={exp.year}
                      className="relative text-center"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 * index }}
                    >
                      <h4 className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-2">{exp.year}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{exp.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right column - Technologies */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 border-b-2 border-blue-500/80 dark:border-teal-400/50 inline-block pb-2 mb-6">
                Tecnologías
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Primera columna: Frontend y Backend */}
              <div>
                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">Frontend</h3>
                <div className="grid grid-cols-2 gap-4">
                  {technologies['Frontend'].map((tech) => (
                    <motion.div
                      key={tech.name}
                      className="flex flex-col items-center justify-center relative"
                      whileHover={{ scale: 1.1 }}
                      onHoverStart={() => setHoveredTech(tech.name)}
                      onHoverEnd={() => setHoveredTech(null)}
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.8 }}
                      >
                        <tech.icon className="w-8 h-8 text-blue-500/80 dark:text-teal-600" />
                      </motion.div>
                      <AnimatePresence>
                        {hoveredTech === tech.name && (
                          <motion.span
                            className="absolute -bottom-8 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 px-2 py-1 rounded-full text-xs shadow-lg"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                          >
                            {tech.name}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>

                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mt-8 mb-4">Backend</h3>
                <div className="grid grid-cols-2 gap-4">
                  {technologies['Backend'].map((tech) => (
                    <motion.div
                      key={tech.name}
                      className="flex flex-col items-center justify-center relative"
                      whileHover={{ scale: 1.1 }}
                      onHoverStart={() => setHoveredTech(tech.name)}
                      onHoverEnd={() => setHoveredTech(null)}
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.8 }}
                      >
                        <tech.icon className="w-8 h-8 text-blue-500/80 dark:text-teal-600" />
                      </motion.div>
                      <AnimatePresence>
                        {hoveredTech === tech.name && (
                          <motion.span
                            className="absolute -bottom-8 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 px-2 py-1 rounded-full text-xs shadow-lg"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                          >
                            {tech.name}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Segunda columna: Bases de Datos y DevOps */}
              <div>
                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">Bases de Datos</h3>
                <div className="grid grid-cols-2 gap-4">
                  {technologies['Bases de Datos'].map((tech) => (
                    <motion.div
                      key={tech.name}
                      className="flex flex-col items-center justify-center relative"
                      whileHover={{ scale: 1.1 }}
                      onHoverStart={() => setHoveredTech(tech.name)}
                      onHoverEnd={() => setHoveredTech(null)}
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.8 }}
                      >
                        <tech.icon className="w-8 h-8 text-blue-500/80 dark:text-teal-600" />
                      </motion.div>
                      <AnimatePresence>
                        {hoveredTech === tech.name && (
                          <motion.span
                            className="absolute -bottom-8 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 px-2 py-1 rounded-full text-xs shadow-lg"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                          >
                            {tech.name}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>

                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mt-8 mb-4">DevOps</h3>
                <div className="grid grid-cols-2 gap-4">
                  {technologies['DevOps'].map((tech) => (
                    <motion.div
                      key={tech.name}
                      className="flex flex-col items-center justify-center relative"
                      whileHover={{ scale: 1.1 }}
                      onHoverStart={() => setHoveredTech(tech.name)}
                      onHoverEnd={() => setHoveredTech(null)}
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.8 }}
                      >
                        <tech.icon className="w-8 h-8 text-blue-500/80 dark:text-teal-600" />
                      </motion.div>
                      <AnimatePresence>
                        {hoveredTech === tech.name && (
                          <motion.span
                            className="absolute -bottom-8 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 px-2 py-1 rounded-full text-xs shadow-lg"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                          >
                            {tech.name}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
