import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaUserAlt, FaPaperPlane } from 'react-icons/fa';

const ContactSection = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');
  const [enviado, setEnviado] = useState(false);
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
    <section className="bg-gray-800/70 py-12">
      <div className="max-w-md mx-auto">
        <h2 className="text-teal-400 font-varela text-3xl mb-6">Contáctame</h2>

        {showMessage && (
          <div className="bg-gray-700/50 p-6 rounded-lg font-mono shadow-lg border border-teal-600/10 mb-6">
            <p className="text-teal-400 font-varela text-center">¡Gracias por tu mensaje! Desarrollado con <span className="text-yellow-500">❤</span> por Edison Azogue.</p>
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
            <FaUserAlt className="absolute top-1/2 transform -translate-y-1/2 left-3 text-teal-400" />
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="w-full bg-gray-800/50 font-varela text-teal-500 border-0 border-b-2 border-teal-600 focus:outline-none focus:ring-0 focus:border-teal-400 transition-colors duration-300 pl-10 py-2"
              placeholder="Escribe tu nombre"
              required
            />
          </div>

          <div className="relative">
            <FaEnvelope className="absolute top-1/2 transform -translate-y-1/2 left-3 text-teal-400" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-800/50 font-varela text-teal-500 border-0 border-b-2 border-teal-600 focus:outline-none focus:ring-0 focus:border-teal-400 transition-colors duration-300 pl-10 py-2"
              placeholder="tucorreo@dominio.com"
              required
            />
          </div>

          <div>
            <textarea
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              className="w-full bg-gray-800/50 font-varela text-teal-500 border-0 border-b-2 border-teal-600 focus:outline-none focus:ring-0 focus:border-teal-400 transition-colors duration-300 p-2"
              rows="4"
              placeholder="Escribe tu mensaje"
              required
            ></textarea>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-teal-600 font-varela text-gray-900 px-6 py-2 rounded-full shadow-md hover:bg-teal-500 hover:text-white transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-teal-400"
            >
              <div className="flex items-center justify-center">
                <FaPaperPlane className="mr-2" />
                <span>Enviar</span>
              </div>
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;