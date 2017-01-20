import { GET_FAVORITES, CHECK_FAVORITE,
         ADD_FAVORITE, REMOVE_FAVORITE} from '../constants/ActionTypes';

const INITIAL_STATE = { all: [], favorite: null};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_FAVORITES:
      return { ...state, all: action.payload};
    case CHECK_FAVORITE:
      return { ...state, favorite: action.payload };
    case ADD_FAVORITE:
      return { ...state, favorite: action.payload };
    case REMOVE_FAVORITE:
      return { ...state, favorite: null };
    default:
      return state;
  }
}
