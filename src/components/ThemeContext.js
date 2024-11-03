import React, { createContext, useContext, useState } from 'react';

// Создаем контекст
const ThemeContext = createContext();

// Хук для использования контекста
export const useTheme = () => useContext(ThemeContext);

// Провайдер для темы
export const ThemeProvider = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(prevTheme => !prevTheme);
    };

    return (
        <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};