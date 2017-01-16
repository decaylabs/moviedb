import { combineReducers } from 'redux';
import MoviesReducer from './search_movies';

const rootReducer = combineReducers({
  movies: MoviesReducer
});

export default rootReducer;
