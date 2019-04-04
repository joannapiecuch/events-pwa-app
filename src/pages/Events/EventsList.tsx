import React, { Component } from 'react';
import Tile from '../../components/Tile/Tile';
import "./EventsList.scss";

class EventsList extends Component {
	events = [
		{
			"id": 1,
			"name": "JavaScript Event",
			"date": "20-03-2019",
			"image": "/images/4dev.png"
		},
		{
			"id": 2,
			"name": "JavaScript Event",
			"date": "20-03-2019",
			"image": "/images/4dev.png"
		},
		{
			"id": 3,
			"name": "JavaScript Event",
			"date": "20-03-2019",
			"image": "/images/4dev.png"
		},
	];

	render() {
		console.log(this.events);
		const listItems = this.events.map(event =>
			<Tile
				key={event.id}
				name={event.name}
				date={event.date}
				image={event.image}
			/>
		);
		return (
			<div className="events">
				<div className="events__list">
					<ul>{listItems}</ul>
				</div>
			</div>
		)
	}
}

export default EventsList;
