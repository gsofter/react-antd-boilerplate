import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRenderer } from 'fela';
import { RendererProvider } from 'react-fela';
import { AppThemeProvider } from './theme';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const renderer = createRenderer();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <RendererProvider renderer={renderer}>
      <AppThemeProvider>
        <App />
      </AppThemeProvider>
    </RendererProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
