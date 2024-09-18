import React from 'react';

const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-center p-4">
      <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">Hola, soy [Tu Nombre]</h1>
      <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">Desarrollador de Software con pasión por crear soluciones elegantes y eficientes.</p>
      <a href="#projects" className="bg-blue-500 text-white dark:bg-blue-600 dark:text-gray-100 py-2 px-4 rounded hover:bg-blue-600">Ver Proyectos</a>
    </section>
  );
};

export default Home;
