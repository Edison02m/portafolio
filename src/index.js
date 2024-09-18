import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './components/ThemeContext';
import './index.css'; // Asumiendo que has renombrado tailwind.css a index.css

const applyTheme = () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

applyTheme();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);