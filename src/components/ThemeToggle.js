import React from 'react';
import { useTheme } from './ThemeContext';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
      aria-label="Toggle dark mode"
    >
      {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default ThemeToggle;