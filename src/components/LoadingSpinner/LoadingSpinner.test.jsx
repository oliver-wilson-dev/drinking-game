import React from 'react';
import { shallow } from 'enzyme';
import LoadingSpinner from './LoadingSpinner';
import styles from './LoadingSpinner.module.css';

const defaultProps = {
  show: true
};

const render = (props = {}) => shallow(<LoadingSpinner {...defaultProps} {...props} />);

describe('LoadingSpinner', () => {
  describe('when clicking on the overlay', () => {
    it('should stop the event propagation', () => {
      const stopPropagation = jest.fn();
      render().find(`.${styles.wrapper}`).simulate('click', { stopPropagation });

      expect(stopPropagation).toHaveBeenCalledWith();
    });
  });
  describe('when the component should show', () => {
    it('renders correctly', () => {
      expect(render()).toMatchSnapshot();
    });
  });

  describe('when the component should not show', () => {
    it('renders correctly', () => {
      expect(render()).toMatchSnapshot();
    });
  });
});
