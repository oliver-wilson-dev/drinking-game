import { COOKIES_ACCEPTED, UPDATE_PLAYERS } from '../actionTypes';

const defaultState = {
  cookiesAccepted: false,
  players: []
};

const reducer = (state = defaultState, action) => {
  const { type: actionType, payload } = action;

  switch (actionType) {
    case COOKIES_ACCEPTED:
      return {
        ...state,
        cookiesAccepted: true
      };
    case UPDATE_PLAYERS: {
      return {
        ...state,
        players: payload.players
      };
    }
    default:
      return { ...state };
  }
};

export { defaultState };
export default reducer;
