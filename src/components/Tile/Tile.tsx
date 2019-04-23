import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import './Tile.scss';

interface IProps {
	name: string;
	date: string;
	image: string;
}

class Tile extends Component<IProps> {
	render() {
		const {name, date} = this.props;
		const imgUrl = {
			backgroundImage: 'url(' + this.props.image + ')'
		};

		return (
			<div className="tile">
				<div className="tile__image" style={imgUrl}/>
				<div className="tile__description">
					<span className="text__caption">{name}</span>
					<span className="text__caption text--grey">{date}</span>
					<div className="tile__button">
						<Router>
							<Link to="/details">
								<span className="">Read more</span>
								<FontAwesomeIcon icon='chevron-right'/>
							</Link>
						</Router>
					</div>
				</div>
			</div>
		)
	}
}

export default Tile;
