import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import GridItem from './GridItem';

class GridList extends Component {
	render() {
		var {beers} = this.props;

		return (
			<Container id="GridList">
				<Row>
					{beers.map(beer => (
						<Col key={beer.id} xs={12} md={6} lg={4}>
							<GridItem beer={beer}/>
						</Col>
						))}
				</Row>
			</Container>
		);
	}
}

export default GridList;