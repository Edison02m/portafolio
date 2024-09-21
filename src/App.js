import React, { useEffect, useState } from 'react';
import { ThemeProvider } from './components/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeAbout from './pages/Home'; // Asegúrate de que esté bien importado
import About from './pages/About'; // Otros componentes como la sección About
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './styles/tailwind.css';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="App flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 relative">
        {/* Fondo interactivo global */}
        <div
          className="fixed inset-0 z-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.2), rgba(0,0 , 0, 0.1))`,
            transition: 'background 0.1s ease',
          }}
        ></div>

        {/* Contenido principal (encima del fondo interactivo) */}
        <div className="relative z-10">
          <Header />

          {/* Sección Home que incluye HomeAbout, centrada en la pantalla */}
          <main className=""> {/* Ajusta el padding según la altura de tu header */}
            <section id="inicio" className="flex flex-col justify-center items-center min-h-screen -mb-12">
              <HomeAbout />
            </section>

            {/* Sección About */}
            <section id="about" className="min-h-screen ">
              <About />
            </section>
          </main>


          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
