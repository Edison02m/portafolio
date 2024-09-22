import React, { useEffect, useState } from 'react';
import { ThemeProvider, useTheme } from './components/ThemeContext';
import { InView } from 'react-intersection-observer';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeAbout from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './styles/tailwind.css';

function InteractiveBackground({ mousePosition }) {
  const { isDarkMode } = useTheme();

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, ${
          isDarkMode
            ? 'rgba(59, 130, 246, 0.2)'
            : 'rgba(90, 130, 160, 0.3)'
        }, rgba(0, 0, 0, 0.1))`,
        transition: 'background 0.1s ease',
      }}
    ></div>
  );
}

const BlurSection = ({ children, id }) => {
  const [isInView, setIsInView] = useState(false);

  return (
    <InView onChange={(inView) => setIsInView(inView)} threshold={0.2}>
      {({ ref }) => (
        <section
          ref={ref}
          id={id}
          className={`min-h-screen transition-all duration-500 ${
            isInView ? 'blur-none' : 'blur-sm'
          }`}
        >
          {children}
        </section>
      )}
    </InView>
  );
};

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
    <div className="App flex flex-col min-h-screen bg-gray-50 dark:bg-gray-950 relative">
      <InteractiveBackground mousePosition={mousePosition} />

      <div className="relative z-10">
        <Header />

        <main className="">
          <BlurSection id="inicio">
            <div className="flex flex-col justify-center items-center min-h-screen -mb-12">
              <HomeAbout />
            </div>
          </BlurSection>

          <BlurSection id="sobre-mí">
            <About />
          </BlurSection>

          <BlurSection id="proyectos">
            <Projects />
          </BlurSection>

          <BlurSection id="contacto">
            <Contact />
          </BlurSection>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default function RootApp() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}