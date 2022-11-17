import React from 'react';

import { AppRoutes } from './routes';
import { LightThme } from './shared/themes/light';
import { DarkTheme } from './shared/themes/dark';
import { MenuLateral } from './shared/components/menu-lateral/MenuLateral';

import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { AppThemeProvider } from './shared/contexts/ThemeContext';


export const App = () => {
  return (
    //esse cara oferece o contexto pro React router doom funcionar;
    <AppThemeProvider>
      <BrowserRouter>
        <MenuLateral>
          <AppRoutes/>
        </MenuLateral>
      </BrowserRouter>
    </AppThemeProvider>
  );
}