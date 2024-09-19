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
    <motion.div
      className="min-h-screen bg-white dark:bg-gray-900 flex flex-col justify-center items-center p-4 lg:p-8 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="max-w-2xl text-center z-10 mt-16 lg:mt-0"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <motion.h2 
          className="text-3xl lg:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Sobre mí
        </motion.h2>
        
        <motion.p
          className="text-base lg:text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Soy un desarrollador full stack y diseñador UX apasionado por crear experiencias digitales innovadoras y funcionales. Mi enfoque combina la creatividad del diseño con la precisión de la ingeniería, permitiéndome desarrollar soluciones web que no solo funcionan bien, sino que también ofrecen una experiencia de usuario excepcional.
        </motion.p>

        <motion.div
          className="flex justify-center space-x-6 lg:space-x-8 mb-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          {skills.map(({ name, Icon, color }, index) => (
            <motion.div 
              key={name} 
              className="flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className={`p-3 rounded-full bg-gray-100 dark:bg-gray-800 ${color}`}
                whileHover={{ y: -5 }}
              >
                <Icon size={24} />
              </motion.div>
              <span className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">{name}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className="text-base lg:text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Estoy constantemente aprendiendo y explorando nuevas tecnologías para mantenerme al día con las últimas tendencias en desarrollo web y diseño de interfaces.
        </motion.p>

        <motion.a
          href="#projects"
          className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          Explora mis proyectos
        </motion.a>
      </motion.div>

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
    </motion.div>
  );
};

export default About;