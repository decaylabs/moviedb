import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFavorites, getFavorite } from '../actions/index';
import { bindActionCreators } from 'redux';
import { Scrollbars } from 'react-custom-scrollbars';

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
        <Scrollbars className="favorites" style={{ width: 310, height: 480 }}>
        <h5 className="col-heading">Favorites</h5>
          <ul className="list-group-favorites">
            {this.renderList()}
          </ul>
        </Scrollbars>
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
