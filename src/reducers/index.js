import {combineReducers} from 'redux';
import beers from './beers';
import favorites from './favorites';

const rootReducer = combineReducers({
	beers,
	favorites
});

export default rootReducer;