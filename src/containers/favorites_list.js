import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFavorites, getFavorite } from '../actions/index';
import { bindActionCreators } from 'redux';

class FavoritesList extends Component {

  componentWillMount() {
    this.props.getFavorites();
  }

  renderList() {
    return this.props.favorites.all.map((movie) => {
      return (
        <li
          key={movie.imdbID}
          onClick={() => this.props.getFavorite(movie)}
          className="list-group-item">
          {movie.Title}
        </li>
      );
    });
  }

  render() {
    return (
      <div className="col-md-2">
        <h5 className="col-heading">Favorites</h5>
          <ul className="list-group-favorites">
            {this.renderList()}
          </ul>
      </div>
    );
  }
}

function mapStateToProps({favorites}) {
  return { favorites };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getFavorites, getFavorite }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesList);
