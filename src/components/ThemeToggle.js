import React from 'react';
import { useTheme } from './ThemeContext';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <motion.button
      onClick={toggleDarkMode}
      className="relative flex items-center justify-center w-20 h-10 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600"
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
      aria-label="Toggle color theme"
    >
      <motion.div
        className="absolute inset-1 flex items-center"
        animate={{ x: isDarkMode ? 38 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <motion.div 
          className="flex items-center justify-center w-8 h-8 bg-white dark:bg-gray-800 rounded-full shadow-md"
          animate={{ rotate: isDarkMode ? 180 : 0 }}
        >
          {isDarkMode ? (
            <Moon size={16} className="text-blue-400" />
          ) : (
            <Sun size={16} className="text-yellow-500" />
          )}
        </motion.div>
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;