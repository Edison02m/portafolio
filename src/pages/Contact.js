import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold mb-6">Contáctame</h2>
        <form action="https://formspree.io/f/{your-form-id}" method="POST" className="space-y-4">
          <label className="block">
            <span className="text-gray-700 dark:text-gray-300">Nombre</span>
            <input 
              type="text" 
              name="name" 
              className="mt-1 block w-full px-3 py-2 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400 focus:ring focus:ring-blue-500 dark:focus:ring-blue-400 focus:ring-opacity-50" 
              required 
            />
          </label>
          <label className="block">
            <span className="text-gray-700 dark:text-gray-300">Correo Electrónico</span>
            <input 
              type="email" 
              name="email" 
              className="mt-1 block w-full px-3 py-2 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400 focus:ring focus:ring-blue-500 dark:focus:ring-blue-400 focus:ring-opacity-50" 
              required 
            />
          </label>
          <label className="block">
            <span className="text-gray-700 dark:text-gray-300">Mensaje</span>
            <textarea 
              name="message" 
              className="mt-1 block w-full px-3 py-2 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400 focus:ring focus:ring-blue-500 dark:focus:ring-blue-400 focus:ring-opacity-50" 
              rows="4" 
              required 
            ></textarea>
          </label>
          <button 
            type="submit" 
            className="px-6 py-3 bg-blue-500 dark:bg-blue-600 text-white rounded-lg hover:bg-blue-400 dark:hover:bg-blue-500 transition-colors"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
