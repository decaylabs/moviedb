import { SAVE_MOVIE, GET_FAVORITES } from '../constants/ActionTypes';
const INITIAL_STATE = { all: [], favorite: null };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SAVE_MOVIE:
      return { ...state, favorite: action.payload  };
    case GET_FAVORITES:
      return { ...state, all: action.payload };
    default:
      return state;
  }
}
