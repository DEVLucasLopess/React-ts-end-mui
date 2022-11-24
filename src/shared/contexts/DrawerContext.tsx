import { createContext, useContext } from 'react';

import { useCallback, useState } from "react";

interface IDrawerContextData {
    isDrawerOpen: boolean
    toggleDrawerOpen: () => void;
}

type AppThemeProvider = {
    children: React.ReactNode;
};

const DrawerContext = createContext({} as IDrawerContextData);

export const useDrawerContext = () => {
    return useContext(DrawerContext);
}

export const DrawerProvider: React.FC<AppThemeProvider> = ({ children }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    //useCallback tem a capacidade de armazenar funções dentro dele
    const toggleDrawerOpen = useCallback(() =>  {
        setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen);
    }, []);

    return (
        <DrawerContext.Provider value={{isDrawerOpen, toggleDrawerOpen}}>
            {children}
        </DrawerContext.Provider>
    );
}