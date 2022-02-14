import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from '@superys/momo-ui';
import { RequestProvider } from './state/request';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <RequestProvider>
      <App />
    </RequestProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
