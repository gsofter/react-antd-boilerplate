import React from 'react';
import { ThemeProvider } from 'react-fela';

interface IAppThemeProviderProps {
  children: React.ReactNode;
}

export const AppThemeProvider: React.FC<IAppThemeProviderProps> = ({ children }) => {
  return <ThemeProvider theme={{}}> {children}</ThemeProvider>;
};
