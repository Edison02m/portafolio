import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Home = () => {
  const contactIcons = [
    { Icon: Github, href: 'https://github.com/tuusuario' },
    { Icon: Linkedin, href: 'https://linkedin.com/in/tuusuario' },
    { Icon: Twitter, href: 'https://twitter.com/tuusuario' },
    { Icon: Mail, href: 'mailto:tu@email.com' },
  ];

  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="text-center"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-2 tracking-tight">
          <motion.span
            className="inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Tu
          </motion.span>{' '}
          <motion.span
            className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Nombre
          </motion.span>
        </h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          Desarrollador Full Stack & Diseñador UX
        </motion.p>
      </motion.div>

      <motion.div
        className="flex space-x-6 mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.8 }}
      >
        {contactIcons.map(({ Icon, href }, index) => (
          <motion.a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 + index * 0.1, duration: 0.5 }}
          >
            <Icon size={24} />
          </motion.a>
        ))}
      </motion.div>

      <motion.div
        className="mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M20 5V35M20 35L35 20M20 35L5 20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1.8, duration: 1.5, ease: "easeInOut" }}
          />
        </svg>
      </motion.div>
    </motion.section>
  );
};

export default Home;