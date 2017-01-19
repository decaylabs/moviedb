import React, { Component } from 'react';
import { connect } from 'react-redux';
import Details from './details';


class MovieDetail extends Component {
  render () {
    if(!this.props.movie ) {
      return <div className="col-md-8"style={{display: 'hidden'}}></div>
    }
    return (
          <Details/>
    );
  }
}

function mapStateToProps(state) {
  return {
    movie: state.movies.movie,
   };
}

export default connect(mapStateToProps)(MovieDetail);
