import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import testAction from './testAction';
import testProp from './testProp';

const connectedComponentHelpers = ({
  connectedComponent: ConnectedComponent,
  component,
}) => {
  const render = () => mount(
    <Provider store={createStore(() => ({}))}>
      <ConnectedComponent />
    </Provider>
  );

  const helpers = {
    testAction: testAction({ render, component }),
    testProp: testProp({ render, component })
  };

  return helpers;
};

export default connectedComponentHelpers;
