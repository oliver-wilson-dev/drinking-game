import React from 'react';
import { shallow } from 'enzyme';
import Page from './Page';

const render = () => shallow(<Page><h1>hello world</h1></Page>);

it('renders correctly', () => {
  expect(render()).toMatchSnapshot();
});
