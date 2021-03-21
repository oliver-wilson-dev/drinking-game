import { cookiesAccepted, toggleTheme } from '.';
import { COOKIES_ACCEPTED, TOGGLE_THEME } from '../actionTypes';

describe('cookiesAccepted', () => {
  it('should dispatch the correct method', () => {
    const mockDispatch = jest.fn();
    cookiesAccepted()(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith({ type: COOKIES_ACCEPTED });
  });
});

describe('toggleTheme', () => {
  it('should dispatch the correct method', () => {
    const mockDispatch = jest.fn();
    toggleTheme()(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith({ type: TOGGLE_THEME });
  });
});
