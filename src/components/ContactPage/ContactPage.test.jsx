import React from 'react';
import { shallow } from 'enzyme';
import ContactPage from './ContactPage';

jest.mock('../Page', () => {
  const Page = (children) => <div>{children}</div>;

  return Page;
});

const render = () => shallow(<ContactPage />);

it('renders correctly', () => {
  expect(render()).toMatchSnapshot();
});
