import React from 'react';

const Footer = () => {
  return (
    <footer className="p-4 bg-gray-100 dark:bg-gray-900 text-center text-gray-900 dark:text-gray-100">
      <p>&copy; {new Date().getFullYear()} Tu Nombre. Todos los derechos reservados.</p>
      <div className="mt-2">
        <a href="https://twitter.com/tu_usuario" className="text-blue-500 dark:text-blue-400 hover:underline mx-2">Twitter</a>
        <a href="https://linkedin.com/in/tu_usuario" className="text-blue-500 dark:text-blue-400 hover:underline mx-2">LinkedIn</a>
        <a href="mailto:tu_email@example.com" className="text-blue-500 dark:text-blue-400 hover:underline mx-2">Correo</a>
      </div>
    </footer>
  );
};

export default Footer;
