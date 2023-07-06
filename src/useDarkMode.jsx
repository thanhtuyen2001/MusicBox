import { useState, useEffect } from 'react';

const useDarkMode = () => {
  const [isDarkMode, setDartMode] = useState(() => localStorage.theme === 'dark');
  const toggleDarkMode = () => {
    setDartMode(!isDarkMode);
  };
  useEffect(() => {
    const html = window.document.documentElement;
    const prev = isDarkMode ? 'light' : 'dark';
    html.classList.remove(prev);

    const next = isDarkMode ? 'dark' : 'light';
    html.classList.add(next);

    localStorage.setItem('theme', next);
  }, [isDarkMode]);

  return [isDarkMode, toggleDarkMode];
};

export default useDarkMode;
