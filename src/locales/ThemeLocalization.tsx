
"use client"
import React, { createContext, useContext, useState } from 'react';
import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
import { PaletteMode, CssBaseline, useMediaQuery } from '@mui/material';
import ProgressBar from '../components/progress-bar/ProgressBar';
import ScrollTop from "../components/Buttons/ScrollTop";
import getLPTheme from '../theme/getLPTheme';

const ThemeContext = createContext({
  themeMode: 'light',
  toggleTheme: () => {}, 
});

interface ThemeLocalizationProps {
  children: React.ReactNode,
};

export default function ThemeLocalization({ children }: ThemeLocalizationProps){

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [themeMode, setThemeMode] = useState<PaletteMode>(() => (prefersDarkMode ? 'dark' : 'light'));

  const theme = createTheme(getLPTheme(themeMode));
  const toggleTheme = () => setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));


  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* <ProgressBar /> */}
        {children}
        <ScrollTop />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeMode = () => {
  return useContext(ThemeContext);
};