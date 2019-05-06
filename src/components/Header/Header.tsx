import React from 'react';
import { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Header.scss';

class Header extends Component {
	render() {
		return (
			<header className='header'>
				<Router>
					{/*<img src="/images/back.svg" alt="Logo" />*/}
					{/*<img src="/images/test.svg" alt="Logo" />*/}
					<Link to="/new-event">
					</Link>
				</Router>
			</header>
		)
	}
}

export default Header;

