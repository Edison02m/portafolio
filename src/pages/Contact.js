import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaUserAlt, FaPaperPlane } from 'react-icons/fa';
import Rubick from '../components/RubikCube'

const ContactSection = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');
  const [, setEnviado] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://formcarry.com/s/z7ll1aZc0Ya", {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name: nombre, email: email, message: mensaje })
    })
      .then(response => response.json())
      .then(response => {
        if (response.code === 200) {
          setEnviado(true);
          setNombre('');
          setEmail('');
          setMensaje('');
          setShowMessage(true);
        } else {
          setError(response.message || "Error al enviar el formulario.");
        }
      })
      .catch(error => {
        setError(error.message || "Error al enviar el formulario.");
      });
  };

  return (
    <section className="flex pb-24 sm:pb-0 ">
      <div className="sm:max-w-md sm:mx-auto w-1/2 w-full mx-6 p-4 rounded-lg border-2 border-gray-600/10 hover:border-blue-800/30 dark:border-white/10 hover:border-2 hover:dark:border-white/30" >
        <h2 className="text-black dark:text-white text-center font-varela text-3xl mb-6">Contáctame</h2>

        {showMessage && (
          <div className="bg-gray-700/10 p-6 rounded-lg font-mono shadow-lg border dark:border-teal-600/10 border-blue-700 mb-6">
            <p className="dark:text-teal-400 text-blue-800/70 font-varela text-center">¡Gracias por tu mensaje! pronto recibiras una respuesta ❤️</p>
          </div>
        )}

        <motion.form
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="relative">
            <FaUserAlt className="absolute top-1/2 transform -translate-y-1/2 left-3 text-blue-700 dark:text-teal-400" />
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="w-full bg-gray-800/0 font-varela dark:text-white/80 text-gray-600 border-0 border-b-2 dark:border-teal-600 border-blue-700 focus:outline-none focus:ring-0 dark:focus:border-white focus:border-blue-700/50 transition-colors duration-300 pl-10 py-2"
              placeholder="Escribe tu nombre"
              required
            />
          </div>

          <div className="relative">
            <FaEnvelope className="absolute top-1/2 transform -translate-y-1/2 left-3 text-blue-700 dark:text-teal-400" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-800/0 font-varela dark:text-white/80 text-gray-600 border-0 border-b-2 dark:border-teal-600 border-blue-700 focus:outline-none focus:ring-0 dark:focus:border-white focus:border-blue-700/50 transition-colors duration-300 pl-10 py-2"
              placeholder="tucorreo@dominio.com"
              required
            />
          </div>

          <div>
            <textarea
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              className="w-full bg-gray-800/0 font-varela dark:text-white/80 text-gray-600 border-0 border-b-2 border-blue-700 dark:border-teal-600 focus:outline-none focus:ring-0 dark:focus:border-white focus:border-blue-700/50   transition-colors duration-300 p-2"
              rows="4"
              placeholder="Escribe tu mensaje"
              required
            ></textarea>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="dark:bg-teal-600 bg-blue-700 hover:bg-blue-500 dark:hover:bg-teal-500 font-varela text-white/80 px-6 py-2 rounded-full shadow-md hover:text-white"
            >
              <div className="flex items-center justify-center">
                <FaPaperPlane className="mr-2" />
                <span>Enviar</span>
              </div>
            </motion.button>
          </div>
        </motion.form>
      </div>
      <div className='hidden md:flex items-center justify-center w-1/2'>
      <div className="w-48 h-48">
        <Rubick />
      </div>
</div>

    </section>
  );
};

export default ContactSection;