import reducer, { defaultState } from './index';
import { COOKIES_ACCEPTED } from '../actionTypes';

describe('reducer', () => {
  describe('when no state is provided', () => {
    const state = undefined;

    describe(`when called with action type ${COOKIES_ACCEPTED}`, () => {
      const action = {
        type: COOKIES_ACCEPTED
      };
      it('should return the correct state', () => {
        expect(reducer(state, action)).toEqual({
          ...defaultState,
          cookiesAccepted: true
        });
      });
    });

    describe('when the action type is unknown', () => {
      const action = { type: 'SOME_UNKNOWN_ACTION' };
      it('should return the default state', () => {
        expect(reducer(state, action)).toEqual({
          ...defaultState,
        });
      });
    });
  });

  describe('when state is provided', () => {
    const state = { [Symbol('test-key')]: Symbol('test-value') };

    describe(`when called with action type ${COOKIES_ACCEPTED}`, () => {
      const action = {
        type: COOKIES_ACCEPTED
      };
      it('should return the correct state', () => {
        expect(reducer(state, action)).toEqual({
          ...state,
          cookiesAccepted: true
        });
      });
    });

    describe('when the action type is unknown', () => {
      const state = { [Symbol('test-key')]: Symbol('test-value') };
      const action = { type: 'SOME_UNKNOWN_ACTION' };
      it('should return the state provided', () => {
        expect(reducer(state, action)).toEqual({
          ...state,
        });
      });
    });
  });
});
