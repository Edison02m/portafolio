import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Twitter, Github, Mail } from 'lucide-react';
import imagen from '../assets/images/imagen.jpg';

const HomeAbout = () => {
  const [greeting, setGreeting] = useState('');
  const [showName, setShowName] = useState(false);

  const socialLinks = [
    { Icon: Linkedin, href: "https://linkedin.com/in/tu-perfil", label: "LinkedIn" },
    { Icon: Twitter, href: "https://twitter.com/tu-perfil", label: "Twitter" },
    { Icon: Github, href: "https://github.com/tu-perfil", label: "GitHub" },
    { Icon: Mail, href: "mailto:tu-email@ejemplo.com", label: "Email" },
  ];

  useEffect(() => {
    const greetings = ["¡Hola!", "Hello!", "Bonjour!", "Ciao!", "こんにちは!"];
    let index = 0;
    const intervalId = setInterval(() => {
      setGreeting(greetings[index]);
      index = (index + 1) % greetings.length;
      if (index === 0) {
        clearInterval(intervalId);
        setTimeout(() => setShowName(true), 100);
      }
    }, 300);
    return () => clearInterval(intervalId);
  }, []);

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 1 + (i * 0.2),
        type: 'spring',
        stiffness: 120,
        damping: 10
      }
    }),
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-10 font-varela">

      <motion.div 
        className="flex flex-col md:flex-row items-center md:items-start justify-center max-w-4xl w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Photo */}
        <motion.div
          className="w-48 h-48 mb-6 md:mb-0 md:mr-8 relative flex-shrink-0"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <div className=" p-1 bg-black dark:bg-white rounded-full shadow-xl">
            <img
              src={imagen}
              alt="Edison Azogue"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="absolute inset-0 bg-blue-500 mix-blend-overlay opacity-20 rounded-full" />
        </motion.div>

        {/* Content */}
        <div className="flex flex-col items-center md:items-center text-center">
          <AnimatePresence mode="wait">
  {!showName ? (
    <motion.h2
      key="greeting"
      className="text-4xl font-varela font-bold text-gray-900 dark:text-gray-100 mb-2"
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 60, duration: 0.5 }}
    >
      {greeting}
    </motion.h2>
  ) : (
    <motion.h1
      key="name"
      className="text-4xl font-varela font-bold text-gray-900 dark:text-gray-100 mb-2"
      initial={{ y: 20, opacity: 0 }} // Comienza desde abajo con opacidad 0
      animate={{ y: 0, opacity: 1 }} // Se mueve a su posición original y se vuelve opaco
      transition={{ type: 'spring', stiffness: 120, duration: 1 }} // Ajusta la duración para suavidad
    >
      Edison Azogue
    </motion.h1>
  )}
</AnimatePresence>


          <motion.p 
            className="text-xl font-varela text-blue-800/80 dark:text-teal-400/60 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Desarrollador Full Stack
          </motion.p>

          <motion.div
            className="max-w-lg mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-varela px-6 sm:px-0">
              Apasionado por crear experiencias digitales únicas que fusionan 
              funcionalidad y estética. Siempre en busca de innovar y elevar 
              la calidad en cada proyecto de desarrollo web y diseño de interfaces.
            </p>
          </motion.div>

          <motion.div 
            className="flex justify-center space-x-4"
          >
            {socialLinks.map(({ Icon, href, label }, index) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-300
                           bg-gray-800 dark:bg-white hover:bg-gray-700 dark:hover:bg-gray-100"
                variants={buttonVariants}
                custom={index}
                initial="hidden"
                animate="visible"
                whileHover="hover"
              >
                <Icon size={20} className="text-white dark:text-gray-800" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default HomeAbout;
