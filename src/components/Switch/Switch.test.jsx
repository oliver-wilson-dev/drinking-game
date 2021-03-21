import React from 'react';
import { shallow } from 'enzyme';
import Switch from './Switch';

jest.mock('react-router-dom', () => ({
  __esModule: true,
  BrowserRouter: ({ children }) => <>{children}</>,
  Route: ({ children }) => <>{children}</>,
  Switch: ({ children }) => <>{children}</>
}));

const HomePage = () => null;
const AboutPage = () => null;
const ContactPage = () => null;

jest.mock('../../routes', () => ({
  home: {
    component: HomePage,
    route: 'test-home-route'
  },
  about: {
    component: AboutPage,
    route: 'test-about-route'
  },
  contact: {
    component: ContactPage,
    route: 'test-contact-route'
  }
}));

const render = () => shallow(<Switch />);

describe('Switch', () => {
  it('renders correctly', () => {
    expect(render()).toMatchSnapshot();
  });
});
