import { cookiesAccepted } from '.';
import { COOKIES_ACCEPTED } from '../actionTypes';

describe('cookiesAccepted', () => {
  it('should dispatch the correct method', () => {
    const mockDispatch = jest.fn();
    cookiesAccepted()(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith({ type: COOKIES_ACCEPTED });
  });
});
