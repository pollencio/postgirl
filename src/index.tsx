import React from 'react';
import ReactDOM from 'react-dom';
import { MomoStyleWrapper } from '@superys/momo-ui';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { AppProvider } from './state/AppContext';
import App from './App';
import customTheme from './styles/customTheme';

ReactDOM.render(
  <React.StrictMode>
    <MomoStyleWrapper theme={customTheme}>
      <AppProvider>
        <App />
      </AppProvider>
    </MomoStyleWrapper>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
