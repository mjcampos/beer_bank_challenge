import React, {Component} from 'react';
import {connect} from 'react-redux';
import GridList from './GridList';

class Home extends Component {
	render() {
		return (
			<div>
				<GridList beers={this.props.beers}/>
			</div>
		);
	}
}

var mapStateToProps = state => state;

export default connect(mapStateToProps, null)(Home);