import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovie, diskCacheResults } from '../actions/index';
import { bindActionCreators } from 'redux';
import { Scrollbars } from 'react-custom-scrollbars';

class MovieList extends Component {

  componentDidUpdate() {
    this.props.diskCacheResults(this.props.movies);
  }

  renderList() {
    return this.props.movies.map((movie) => {
      return (
        <li
          key={movie.imdbID}
          onClick={() => this.props.getMovie(movie)}
          className="list-group-item">
          <div className="movie-list media">
            <div className="media-left">
              <img className="media-object" alt="searched video" src={movie.Poster} />
            </div>
            <div className="media-body">
              <h5>{movie.Title}</h5>
              <h6>Type: {movie.Type}</h6>
              <h6>Year: {movie.Year}</h6>
            </div>
          </div>
        </li>
      );
    });
  }

  render() {
    return (
      <div className="col-md-2 search-list">
        <h5 className="col-heading">Results</h5>
        <Scrollbars style={{height: 490}}>
          <ul className="list-group-search">
            {this.renderList()}
          </ul>
        </Scrollbars>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movies.search
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getMovie, diskCacheResults}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
