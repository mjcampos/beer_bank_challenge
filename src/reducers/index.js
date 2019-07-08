import {combineReducers} from 'redux';
import beers from './beers';
import favorites from './favorites';
import recommendations from './recommendations';

const rootReducer = combineReducers({
	beers,
	favorites,
	recommendations
});

export default rootReducer;