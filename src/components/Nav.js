import React, {Component} from 'react';
import {Navbar, Container, Row, Col, InputGroup, FormControl} from 'react-bootstrap';

class Nav extends Component {
	render() {
		return (
			<div id="Navbar">
				<Navbar>
					<Navbar.Collapse className="justify-content-end">
						<p>Home</p>
						<p>Favorites</p>
					</Navbar.Collapse>
				</Navbar>

				<Container>
					<Row className="justify-content-center">
						<Col className="text-center">
							<h1>The Beer Bank</h1>

							<p>Find Your Favorite Beer Here</p>
							<InputGroup>
								<FormControl
									placeholder="Search for beer name"
								/>
							</InputGroup>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default Nav;