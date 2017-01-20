import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieDetails from './movie_details';
import { bindActionCreators } from 'redux';
import { getInit } from '../actions/index';

class MovieViewer extends Component {

  componentWillMount() {
    this.props.getInit();
  }

  render () {
    if(!this.props.movie) {
      return <div className="col-md-8"></div>;
    }
    return (
          <MovieDetails />
    );
  }
}

function mapStateToProps(state) {
  return {
    movie: state.movies.movie
  };
}

 function mapDispatchToProps(dispatch) {
   return bindActionCreators({ getInit }, dispatch)
 }

export default connect(mapStateToProps, mapDispatchToProps)(MovieViewer);
