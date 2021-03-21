import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

jest.mock('../../routes', () => ({
  home: {
    route: 'test-home-route'
  },
  about: {
    route: 'test-about-route'
  },
  contact: {
    route: 'test-contact-route'
  }
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Link: ({ children }) => <>{children}</>
}));

const render = () => shallow(<Footer />);

it('renders correctly', () => {
  expect(render()).toMatchSnapshot();
});
