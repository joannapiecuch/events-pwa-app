import React from 'react';
import { Component } from 'react';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { BrowserRouter, Router, Route, Link } from 'react-router-dom';

class Header extends Component {
	render() {
		return (
			<header className='header'>
				<a>
					<FontAwesomeIcon icon='bars'/>
				</a>
				{/*<Router>*/}
					{/*<ul className='menu__list'>*/}
						{/*<li className='menu__element'>*/}
							{/*test*/}
							{/*/!*<Link to="/">Add new event</Link>*!/*/}
						{/*</li>*/}
						{/*<li className='menu__element'>*/}
							{/*/!*<Link to="/">Events list</Link>*!/*/}
						{/*</li>*/}
					{/*</ul>*/}
				{/*</Router>*/}
			</header>
		)
	}

}

export default Header;

