import { createContext, useContext } from 'react';
import { ThemeProvider } from '@mui/material';
import { Box } from '@mui/system';

import { DarkTheme, LightThme } from './../themes';
import { useCallback, useState, useMemo } from "react";

interface IThemeContextData {
    themeName: 'light' | 'dark';
    toggleTheme: () => void;
}

type AppThemeProvider = {
    children: React.ReactNode;
};

const ThemeContext = createContext({} as IThemeContextData);

export const useAppThemeContext = () => {
    return useContext(ThemeContext);
}
 
export const AppThemeProvider: React.FC<AppThemeProvider> = ({ children }) => {
    const [themeName, setThemeName] = useState<'light' | 'dark'>('dark');

    //useCallback tem a capacidade de armazenar funções dentro dele
    const toggleTheme = useCallback(() =>  {
        setThemeName(oldThemeName => oldThemeName === 'light' ? 'dark' : 'light');
    }, []);

    const theme = useMemo(() => {
        if(themeName === 'light') return LightThme;

        return DarkTheme;
    }, [themeName]);

    return (
        <ThemeContext.Provider value={{themeName, toggleTheme}}>
            <ThemeProvider theme={theme}>
                <Box width="100vw" height="100vh" bgcolor={theme.palette.background.default}>
                    {children}
                </Box>
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}
