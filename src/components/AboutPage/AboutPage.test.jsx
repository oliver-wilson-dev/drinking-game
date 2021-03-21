import React from 'react';
import { shallow } from 'enzyme';
import AboutPage from './AboutPage';

jest.mock('../Page', () => {
  const Page = (children) => <div>{children}</div>;

  return Page;
});

const render = () => shallow(<AboutPage />);

it('renders correctly', () => {
  expect(render()).toMatchSnapshot();
});
