import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addFavorite, removeFavorite, checkFavorite} from '../actions/index';

class MovieDetails extends Component {
  componentWillMount(){
    this.props.checkFavorite(this.props.movie)
  }
  componentDidUpdate() {
    this.props.checkFavorite(this.props.movie)
  }

  onFavoritesClick() {
    this.props.addFavorite(this.props.movie);
  }

  onRemoveClick() {
    this.props.removeFavorite(this.props.movie);
  }

  render() {
    const movie = this.props.movie;
    let button = null;

    if (!this.props.favorite) {
      button = <AddFavorite onClick={this.onFavoritesClick.bind(this)} />
    }
    else {
      button = <RemoveFavorite onClick={this.onRemoveClick.bind(this)} />
    }

    return (
      <div className="movie-detail media col-md-8">
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
          {button}
        </div>
      </div>
    );
  }
}

function AddFavorite(props) {
  return (
    <button
     onClick={props.onClick}
     className="btn btn-primary">
     Add to Favorites
    </button>
  );
}
function RemoveFavorite(props) {
  return (
    <button
     onClick={props.onClick}
     className="btn btn-danger">
     Delete Favorite
    </button>
  );
}

function mapStateToProps(state) {
  return {
    movie: state.movies.movie,
    favorite: state.favorites.favorite
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({checkFavorite, addFavorite, removeFavorite}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
