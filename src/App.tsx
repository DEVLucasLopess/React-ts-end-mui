import React from 'react';

import { AppRoutes } from './routes';
import { LightThme } from './shared/themes/light'

import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { ThemeProvider } from '@emotion/react';

export const App = () => {
  return (
    //esse cara oferece o contexto pro React router doom funcionar;
    <ThemeProvider theme={LightThme}>
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
    </ThemeProvider>
  );
}