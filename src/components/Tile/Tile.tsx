import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Tile.scss';
import { Event } from '../../pages/event';

interface IProps {
	event: Event;
}

class Tile extends Component<IProps> {
	render() {
		const {event} = this.props;
		const image='/images/event.png';

		const imgUrl = {
			backgroundImage: 'url(' + image + ')'
		};

		return (
			<Link to={`/details/${event.id}`}>
				<div className="tile">
					<div className="tile__image" style={imgUrl}/>
					<div className="tile__description">
						<span className="text__caption text__caption--bold">{event.name}</span>
						<div className="tile__details">
							<span className="text__caption text--grey">{event.time}</span>
							<span className="divided">-</span>
							<span className="text__caption text--grey">{event.address} {event.city}</span>
						</div>
					</div>
				</div>
			</Link>
		)
	}
}

export default Tile;
