import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import App from './components/App';
import './index.css';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// actions
import {getAllBeers} from './actions/beers';

var store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(() => console.log('store', store.getState()));

// console.log(store.getState());
store.dispatch(getAllBeers());

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Route path="/" component={App}/>
		</Router>
	</Provider>, 
	document.getElementById('root')
);