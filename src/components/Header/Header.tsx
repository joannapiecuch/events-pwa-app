import React from 'react';
import { Component } from 'react';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BrowserRouter as Router, Link } from 'react-router-dom';

class Header extends Component {
	render() {
		return (
			<header className='header'>
				<a>
					<FontAwesomeIcon icon='bars'/>
				</a>
				<Router>
					<Link to="/new-event">
						<FontAwesomeIcon icon='plus'/>
					</Link>
				</Router>
			</header>
		)
	}
}

export default Header;

