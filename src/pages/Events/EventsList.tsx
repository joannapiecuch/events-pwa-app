import React, { Component } from 'react';
import Tile from '../../components/Tile/Tile';
import "./EventsList.scss";
import database, { firebase } from '../../firebase/firebase';

interface IProps {
	events: any;
}


class EventsList extends Component<IProps> {
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

	componentWillMount() {
		const wordRef = database.ref('events').limitToLast(10);
		wordRef.on('value', (snapshot: any) => {
			let events = snapshot.val();
			let newState = [];

			console.log(events);
			for ( let event in events ) {
				// newState.push({
				// 	id: word,
				// 	word: words[ word ].word,
				// 	meaning: words[ word ].meaning
				// });
			}
			// this.setState({ words: newState });
		});
	}


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
