import {GET_RECOMMENDATIONS, CLEAR_RECOMMENDATIONS} from '../utils/constants';

function recommendations(state = [], action) {
	switch(action.type) {
		case GET_RECOMMENDATIONS:
			return action.recommendations.filter(item => item.id !== action.selected_beer_id).slice(0, 3);
		case CLEAR_RECOMMENDATIONS:
			return [];
		default:
			return state;
	}
}

export default recommendations;