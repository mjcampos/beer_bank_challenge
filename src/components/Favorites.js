import React, {Component} from 'react';
import {connect} from 'react-redux';
import GridList from './GridList';

class Favorites extends Component {
	render() {
		return (
			<div>
				<GridList beers={this.props.favorites}/>
			</div>
		);
	}
}

var mapStateToProps = state => state;

export default connect(mapStateToProps, null)(Favorites);