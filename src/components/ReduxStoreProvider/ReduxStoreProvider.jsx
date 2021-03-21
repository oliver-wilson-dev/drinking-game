import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../../state/reducers';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

const ReduxStoreProvider = ({ children }) => <Provider store={store}>{children}</Provider>;

export default ReduxStoreProvider;
