import React, { Component } from 'react';
import database, { firebase } from '../../firebase/firebase';

import { Event } from '../event';

interface IProps {
	match: any;
}

interface IState {
	events: Event[];
	test: any;
}

class Details extends Component<IProps, IState> {
	constructor(props: any) {
		super(props);
		this.state = {
			events: [],
			test: {},
		};
	}

	componentWillMount() {
		const firebaseRef  = database.ref('events').limitToLast(10);
		const test = firebaseRef.ref.child(this.props.match.params.id).once('value').then((snapshot:any) => snapshot.val());
		this.setState({test: test});

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


	render() {
		const event = this.state.events.find((event: Event) => event.id === this.props.match.params.id);
		console.log(this.state.test)
		return (
			<div className="event">
				<h1>test</h1>
				{/*{this.state.test }*/}
			</div>
		)
	}
}

export default Details;
