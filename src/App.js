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
      <div className="App">
      <Header />
      <main>
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
    </ThemeProvider>
  );
}

export default App;