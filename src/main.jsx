import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from '@superys/momo-ui';
import { AppProvider } from './state/AppContext';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
