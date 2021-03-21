import React from 'react';
import { render } from 'react-dom';
import App from '../containers/App';
import ReduxStoreProvider from '../components/ReduxStoreProvider';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  StrictMode: ({ children }) => children,
}));

jest.mock('react-dom');

jest.mock('../containers/App', () => {
  const App = () => null;

  return App;
});

jest.mock('../components/ReduxStoreProvider', () => {
  const ReduxStoreProvider = () => null;

  return ReduxStoreProvider;
});

describe('clientEntry', () => {
  it('should render correctly', () => {
    require('./index');

    expect(render).toHaveBeenCalledWith(
      <React.StrictMode>
        <ReduxStoreProvider>
          <App />
        </ReduxStoreProvider>
      </React.StrictMode>,
      global.document.getElementById('root')
    );
  });
});
