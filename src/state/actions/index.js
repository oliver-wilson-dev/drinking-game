/* eslint-disable import/prefer-default-export */
import { COOKIES_ACCEPTED, TOGGLE_THEME } from '../actionTypes';

export const cookiesAccepted = () => (dispatch) => dispatch({ type: COOKIES_ACCEPTED });
export const toggleTheme = () => (dispatch) => dispatch({ type: TOGGLE_THEME });
