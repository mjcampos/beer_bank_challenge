import {GET_RECOMMENDATIONS, CLEAR_RECOMMENDATIONS} from '../utils/constants';
import axios from 'axios';

const URL = "https://api.punkapi.com/v2/beers";

export var getRecommendations = (yeast, selected_beer_id) => dispatch => {
	axios.get(URL, {
		params: {
			yeast
		}
	})
	.then(res => {dispatch({
			type: GET_RECOMMENDATIONS,
			recommendations: res.data,
			selected_beer_id
		})});
}

export var clearRecommendations = () => {
	return {
		type: CLEAR_RECOMMENDATIONS
	}
}