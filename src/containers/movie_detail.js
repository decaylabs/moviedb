import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addFavorite } from '../actions/index';


class MovieDetail extends Component {

  onFavoritesClick() {
    this.props.addFavorite(this.props.movie);
  }

  render () {
    const movie = this.props.movie;

    if(!this.props.movie) {
      return <div className="col-md-8"style={{display: 'hidden'}}></div>
    }

    return (
      <div className="movie-detail media col-md-7">
        <div className="media-left">
          <img className="media-object" alt="searched video" src={movie.Poster} />
        </div>
        <div className="media-body">
          <h5>{movie.Title}</h5>
          <h6>Release: {movie.Released}</h6>
          <h6>Runtime: {movie.Runtime}</h6>
          <h6>Language: {movie.Language}</h6>
          <h6>Country: {movie.Country}</h6>
          <h6>Genre: {movie.Genre}</h6>
          <h6>Director: {movie.Director}</h6>
          <h6>Write: {movie.Writer}</h6>
          <h6>Actors: {movie.Actors}</h6>
          <p>Synopsis: {movie.Plot}</p>

          <h6>Awards: {movie.Awards}</h6>
          <h6>Metascore: {movie.Metascore}</h6>
          <h6>imdb Rating: {movie.imdbRating}</h6>


          <button
           onClick={this.onFavoritesClick.bind(this)}
           className="btn btn-primary">
           Add to Favorites
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movie: state.movies.movie,
    favorites: state.favorites.all
   };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addFavorite }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
