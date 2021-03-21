import React from 'react';
import { mount } from 'enzyme';
import Fallback from './Fallback';

let mockCleanup;

jest.mock('react', () => ({
  ...jest.requireActual('react'), // use actual for all non-hook parts
  useEffect: (fn) => {
    mockCleanup = fn();
  },
}));

const defaultProps = {
  setLoading: jest.fn()
};

const render = () => mount(<Fallback {...defaultProps} />);

describe('Fallback', () => {
  it('renders correctly', () => {
    expect(render()).toMatchSnapshot();
  });

  it("should call setLoading with 'true'", () => {
    render();

    expect(defaultProps.setLoading).toHaveBeenCalledWith(true);
  });
  describe('when unmounting', () => {
    it("should call setLoading with 'false'", () => {
      render();

      mockCleanup();
      expect(defaultProps.setLoading).toHaveBeenCalledWith(false);
    });
  });
});
