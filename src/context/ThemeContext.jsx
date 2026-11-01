import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setThemeState] = useState(() => {
    return localStorage.getItem('navjeewan_theme') || 'light';
  });

  const [color, setColorState] = useState(() => {
    return localStorage.getItem('navjeewan_color') || 'forest';
  });

  const [isThemeDrawerOpen, setIsThemeDrawerOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('data-bs-theme', theme);
    localStorage.setItem('navjeewan_theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute('data-color', color);
    localStorage.setItem('navjeewan_color', color);
  }, [color]);

  const toggleTheme = () => {
    setThemeState(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const setTheme = (newTheme) => {
    setThemeState(newTheme);
  };

  const setColor = (newColor) => {
    setColorState(newColor);
  };

  const openThemeDrawer = () => setIsThemeDrawerOpen(true);
  const closeThemeDrawer = () => setIsThemeDrawerOpen(false);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        color,
        setTheme,
        setColor,
        toggleTheme,
        isThemeDrawerOpen,
        openThemeDrawer,
        closeThemeDrawer
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
