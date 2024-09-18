import React from 'react';

const About = () => {
  return (
    <section className="p-6 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
      <h2 className="text-3xl font-bold mb-4">Sobre Mí</h2>
      <p className="text-lg mb-4">Soy un ingeniero en software con [X] años de experiencia en el desarrollo de aplicaciones web y móviles. Me especializo en crear soluciones eficientes y elegantes utilizando tecnologías modernas.</p>
      <h3 className="text-2xl font-semibold mb-2">Habilidades</h3>
      <ul className="list-disc ml-6 mb-4">
        <li>React, Tailwind CSS</li>
        <li>Django (Python), PostgreSQL</li>
        <li>Machine Learning, API Development</li>
      </ul>
      <h3 className="text-2xl font-semibold mb-2">Experiencia</h3>
      <p>He trabajado en proyectos que van desde la gestión de reservas hasta la creación de sistemas de recomendación. Mi enfoque es siempre en la calidad y en satisfacer las necesidades del cliente.</p>
    </section>
  );
};

export default About;
