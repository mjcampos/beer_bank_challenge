import {ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES} from '../utils/constants';

export var addToFavorites = beer => {
	return {
		type: ADD_TO_FAVORITES,
		beer
	}
}

export var removeFromFavorites = beer => {
	return {
		type: REMOVE_FROM_FAVORITES,
		id: beer.id
	}
}