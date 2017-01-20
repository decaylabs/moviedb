import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovie, checkFavorite } from '../actions/index';
import { bindActionCreators } from 'redux';

class MovieList extends Component{

  componentWillUpdate(){
    console.log('test');
    this.props.getMovie(this.props.movies[0]);
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
      <ul className="list-group col-md-3">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movies.search
  };
}

//Anything returned from this function will end up as props on the MovieList container
function mapDispatchToProps(dispatch) {
  //Whenver select movie is called, the result should be passed to all of our reducers
  return bindActionCreators({getMovie, checkFavorite}, dispatch);
}

// Promote MovieList from a compionent to a container - it needs to know abvoyut this new
// dispatch method, selectMovie, Make it available as a prop;
export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
