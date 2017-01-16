import React, { Component } from 'react';
import MovieList from '../containers/movie_list';
import MovieDetail from '../containers/movie_detail';
import SearchBar from '../containers/search_bar';


export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <MovieDetail />
        <MovieList />
      </div>
    );
  }
}
