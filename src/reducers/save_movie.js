import { GET_FAVORITES, REMOVE_FAVORITE, ADD_FAVORITE, GET_FAVORITE, CHECK_FAVORITE} from '../constants/ActionTypes';
const INITIAL_STATE = { all: [], favorite: null};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_FAVORITES:
      return { ...state, all: action.payload };
    case GET_FAVORITE:
        return { ...state, favorite: action.payload};
    case REMOVE_FAVORITE:
      return { ...state, favorite: null};
    case ADD_FAVORITE:
      return { ...state, favorite: action.payload };
    case CHECK_FAVORITE:
      return { ...state, favorite: action.payload };
    default:
      return state;
  }
}
