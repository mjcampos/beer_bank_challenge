import {GET_ALL_BEERS} from '../utils/constants';

function beers(state = [], action) {
	switch(action.type) {
		case GET_ALL_BEERS:
			return action.beers;
		default:
			return state;
	}
}

export default beers;