import { combineReducers } from 'redux';
import MoviesReducer from './search_movies';
import SaveReducer from './save_movie';

const rootReducer = combineReducers({
  movies: MoviesReducer,
  favorites: SaveReducer
});

export default rootReducer;
