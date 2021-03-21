import reducer, { defaultState } from './index';
import { COOKIES_ACCEPTED, TOGGLE_THEME } from '../actionTypes';
import { DARK_THEME, LIGHT_THEME } from '../../styles/constants';

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

    describe(`when called with action type ${TOGGLE_THEME}`, () => {
      const action = {
        type: TOGGLE_THEME
      };
      it('should return the correct state', () => {
        expect(reducer(state, action)).toEqual({
          ...defaultState,
          theme: DARK_THEME
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

    describe(`when called with action type ${TOGGLE_THEME}`, () => {
      const action = {
        type: TOGGLE_THEME
      };
      const state = {
        [Symbol('test-key')]: Symbol('test-value'),
        theme: DARK_THEME
      };

      describe('and the theme is not the light theme', () => {
        it('should return the correct state, with the theme set to the light theme', () => {
          expect(reducer(state, action)).toEqual({
            ...state,
            theme: LIGHT_THEME
          });
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
