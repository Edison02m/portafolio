import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Palette, Globe } from 'lucide-react';

const HomeAbout = () => {
  const skills = {
    'Lenguajes': ['JavaScript', 'Python', 'Java'],
    'Frameworks': ['React', 'Node.js', 'Django'],
    'Bases de Datos': ['MySQL', 'MongoDB', 'PostgreSQL'],
    'Herramientas': ['Git', 'Docker', 'AWS'],
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-purple-900">
      <motion.div 
        className="text-center mb-12"
        {...fadeIn}
      >
        <h1 className="text-4xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Tu Nombre
        </h1>
        <p className="text-xl lg:text-2xl text-gray-700 dark:text-gray-300">
          Desarrollador Full Stack & Diseñador UX
        </p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {Object.entries(skills).map(([category, items], index) => (
          <motion.div 
            key={category}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-105"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex items-center mb-4">
              {category === 'Lenguajes' && <Code className="text-blue-500 mr-2" />}
              {category === 'Frameworks' && <Globe className="text-green-500 mr-2" />}
              {category === 'Bases de Datos' && <Database className="text-purple-500 mr-2" />}
              {category === 'Herramientas' && <Palette className="text-yellow-500 mr-2" />}
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{category}</h3>
            </div>
            <ul className="space-y-2">
              {items.map((item) => (
                <li key={item} className="text-gray-600 dark:text-gray-400">{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      <motion.p 
        className="mt-12 text-center text-gray-700 dark:text-gray-300 max-w-2xl"
        {...fadeIn}
      >
        Apasionado por crear soluciones innovadoras y eficientes. Constantemente aprendiendo y adaptándome a las nuevas tecnologías para estar a la vanguardia del desarrollo de software.
      </motion.p>
    </div>
  );
};

export default HomeAbout;