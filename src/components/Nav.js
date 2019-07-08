import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Navbar, Container, Row, Col, InputGroup, FormControl} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {searchForBeers, getAllBeers} from '../actions/beers';

class Nav extends Component {
	constructor() {
		super();

		this.state = {
			beer: ""
		}
	}

	handleChange = beer => {
		this.setState({
			beer
		}, () => this.state.beer.length ? this.props.searchForBeers(this.state.beer) : this.props.getAllBeers());
	}

	render() {
		return (
			<div id="Navbar">
				<Navbar>
					<Navbar.Collapse className="justify-content-end">
						<Navbar.Brand><Link to="/">Home</Link></Navbar.Brand>
						<Navbar.Brand><Link to="/favorites">Favorites</Link></Navbar.Brand>
						
					</Navbar.Collapse>
				</Navbar>

				<Container>
					<Row className="justify-content-center">
						<Col className="text-center">
							<h1>The Beer Bank</h1>

							<p>Find Your Favorite Beer Here</p>
							<InputGroup>
								<FormControl
									value={this.state.beer}
									placeholder="Search for beer name"
									onChange={e => this.handleChange(e.target.value)}
								/>
							</InputGroup>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

var mapStateToProps = state => state;

export default connect(mapStateToProps, {searchForBeers, getAllBeers})(Nav);