import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Image} from 'react-bootstrap';

// Import actions
import {addToFavorites, removeFromFavorites} from '../actions/favorites';

class GridItem extends Component {
	handleFavorites = (beer) => {
		// Check if item exists on Favorites
		var existsInFavorites = this.props.favorites.find(item => item.id === beer.id) ? true : false;

		existsInFavorites ? this.props.removeFromFavorites(beer) : this.props.addToFavorites(beer);
	}

	render() {
		var {beer} = this.props;
		var isFavorite = this.props.favorites.find(item => item.id === beer.id) ? true : false;

		return (
			<div className="gridItem">
				<div className="star">
					<span className={isFavorite ? "starSelected" : null} onClick={() => this.handleFavorites(beer)}>&#9734;</span>
				</div>

				<Image src={beer.image_url} fluid/>

				<div className="text-center">
					<h2>{beer.name}</h2>
					<p>{beer.tagline}</p>
				</div>
			</div>
		);
	}
}

var mapStateToProps = state => state;

export default connect(mapStateToProps, {addToFavorites, removeFromFavorites})(GridItem);