import { SEARCH_MOVIES, GET_MOVIE} from '../constants/ActionTypes';
const INITIAL_STATE = { search: [], movie: null};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SEARCH_MOVIES:
      return { ...state, search: action.payload.data.Search };
    case GET_MOVIE:
      return { ...state, movie: action.payload.data };
    default:
      return state;
  }
}
