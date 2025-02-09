import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import store from './app/store.ts'; 
import App from './App'; 
import { Provider } from 'react-redux';

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>
  );
}