import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Card} from 'react-bootstrap';

import PopUpDialog from './PopUpDialog';

// Import actions
import {addToFavorites, removeFromFavorites} from '../actions/favorites';
import {getRecommendations, clearRecommendations} from '../actions/recommendations';

class GridItem extends Component {
	constructor() {
		super();

		this.state = {
			show: false
		}
	}

	handleFavorites = (beer) => {
		// Check if item exists on Favorites
		var existsInFavorites = this.props.favorites.find(item => item.id === beer.id) ? true : false;

		existsInFavorites ? this.props.removeFromFavorites(beer) : this.props.addToFavorites(beer);
	}

	handleShow = () => {
		var {beer} = this.props;
		var firstWord = beer.ingredients.yeast.split(" ")[0];

		this.props.getRecommendations(firstWord, beer.id);
		this.setState({
			show: true
		});
	}

	handleClose = () => {
		this.props.clearRecommendations();
		this.setState({
			show: false
		});
	}

	render() {
		var {beer} = this.props;
		var isFavorite = this.props.favorites.find(item => item.id === beer.id) ? true : false;

		return (
			<div>
				<Card className="gridItem">
					<div className="star">
						<span className={isFavorite ? "starSelected" : null} onClick={() => this.handleFavorites(beer)}>&#9734;</span>
					</div>

					<Card.Img src={beer.image_url} onClick={() => this.handleShow() }/>

					<Card.Body className="text-center">
						<Card.Title>{beer.name}</Card.Title>
						<Card.Text>{beer.tagline}</Card.Text>
					</Card.Body>
				</Card>

				<PopUpDialog beer={beer} show={this.state.show} handleClose={this.handleClose} />
			</div>
		);
	}
}

var mapStateToProps = state => state;

export default connect(mapStateToProps, {addToFavorites, removeFromFavorites, getRecommendations, clearRecommendations})(GridItem);