import React, { Component } from 'react';
import database from '../../firebase/firebase';

import Tile from '../../components/Tile/Tile';
import './EventsList.scss';
import { Event } from '../event';

interface IProps {
}

interface IState {
	events: Event[]
}

class EventsList extends Component<IProps, IState> {

	constructor(props: any) {
		super(props);
		this.state = {
			events: [],
		};
	}

	getTime(date?: Date) {
		return date != null ? new Date(date).getTime() : 0;
	}

	componentWillMount() {
		const firebaseRef  = database.ref('events').limitToLast(10);
		firebaseRef.on('value', (snapshot: any) => {
			let events = snapshot.val();
			let newState = [];

			for ( let event in events ) {
				newState.push({
					id: event,
					name: events[event].name,
					address: events[event].address,
					city: events[event].city,
					description: events[event].description,
					date: events[event].date,
					time: events[event].time,
				});
			}

			this.setState({events: newState});
		});
	}

	private prepareContacts() {
		const result = [];
		for ( const contact of this.state.events ) {
			if ( result[contact.date] === undefined ) {
				result[contact.date] = [];
			}

			console.log(result)
			// result[contact.date].push(contact);
		}
	}


	render() {
		const listItems = this.state.events
			.sort((a: Event, b: Event) => this.getTime(a.date) - this.getTime(b.date))
			.map(event =>
				<Tile
					key={event.id}
					event={event}
				/>
			);
		return (
			<div className="events">
				<div className="events__list">
					{this.state.events && this.state.events.length === 0 && <p>List is empty</p>}
					<ul>{listItems}</ul>
				</div>
			</div>
		)
	}
}

export default EventsList;
