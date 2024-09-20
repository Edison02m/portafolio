import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Inicializa el estado basado en localStorage o en un valor por defecto
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true'; // Si no hay, por defecto es false (modo claro)
  });

  useEffect(() => {
    // Establece el modo oscuro en el documento según el estado
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // Guarda el estado en localStorage
    localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]); // Solo se ejecuta cuando isDarkMode cambia

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode); // Alterna el estado
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
