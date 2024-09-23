import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Briefcase, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import logo from '../assets/icons/logo.webp';

const iconMap = {
  'Inicio': Home,
  'Sobre Mí': User,
  'Proyectos': Briefcase,
  'Contacto': Mail
};

const MorphingNavItem = ({ text, href, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = iconMap[text];

  return (
    <motion.a
      href={href}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex items-center justify-center w-24 h-10 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
    >
      <motion.span
        initial={{ opacity: 1, scale: 1 }}
        animate={{ opacity: isHovered ? 0 : 1, scale: isHovered ? 0.5 : 1 }}
        transition={{ duration: 0.3 }}
        className="absolute"
      >
        {text}
      </motion.span>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.5 }}
        transition={{ duration: 0.3 }}
        className="absolute"
      >
        <Icon size={24} />
      </motion.div>
    </motion.a>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Inicio', 'Sobre Mí', 'Proyectos', 'Contacto'];

  const handleScrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 50,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-100/70 dark:bg-gray-900/60 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center font-varela">
        <a href="/" className="text-2xl font-bold text-gray-800 dark:text-white">
          <img src={logo} alt="Logo" className="h-8" />
        </a>

        <nav className="hidden md:flex space-x-8">
          {navItems.map((item, index) => (
            <MorphingNavItem
              key={index}
              text={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              onClick={(e) => handleScrollToSection(e, item.toLowerCase().replace(' ', '-'))}
            />
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <ThemeToggle />

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-lg">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              onClick={(e) => {
                handleScrollToSection(e, item.toLowerCase().replace(' ', '-'));
                setIsMenuOpen(false);
              }}
              className="block py-3 px-4 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;