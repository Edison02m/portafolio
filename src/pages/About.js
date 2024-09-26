import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaPython, FaJs, FaReact, FaHtml5, FaCss3, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiPostgresql, SiMysql, SiMicrosoftsqlserver, SiCplusplus, SiCsharp, SiC } from 'react-icons/si';
import { FiFigma } from 'react-icons/fi';
import { TbArticle } from 'react-icons/tb';

const About = () => {
  const [activeTab, setActiveTab] = useState('Lenguajes de Programación');
  const [hoveredTech, setHoveredTech] = useState(null);

  const experiences = [
    { year: '2021', description: 'Inicio de estudios en Ingeniería de Software' },
    { year: '2023', description: 'Continuación de los estudios ' },
    { year: '2024', description: 'Practicas en fundación ANEUPI' },
  ];

  const technologies = {
    'Lenguajes de Programación': [
      { name: 'Python', icon: FaPython },
      { name: 'JavaScript', icon: FaJs },
      { name: 'C#', icon: SiCsharp },
      { name: 'C++', icon: SiCplusplus },
      { name: 'C', icon: SiC },
      { name: 'SQL', icon: FaDatabase },
      { name: 'HTML5', icon: FaHtml5 },
      { name: 'CSS3', icon: FaCss3 },
    ],
    'Frameworks y Librerías': [
      { name: 'React', icon: FaReact },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
    ],
    'Bases de Datos': [
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MySQL', icon: SiMysql },
      { name: 'Microsoft SQL Server', icon: SiMicrosoftsqlserver },
    ],
    'Herramientas de Diseño': [
      { name: 'Figma', icon: FiFigma },
      { name: 'Balsamiq', icon: TbArticle },
    ],
  };

  return (
    <div className="min-h-screen flex items-center justify-center font-varela px-4 sm:px-8">
      <motion.div
        className="max-w-7xl w-full overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-8 sm:px-12">
          {/* Left column - About and Experience */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
                Sobre mí
              </h2>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-gray-600 dark:text-gray-300 leading-relaxed text-base text-justify  sm:mr-10"
              >
                <Typewriter
                  words={[
                    'Soy Edison Patricio Azogue Martínez, un estudiante ecuatoriano de 22 años cursando Ingeniería en Software. Resido entre Ambato y Riobamba, donde cultivo mi pasión por la tecnología y el desarrollo de software. Mi meta es convertirme en un desarrollador innovador que contribuya al avance tecnológico de mi país y el mundo.'
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
              transition={{ duration: 0.5 }}
              className=""
            >
              <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8">
                Experiencia
              </h3>
              <div className="space-y-6 relative mb-8">
                <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-teal-400"></div>

                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.year}
                    className="relative pl-10  group"
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 * index }}
                  >
                    <div className="absolute left-0 w-4 h-4 bg-blue-500 dark:bg-teal-400 rounded-full mt-1.5 transition-all duration-300 group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-blue-300 dark:group-hover:shadow-teal-300"></div>
                    <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200  transition-colors duration-300 group-hover:text-blue-500 dark:group-hover:text-teal-400">
                      {exp.year}
                    </h4>
                    <p className="text-md text-gray-600 dark:text-gray-300">
                      {exp.description}
                    </p>
                  </motion.div>
                ))}
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
              <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-6 text-center">
                Tecnologías
              </h2>
            </motion.div>

            <div>
              {/* Minimalist Modern Tabs */}
              <div className="flex space-x-4 mb-8 overflow-x-auto pb-2">
                {Object.keys(technologies).map((category) => (
                  <motion.button
                    key={category}
                    className={`px-3 py-2 text-sm font-medium transition-all duration-300 ease-in-out relative ${activeTab === category
                        ? 'text-blue-700 dark:text-teal-400'
                        : 'text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200'
                      }`}
                    onClick={() => setActiveTab(category)}
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                  >
                    {category}
                    {activeTab === category && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-700 dark:bg-teal-400"
                        layoutId="underline"
                      />
                    )}
                  </motion.button>
                ))}
              </div>

              {/* Technology Grid */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-4 sm:grid-cols-6 gap-6"
                >
                  {technologies[activeTab].map((tech) => (
                    <motion.div
                      key={tech.name}
                      className="flex flex-col items-center justify-center relative "
                      whileHover={{ scale: 1.1 }}
                      onHoverStart={() => setHoveredTech(tech.name)}
                      onHoverEnd={() => setHoveredTech(null)}
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}

                        transition={{ duration: 0.8 }}
                      >
                        <tech.icon className="w-10 h-10 text-gray-600 hover:text-blue-700 dark:text-gray-400 dark:hover:text-teal-600" />
                      </motion.div>
                      <AnimatePresence>
                        {hoveredTech === tech.name && (
                          <motion.span
                            className="absolute -bottom-8 bg-gray-800 dark:bg-gray-200 text-white  dark:text-gray-800 px-2 py-1 rounded-md text-xs shadow-lg"
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
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;