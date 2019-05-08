import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import database from '../../firebase/firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Tile from '../../components/Tile/Tile';
import { getTokens } from '../../push-notifications';
import { Event } from '../event';
import './EventsList.scss';

interface IProps {
}

interface IState {
	events: Event[];
	query: string
}

class EventsList extends Component<IProps, IState> {

	constructor(props: any) {
		super(props);
		this.state = {
			events: [],
			query: ''
		};
	}


	getTime(date?: Date) {
		return date != null ? new Date(date).getTime() : 0;
	}

	componentDidMount() {
		database.ref('events')
			.on('value', (snapshot: any) => {
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
				<Link to="/new-event">
					<div className="events__button">
						<FontAwesomeIcon icon="plus"/>
					</div>
				</Link>
				<div className="events__header">
					<h1 className="text__header">All events</h1>
					<button onClick={getTokens}>Get</button>
				</div>
				<form className="search">
					<FontAwesomeIcon icon="search"/>
					<input className="form-control-search" type="text" placeholder="Search event"/>
				</form>
				<div className="events__list">
					{this.state.events && this.state.events.length === 0 && <p>List is empty</p>}
					<ul>{listItems}</ul>
				</div>
			</div>
		)
	}
}

export default EventsList;
