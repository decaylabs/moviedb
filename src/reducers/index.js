import { combineReducers } from 'redux';
import MoviesReducer from './movies';
import FavoritesReducer from './favorites';

const rootReducer = combineReducers({
  movies: MoviesReducer,
  favorites: FavoritesReducer
});

export default rootReducer;
