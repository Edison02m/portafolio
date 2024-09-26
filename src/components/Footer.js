import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100/0 dark:bg-gray-900/0 text-gray-800 dark:text-gray-400 py-4 text-center">
      <p>&copy; {new Date().getFullYear()} Edison Azogue. Todos los derechos reservados.</p>
      <div className="mt-2 flex justify-center space-x-4">
        <a href="https://twitter.com/tu_usuario" className="hover:text-blue-400 dark:hover:text-blue-300 transition-colors">Twitter</a>
        <a href="https://linkedin.com/in/tu_usuario" className="hover:text-blue-400 dark:hover:text-blue-300 transition-colors">LinkedIn</a>
        <a href="mailto:tu_email@example.com" className="hover:text-blue-400 dark:hover:text-blue-300 transition-colors">Correo</a>
      </div>
    </footer>
  );
};

export default Footer;
