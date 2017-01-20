import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieDetails from './movie_details';
import { bindActionCreators } from 'redux';
import { getInit } from '../actions/index';

class MovieViewer extends Component {

  componentDidMount() {
    this.props.getInit();
  }

  render () {
    if(!this.props.movie) {
      return <div className="col-md-8"style={{display: 'hidden'}}></div>
    }
    return (
          <MovieDetails />
    );
  }
}

function mapStateToProps(state) {
  return {
    movie: state.movies.movie,
    favorite: state.favorites.favorite
   };
 }

 function mapDispatchToProps(dispatch) {
   return bindActionCreators({ getInit }, dispatch)
 }

export default connect(mapStateToProps, mapDispatchToProps)(MovieViewer);
