import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from '../containers/App';
import ReduxStoreProvider from '../components/ReduxStoreProvider';

render(
  <React.StrictMode>
    <ReduxStoreProvider>
      <App />
    </ReduxStoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
