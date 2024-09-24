import React from 'react';
import trabajando from '../assets/icons/contruccion.gif'
const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4  text-gray-900 dark:text-gray-100 relative flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-4">aqui iria el contactame</h2>
      <img 
        src= {trabajando}
        alt="Persona trabajando" 
        className="w-64 h-64 mb-4" 
      />
      <p className="text-lg mb-6"></p>
    </section>
  );
};

export default Contact;