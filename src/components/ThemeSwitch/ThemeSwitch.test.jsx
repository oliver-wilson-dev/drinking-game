import React from 'react';
import { mount } from 'enzyme';
import ThemeSwitch from './ThemeSwitch';
import { DARK_THEME, LIGHT_THEME } from '../../styles/constants';

jest.mock('./assets/sun.svg', () => {
  const Sun = () => null;

  return Sun;
});

jest.mock('./assets/moon.svg', () => {
  const Moon = () => null;

  return Moon;
});

const defaultProps = {
  theme: LIGHT_THEME,
  toggleTheme: jest.fn(),
  className: undefined
};

const render = (props = {}) => mount(<ThemeSwitch {...defaultProps} {...props} />);

describe('ThemeSwitch', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  describe('when the theme is the light theme', () => {
    it('should render correctly', () => {
      expect(render()).toMatchSnapshot();
    });

    describe('when providing an additional class', () => {
      it('should render correctly', () => {
        expect(render({ className: 'test-class' })).toMatchSnapshot();
      });
    });
  });

  describe('when the theme is the dark theme', () => {
    it('should render correctly', () => {
      expect(render({ theme: DARK_THEME })).toMatchSnapshot();
    });

    describe('when providing an additional class', () => {
      it('should render correctly', () => {
        expect(render({ className: 'test-class' })).toMatchSnapshot();
      });
    });
  });

  describe('when clicking the toggle theme button', () => {
    describe('and the transition has ended', () => {
      it('should call toggleTheme', () => {
        const component = render();

        component.find('button').simulate('click');
        component.find('button').simulate('transitionEnd');

        expect(defaultProps.toggleTheme).toHaveBeenCalled();
      });
    });

    describe('and the transition has not ended', () => {
      it('should call toggleTheme', () => {
        const component = render();

        component.find('button').simulate('click');

        expect(defaultProps.toggleTheme).not.toHaveBeenCalled();
      });
    });

    describe('and the transition has ended but the button should not be hidden', () => {
      it('should call toggleTheme', () => {
        const component = render();

        component.find('button').simulate('transitionEnd');

        expect(defaultProps.toggleTheme).not.toHaveBeenCalled();
      });
    });
  });
});
