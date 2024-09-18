import React from 'react';

const Contact = () => {
  return (
    <section className="p-6 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
      <h2 className="text-3xl font-bold mb-4">Contacto</h2>
      <form className="flex flex-col max-w-lg mx-auto">
        <label htmlFor="name" className="mb-2 font-semibold">Nombre</label>
        <input type="text" id="name" name="name" className="p-2 border border-gray-300 dark:border-gray-600 rounded mb-4" required />

        <label htmlFor="email" className="mb-2 font-semibold">Correo Electrónico</label>
        <input type="email" id="email" name="email" className="p-2 border border-gray-300 dark:border-gray-600 rounded mb-4" required />

        <label htmlFor="message" className="mb-2 font-semibold">Mensaje</label>
        <textarea id="message" name="message" rows="4" className="p-2 border border-gray-300 dark:border-gray-600 rounded mb-4" required></textarea>

        <button type="submit" className="bg-blue-500 text-white dark:bg-blue-600 dark:text-gray-100 py-2 px-4 rounded hover:bg-blue-600">Enviar</button>
      </form>
    </section>
  );
};

export default Contact;
