import React from 'react';
import { shallow } from 'enzyme';
import HomePage from './HomePage';

jest.mock('../Page', () => {
  const Page = (children) => <div>{children}</div>;

  return Page;
});

const render = () => shallow(<HomePage />);

it('renders correctly', () => {
  expect(render()).toMatchSnapshot();
});
