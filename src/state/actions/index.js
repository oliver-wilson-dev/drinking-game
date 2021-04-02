/* eslint-disable import/prefer-default-export */
import { COOKIES_ACCEPTED, UPDATE_PLAYERS } from '../actionTypes';

export const cookiesAccepted = () => (dispatch) => dispatch({ type: COOKIES_ACCEPTED });
export const updatePlayers = ({ players }) => (dispatch) => dispatch({
  type: UPDATE_PLAYERS,
  payload: { players }
});
