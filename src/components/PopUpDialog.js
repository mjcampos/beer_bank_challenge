import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Modal, Row, Col, Image, Card} from 'react-bootstrap';

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

	displayRecommendations = () => {
		var {recommendations} = this.props;

		return (
			<Row>
				{recommendations.map(recommendation => (
					<Col>
						<Card key={recommendation.id}>
							<Card.Img src={recommendation.image_url}/>
						</Card>

						<Card.Body className="text-center">
							<Card.Title>{recommendation.name}</Card.Title>
							<Card.Text>{recommendation.tagline}</Card.Text>
						</Card.Body>
					</Col>
				))}
			</Row>
		);
	}

	render() {
		var {show, beer, recommendations} = this.props;

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

					<Modal.Footer>
						{recommendations.length ? this.displayRecommendations() : null}
					</Modal.Footer>
				</Modal.Header>
			</Modal>
		);
	}
}

var mapStateToProps = state => state;

export default connect(mapStateToProps, null)(PopUpDialog);