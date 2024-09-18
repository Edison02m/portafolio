import React from 'react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <header className="p-4 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <nav className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Mi Portafolio</h1>
        <ThemeToggle />
      </nav>
    </header>
  );
};

export default Header;
