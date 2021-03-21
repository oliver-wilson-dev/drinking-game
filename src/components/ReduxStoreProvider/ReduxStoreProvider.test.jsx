import React from 'react';
import { shallow } from 'enzyme';
import thunk from 'redux-thunk';

import reducer from '../../state/reducers';

const render = () => {
  const ReduxStoreProvider = require('./ReduxStoreProvider').default;

  return shallow(<ReduxStoreProvider />);
};

let createStore;
let applyMiddleware;
let composeWithDevTools;
let Provider;

describe('ReduxStoreProvider', () => {
  const mockStore = Symbol('test-store');
  const mockComposeWithDevTools = Symbol('test-devtools');
  const mockApplyMiddleware = Symbol('test-apply-middleware');
  const mockReducer = Symbol('test-reducer');

  beforeEach(() => {
    jest.resetModules();
    jest.doMock('react-redux', () => ({
      Provider: ({ children }) => <>{children}</>
    }));

    jest.doMock('redux', () => ({
      createStore: jest.fn(),
      applyMiddleware: jest.fn()
    }));

    jest.doMock('../../state/reducers', () => ({
      __esModule: true,
      default: mockReducer
    }));

    jest.doMock('redux-devtools-extension', () => ({
      composeWithDevTools: jest.fn()
    }));

    jest.doMock('redux-thunk', () => ({
      __esModule: true,
      default: 'test-thunk'
    }));

    ({ createStore, applyMiddleware } = require('redux'));
    ({ composeWithDevTools } = require('redux-devtools-extension'));
    ({ Provider } = require('react-redux'));

    createStore.mockReturnValue(mockStore);
    composeWithDevTools.mockReturnValue(mockComposeWithDevTools);
    applyMiddleware.mockReturnValue(mockApplyMiddleware);
  });

  it('should call createStore with the reducer and the composed middleware', () => {
    render();

    expect(createStore).toHaveBeenCalledWith(mockReducer, mockComposeWithDevTools);
  });

  it('should call composeWithDevTools with the result of applyMiddleware', () => {
    render();

    expect(composeWithDevTools).toHaveBeenCalledWith(mockApplyMiddleware);
  });

  it('should render correctly', () => {
    expect(render()).toMatchSnapshot();
  });

  it('should pass the store to the provider', () => {
    expect(render().find(Provider).prop('store')).toBe(mockStore);
  });
});
