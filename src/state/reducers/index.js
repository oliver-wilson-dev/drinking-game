import { COOKIES_ACCEPTED, TOGGLE_THEME } from '../actionTypes';
import { DARK_THEME, LIGHT_THEME } from '../../styles/constants';

const defaultState = {
  message: 'hello world',
  cookiesAccepted: false,
  theme: LIGHT_THEME
};

const reducer = (state = defaultState, action) => {
  const { type: actionType } = action;

  switch (actionType) {
    case COOKIES_ACCEPTED:
      return {
        ...state,
        cookiesAccepted: true
      };
    case TOGGLE_THEME: {
      const newTheme = state.theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME;

      return {
        ...state,
        theme: newTheme
      };
    }
    default:
      return { ...state };
  }
};

export { defaultState };
export default reducer;
