import { GET_MOVIES, GET_MOVIE, GET_FAVORITE } from '../constants/ActionTypes';
const INITIAL_STATE = { search: [], movie: null};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_MOVIES:
      return { ...state, search: action.payload.data.Search };
    case GET_MOVIE:
      return { ...state, movie: action.payload.data };
    case GET_FAVORITE:
      return { ...state, movie: action.payload};
    default:
      return state;
  }
}
