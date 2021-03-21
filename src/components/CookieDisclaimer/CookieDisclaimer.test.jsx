import React from 'react';
import { shallow, mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import styles from './index.module.css';

import CookieDisclaimer from '.';

jest.mock('./assets/tick.svg', () => {
  const Tick = () => null;

  return Tick;
});

jest.mock('./assets/notification.svg', () => {
  const Notification = () => null;

  return Notification;
});

const defaultProps = {
  cookiesAccepted: jest.fn(),
  message: 'hello world'
};

const render = (renderMethod = shallow, props = {}) => renderMethod(
  <CookieDisclaimer
    {...defaultProps}
    {...props}
  />
);

describe('Cookie Disclaimer component', () => {
  describe('when first loaded', () => {
    it('should render correctly', () => {
      expect(render()).toMatchSnapshot();
    });

    it('should then apply the loaded class', () => {
      expect(render(mount)).toMatchSnapshot();
    });

    describe('and the initial animation happens', () => {
      it('should not close', () => {
        const component = render(mount);
        const container = component.find(`.${styles.container}`);
        container.props().onTransitionEnd();

        expect(container.hasClass(styles.loaded)).toBe(true);
        expect(container.hasClass(styles.closed)).toBe(false);
      });
    });

    describe('when the user accepts the policy', () => {
      it('should render correctly', () => {
        const component = render();

        component.find(`.${styles.tick}`).simulate('click');

        expect(component).toMatchSnapshot();
      });

      it('should call cookiesAccepted', () => {
        const component = render();

        component.find(`.${styles.tick}`).simulate('click');

        expect(defaultProps.cookiesAccepted).toHaveBeenCalled();
      });

      describe('after the transition ends', () => {
        it('should render null', () => {
          const component = render();

          component.find(`.${styles.tick}`).simulate('click');

          act(() => {
            component.find(`.${styles.closed}`).props().onTransitionEnd();
          });

          component.update();

          expect(component).toMatchSnapshot();
        });
      });
    });
  });
});
