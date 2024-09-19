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
      <div className="App flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900  dark:from-gray-900 dark:to-purple-900">
        <Header />
        <main className="flex-grow">
          <section id="inicio" className="min-h-screen pt-16"> {/* Añadimos pt-16 aquí */}
            <Home />
          </section>
          

        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;