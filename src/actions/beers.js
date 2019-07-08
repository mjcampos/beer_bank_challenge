import {GET_ALL_BEERS, SEARCH_FOR_BEERS} from '../utils/constants';
import axios from 'axios';

var URL = "https://api.punkapi.com/v2/beers";

export var getAllBeers = () => dispatch => {
	axios.get(URL)
		.then(res => dispatch({
				type: GET_ALL_BEERS,
				beers: res.data
		}));
}

export var searchForBeers = val => dispatch => {
	axios.get(URL, {
		params: {
			beer_name: val
		}
	})
	.then(res => dispatch({
			type: SEARCH_FOR_BEERS,
			beers: res.data
	}))
	.catch(err => console.error("Error: ", err));
}