import { Theme, ThemeContextType } from './@types/theme';
import * as React from 'react';
export const ThemeContext = React.createContext<ThemeContextType | null>(null);

const ThemeProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [darkTheme, setDarkTheme] = React.useState<Theme>(
    {
      dark: false,
    },
  );
  const setTheme = (a:boolean) => {
    setDarkTheme({dark:a})
  }

return (
  <ThemeContext.Provider value={{ darkTheme, setTheme }}>
    {children}
  </ThemeContext.Provider>
);
};

export default ThemeProvider;