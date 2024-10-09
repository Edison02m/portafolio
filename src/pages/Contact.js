import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaUserAlt, FaPaperPlane } from 'react-icons/fa';

const ContactSection = () => {
  const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' });
  const [error, setError] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formcarry.com/s/z7ll1aZc0Ya", {
        method: 'POST',
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (data.code === 200) {
        setFormData({ nombre: '', email: '', mensaje: '' });
        setShowMessage(true);
        setTimeout(() => setShowMessage(false), 5000);
      } else {
        setError(data.message || "Error al enviar el formulario.");
      }
    } catch (error) {
      setError(error.message || "Error al enviar el formulario.");
    }
  };

  return (
    <section className="flex flex-col md:flex-row items-center justify-center  px-4 transition-colors duration-300 font-varel">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md mx-auto mb-8 md:mb-0"
      >
        <h2 className="text-3xl font-bold text-black dark:text-white mb-6 text-center font-varela">Contáctame</h2>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-8 font-varela ">
          ¿Tienes alguna pregunta o propuesta? ¡No dudes en escribirme!
        </p>
        <AnimatePresence>
          {showMessage && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-green-100 dark:bg-green-900 p-4 rounded-lg shadow-lg mb-6"
            >
              <p className="text-green-800 dark:text-green-200 text-center font-medium font-varela ">
                ¡Gracias por tu mensaje! Pronto recibirás una respuesta ❤️
              </p>
            </motion.div>
          )}
        </AnimatePresence>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <FaUserAlt className="absolute top-3 left-3 text-blue-700 dark:text-teal-400 " />
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className=" font-varela w-full bg-white dark:bg-gray-800 text-gray-800 dark:text-white border-2 border-blue-700 dark:border-teal-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-teal-500 pl-10 py-2 transition-colors duration-300"
              placeholder="Tu nombre"
              required
            />
          </div>
          <div className="relative">
            <FaEnvelope className="absolute top-3 left-3 text-blue-700 dark:text-teal-400" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="font-varela w-full bg-white dark:bg-gray-800 text-gray-800 dark:text-white border-2 border-blue-700 dark:border-teal-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-teal-500 pl-10 py-2 transition-colors duration-300"
              placeholder="tucorreo@dominio.com"
              required
            />
          </div>
          <div>
            <textarea
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              className="font-varela w-full bg-white dark:bg-gray-800 text-gray-800 dark:text-white border-2 border-blue-700 dark:border-teal-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-teal-500 p-3 transition-colors duration-300"
              rows="4"
              placeholder="Tu mensaje"
              required
            ></textarea>
          </div>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="font-varela bg-blue-700 hover:bg-blue-600 dark:bg-teal-600 dark:hover:bg-teal-500 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-colors duration-300 flex items-center"
            >
              <FaPaperPlane className="mr-2" />
              <span>Enviar mensaje</span>
            </motion.button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactSection;