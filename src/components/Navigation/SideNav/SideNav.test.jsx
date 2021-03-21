import React from 'react';
import { shallow, mount } from 'enzyme';
import SideNav from './index';
import ThemeSwitch from '../../../containers/ThemeSwitch';
import styles from './SideNav.module.css';
import { preventScroll, allowScroll } from './utils/overlay';

jest.mock('react-router-dom', () => ({ NavLink: ({ children }) => <button type="button">{children}</button> }));

jest.mock('./utils/overlay', () => ({
  preventScroll: jest.fn(),
  allowScroll: jest.fn()
}));

jest.mock('./assets/cross.svg', () => {
  const CrossIcon = (props) => <button type="button" {...props} />;

  return CrossIcon;
});

jest.mock('./assets/burgerMenu.svg', () => {
  const BurgerMenu = (props) => <button type="button" {...props} />;

  return BurgerMenu;
});

jest.mock('../../../containers/ThemeSwitch', () => {
  const ThemeSwitch = (props) => <button type="button" {...props} />;

  return ThemeSwitch;
});

const render = (
  renderMethod = shallow
) => renderMethod(<SideNav />);

describe('<SideNav/> component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should exist', () => {
    expect(render().exists()).toBe(true);
  });

  it('should render correctly', () => {
    expect(render()).toMatchSnapshot();
  });

  describe('when clicking on the burger menu', () => {
    it('should call preventScroll', () => {
      const burgerMenu = render(mount).find(`.${styles.icon}`).first();
      burgerMenu.simulate('click');

      expect(preventScroll).toHaveBeenCalledTimes(1);
    });

    it('should open the side nav', () => {
      const component = render(mount);
      const burgerMenu = component.find(`.${styles.icon}`).first();
      burgerMenu.simulate('click');

      expect(component).toMatchSnapshot();
    });

    describe('and then clicking on the menu content', () => {
      it('should stop the propagation of that event', () => {
        const component = render(mount);
        const burgerMenu = component.find(`.${styles.icon}`).first();
        burgerMenu.simulate('click');

        const menuContent = component.find(`.${styles.menuContent}`).first();
        const mockStopPropagation = jest.fn();
        menuContent.simulate('click', { stopPropagation: mockStopPropagation });

        expect(mockStopPropagation).toHaveBeenCalled();
      });
    });

    describe('and then clicking on the overlay', () => {
      it('should close the side nav', () => {
        const component = render(mount);
        const burgerMenu = component.find(`.${styles.icon}`).first();
        burgerMenu.simulate('click');

        const overlay = component.find(`.${styles.menuContainer}`).first();

        overlay.simulate('click');

        expect(component).toMatchSnapshot();
      });
    });

    describe('and then clicking on the cross icon', () => {
      it('should close the side nav', () => {
        const component = render(mount);
        const burgerMenu = component.find(`.${styles.icon}`).first();
        burgerMenu.simulate('click');

        const crossIcon = component.find(`.${styles.crossIcon}`).first();
        crossIcon.simulate('click');

        expect(component).toMatchSnapshot();
      });

      it('should allow scrolling again', () => {
        const component = render(mount);
        const burgerMenu = component.find(`.${styles.icon}`).first();
        burgerMenu.simulate('click');

        const crossIcon = component.find(`.${styles.crossIcon}`).first();
        crossIcon.simulate('click');

        expect(allowScroll).toHaveBeenCalled();
      });
    });
  });
});
