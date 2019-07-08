import {ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES} from '../utils/constants';

function favorites(state = [], action) {
	switch(action.type) {
		case ADD_TO_FAVORITES:
			return [
				...state,
				action.beer
			]
		case REMOVE_FROM_FAVORITES:
			var newState = state.filter(item => item.id !== action.id)
			return newState;
		default:
			return state;
	}
}

export default favorites;