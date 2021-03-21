import React from 'react';
import { shallow } from 'enzyme';
import LoadingSpinner from '../LoadingSpinner';
import App from './App';
import { LIGHT_THEME, DARK_THEME } from '../../styles/constants';

jest.mock('react-router-dom', () => ({
  __esModule: true,
  BrowserRouter: ({ children }) => <>{children}</>,
  Route: ({ children }) => <>{children}</>,
  Switch: ({ children }) => <>{children}</>
}));

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  Suspense: ({ children, fallback }) => (
    <>
      {fallback()}
      {children}
    </>
  ),
}));

jest.mock('../ErrorBoundary', () => {
  const ErrorBoundary = ({ children }) => <>{children}</>;

  return ErrorBoundary;
});

jest.mock('../Navigation', () => {
  const Navigation = () => null;

  return Navigation;
});

jest.mock('../Fallback', () => {
  const Fallback = () => null;

  return Fallback;
});

jest.mock('../LoadingSpinner', () => {
  const LoadingSpinner = () => null;

  return LoadingSpinner;
});

jest.mock('../Footer', () => {
  const Footer = () => <footer />;

  return Footer;
});

jest.mock('../../containers/CookieDisclaimer', () => {
  const CookieDisclaimer = () => null;

  return CookieDisclaimer;
});

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

const render = (props = {}) => shallow(<App {...props} />);

describe('App', () => {
  describe('when the theme is the light theme', () => {
    it('renders correctly', () => {
      expect(render({ theme: LIGHT_THEME })).toMatchSnapshot();
    });
  });

  describe('when the theme is the dark theme', () => {
    it('renders correctly', () => {
      expect(render({ theme: DARK_THEME })).toMatchSnapshot();
    });
  });

  it('should call the LoadingSpinner with the show prop set to false', () => {
    const wrapper = render();
    expect(wrapper.find(LoadingSpinner).props()).toEqual({ show: false });
  });
});
