import axios from 'axios';
import { SEARCH_MOVIES, GET_MOVIE, GET_TRAILER } from '../constants/ActionTypes';

const ROOT_URL = 'http://www.omdbapi.com/';
const SEARCH_TOKEN = '?s=';
const ID_TOKEN = '?i=';
const TYPE_URL = '&y=&plot=short&r=json';
const YT_API_KEY = 'key=AIzaSyDU0Rl4vJkkudr57KgNLD_IOXR4tKesNp4';
const YT_URL= 'https://www.googleapis.com/youtube/v3/search?part=snippet&';

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

export function getTrailer(term) {
  const request = axios.get(`${YT_URL}${YT_API_KEY}&q=${term}trailer&type=video`)

  return {
    type: GET_TRAILER,
    payload: request
  }
}
