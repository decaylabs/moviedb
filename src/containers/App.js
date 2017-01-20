import React, { Component } from 'react';
import MovieList from '../containers/movie_list';
import MovieViewer from '../containers/movie_viewer';
import SearchBar from '../containers/search_bar';
import FavoritesList from '../containers/favorites_list';


export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <FavoritesList />
        <MovieViewer />
        <MovieList />
      </div>
    );
  }
}
