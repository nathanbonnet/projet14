import React from 'react';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from 'react-redux';
import { store } from '@nath_b/projet-14-datatable/dist/store';
import App from './App.js';
import './styles/App.css';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider> 
  </StrictMode>,
);