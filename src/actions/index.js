import axios from 'axios';
import loki from '../lokiDB/index';
import { SEARCH_MOVIES, GET_MOVIE, SAVE_MOVIE, GET_FAVORITES} from '../constants/ActionTypes';

const ROOT_URL = 'http://www.omdbapi.com/';
const SEARCH_TOKEN = '?s=';
const ID_TOKEN = '?i=';
const TYPE_URL = '&y=&plot=short&r=json';
// const YT_API_KEY = 'key=AIzaSyDU0Rl4vJkkudr57KgNLD_IOXR4tKesNp4';
// const YT_URL= 'https://www.googleapis.com/youtube/v3/search?part=snippet&';

export function searchMovies(term) {
  const request = axios.get(`${ROOT_URL}${SEARCH_TOKEN}${term}${TYPE_URL}`);

  return {
    type: SEARCH_MOVIES,
    payload: request
  }
}

export function getMovie(id) {
  const request = axios.get(`${ROOT_URL}${ID_TOKEN}${id}${TYPE_URL}`);

  return {
    type: GET_MOVIE,
    payload: request
  }
}

export function addFavorite(movie) {
  loki.insert(movie);

  return {
    type: SAVE_MOVIE,
    payload: movie
  }
}

export function getFavorites() {
  const request = loki.data;

  return {
    type: GET_FAVORITES,
    payload: request
  }
}
