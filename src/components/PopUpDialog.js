import React, {Component} from 'react';
import {Modal, Row, Col, Image} from 'react-bootstrap';

class PopUpDialog extends Component {
	displayFoodParingList = food_pairing => {
		return (
			<div>
				<h4>Best Served With:</h4>

				<ul>
					{food_pairing.map((food, i) => <li key={i}>{food}</li>)}
				</ul>
			</div>
		);
	}

	render() {
		var {show, beer} = this.props;

		return (
			<Modal show={show} onHide={() => this.props.handleClose()} size="lg">
				<Modal.Header>
					<Modal.Body>
						<Row>
							<Col>
								<Image src={beer.image_url} fluid/>
							</Col>

							<Col>
								<h2>{beer.name}</h2>
								<p>{beer.tagline}</p>
								<h3>IBU: {beer.ibu} | ABV: {beer.abv} | EBC: {beer.ebc}</h3>
								<p>{beer.description}</p>

								{beer.food_pairing.length ? this.displayFoodParingList(beer.food_pairing) : null}
							</Col>
						</Row>
					</Modal.Body>
				</Modal.Header>
			</Modal>
		);
	}
}

export default PopUpDialog;