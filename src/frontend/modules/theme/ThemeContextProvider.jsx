import { useState, useEffect, useCallback } from 'react';
import ThemeContext from './ThemeContext.js';
import colors from './themeColors.js';
import applyTheme from './themeApply.js';

const lsThemeKeyName = 'theme-color-mode';

export default function ThemeContextProvider({children}) {
  const [ colorMode, setColorMode ] = useState(undefined);

  useEffect(() => {
    setColorMode(window.document.documentElement.style.getPropertyValue('--initial-color-mode'));
  }, []);

  const toggleColorMode = useCallback(() => {
    setColorMode((prev) => { return prev === 'light' ? 'dark' : 'light' });
  }, [colorMode]);

  useEffect(() => {
    window.localStorage.setItem(lsThemeKeyName, colorMode);

    if (colorMode !== undefined)
      applyTheme(colors, colorMode);
  }, [colorMode]);

  return (
    <ThemeContext.Provider value={{colorMode, toggleColorMode}}>
      {children}
    </ThemeContext.Provider>
  );
};