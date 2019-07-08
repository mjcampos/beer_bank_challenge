import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import Nav from './Nav';
import Home from './Home';
import Favorites from './Favorites';

class App extends Component {
	render() {
		return (
			<div>
				<Nav/>

				<Route exact path="/" component={Home}/>
				<Route exact path="/favorites" component={Favorites}/>
			</div>
		);
	}
}

export default App;