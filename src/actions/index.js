import axios from 'axios';
import loki from '../lokiDB/index';
import { SEARCH_MOVIES, GET_MOVIE, ADD_FAVORITE, GET_FAVORITES, GET_FAVORITE, REMOVE_FAVORITE, CHECK_FAVORITE} from '../constants/ActionTypes';

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

  loki.getCollection('favorites').insert(movie);

  return {
    type: ADD_FAVORITE,
    payload: movie
  }
}

export function getFavorites() {
  const request = new Promise( function(resolve){
    setTimeout(() => resolve(loki.getCollection('favorites').data), 500);
  });

  return {
    type: GET_FAVORITES,
    payload: request
  }
}


export function getFavorite(movie) {
  return {
    type: GET_FAVORITE,
    payload: movie
  }
}

export function removeFavorite(movie) {

  const request = loki.getCollection('favorites').remove(movie);
  return {
    type: REMOVE_FAVORITE,
    payload: request
  }
}

export function checkFavorite(movie) {
  const request = loki.getCollection('favorites').findOne(movie)

  console.log(request);
  return {
    type: CHECK_FAVORITE,
    payload: request
  }
}
