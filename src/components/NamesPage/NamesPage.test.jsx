import React from 'react';
import { shallow } from 'enzyme';
import NamesPage from './NamesPage';

jest.mock('../Page', () => {
  const Page = (children) => <div>{children}</div>;

  return Page;
});

const render = () => shallow(<NamesPage />);

it('renders correctly', () => {
  expect(render()).toMatchSnapshot();
});
