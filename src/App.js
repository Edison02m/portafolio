import React, { useEffect, useState } from 'react';
import { ThemeProvider } from './components/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home'; // Componente que tiene HomeAbout dentro
import About from './pages/About'; // Otros componentes
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
          <main >
          <section id="inicio" className="min-h-screen pt-8 sm:pt-0">
  <Home />
</section>
          </main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
