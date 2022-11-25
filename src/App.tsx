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
import { AppThemeProvider, DrawerProvider } from './shared/contexts';

export const App = () => {
  return (
    //esse cara oferece o contexto pro React router doom funcionar.
    //"AppThemeProvider" é a configuração do thema claro e escuro.
    //"DrawerProvider" configura o contexto.
    //"BrowserRouter" que é as rotas;
    //"MenuLateral" que é o menu propriamente dito.
    <AppThemeProvider>
      <DrawerProvider>

        <BrowserRouter>
          <MenuLateral>
            <AppRoutes/>
          </MenuLateral>
        </BrowserRouter>
        
      </DrawerProvider>
    </AppThemeProvider>
  );
}