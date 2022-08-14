import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store/store';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const setupStore = store;


root.render(
  <BrowserRouter>
  <ThemeProvider>
      <Provider store={setupStore}>
      <App />
    </Provider>
  </ThemeProvider>
    </BrowserRouter>
);
