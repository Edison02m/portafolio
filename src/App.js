import React from 'react';
import { ThemeProvider } from './components/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './styles/tailwind.css';

function App() {
  return (
    <ThemeProvider>
      <div className="App flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-purple-900">
        <Header />
        <main className="flex-grow">
          <section id="inicio" className="min-h-screen pt-16"> {/* Añadimos pt-16 aquí */}
            <Home />
          </section>
          <section id="proyectos" className="py-16 lg:py-24">
            <Projects />
          </section>
          <section id="contacto" className="py-16 lg:py-24">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;