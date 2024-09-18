import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Coffee } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Desarrollo', Icon: Code, color: 'text-blue-500' },
    { name: 'Diseño UX', Icon: Palette, color: 'text-purple-500' },
    { name: 'Café', Icon: Coffee, color: 'text-yellow-600' },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <motion.div
        className="max-w-4xl mx-auto p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2 
          className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Sobre mí
        </motion.h2>
        
        <motion.div 
          className="space-y-8 text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <p className="text-xl text-gray-700 dark:text-gray-300">
            Soy un desarrollador full stack y diseñador UX apasionado por crear experiencias digitales innovadoras y funcionales.
          </p>
          
          <div className="flex justify-center space-x-12">
            {skills.map(({ name, Icon, color }, index) => (
              <motion.div 
                key={name} 
                className="flex flex-col items-center"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.8 }}
              >
                <div className={`p-4 rounded-full bg-white dark:bg-gray-700 shadow-md ${color}`}>
                  <Icon size={32} />
                </div>
                <span className="mt-3 text-lg font-medium text-gray-700 dark:text-gray-300">{name}</span>
              </motion.div>
            ))}
          </div>
          
          <p className="text-xl text-gray-700 dark:text-gray-300">
            Mi enfoque combina la creatividad del diseño con la precisión de la ingeniería, permitiéndome desarrollar soluciones web que no solo funcionan bien, sino que también ofrecen una experiencia de usuario excepcional.
          </p>

          <p className="text-xl text-gray-700 dark:text-gray-300">
            Estoy constantemente aprendiendo y explorando nuevas tecnologías para mantenerme al día con las últimas tendencias en desarrollo web y diseño de interfaces.
          </p>
        </motion.div>
        
        <motion.div
          className="mt-12 text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <a
            href="#projects"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Ver mis proyectos
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;