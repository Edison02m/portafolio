import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Palette, Globe } from 'lucide-react';
import imagen from '../assets/images/imagen.jpg';

const HomeAbout = () => {
  const skills = [
    { category: 'Lenguajes', icon: Code, color: 'blue', items: ['JavaScript', 'Python', 'Java'] },
    { category: 'Frameworks', icon: Globe, color: 'green', items: ['React', 'Node.js', 'Django'] },
    { category: 'Bases de Datos', icon: Database, color: 'purple', items: ['MySQL', 'MongoDB', 'PostgreSQL'] },
    { category: 'Herramientas', icon: Palette, color: 'yellow', items: ['Git', 'Docker', 'AWS'] },
  ];

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center p-4 bg-gray-50 dark:bg-gray-900 text-gray-200 dark:text-gray-400 overflow-hidden">
      {/* Fondo animado */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1.5 }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-50"
            style={{
              width: Math.random() * 100 + 50 + 'px',
              height: Math.random() * 100 + 50 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
            }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </motion.div>

      {/* Contenido principal */}
      <motion.div 
        className="relative z-10 flex flex-col md:flex-row items-center mb-12 space-y-8 md:space-y-0 md:space-x-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="relative w-48 h-48 rounded-full overflow-hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img
            src={imagen}
            alt="Edison Azogue"
            className="w-full h-full object-cover"
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0"
            whileHover={{ opacity: 0.3 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        <div className="text-center md:text-left">
          <motion.h1
            className="text-4xl lg:text-5xl font-bold pb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Edison Azogue
          </motion.h1>
          <motion.p
            className="text-xl lg:text-2xl text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Desarrollador Full Stack & Diseñador UX
          </motion.p>
        </div>
      </motion.div>

      <motion.div 
        className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        {skills.map(({ category, icon: Icon, color, items }, index) => (
          <motion.div 
            key={category}
            className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex flex-col items-center justify-center text-center`}
            whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Icon className={`text-${color}-500 mb-2`} size={32} />
            <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">{category}</h3>
            <p className="text-xs text-gray-600 dark:text-gray-400">{items.join(', ')}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.p 
        className="relative z-10 mt-12 text-center text-gray-700 dark:text-gray-300 max-w-2xl text-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        Creando soluciones innovadoras y eficientes en la vanguardia del desarrollo de software.
      </motion.p>
    </div>
  );
};

export default HomeAbout;
