import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
	faBars,
	faSearch,
	faPlus,
	faArrowLeft,
	faMapMarker,
	faCalendar,
	faClock
} from '@fortawesome/free-solid-svg-icons';

import AddEvent from './pages/AddEvent/AddEvent';
import Details from './pages/Details/Details';
import EventsList from './pages/Events/EventsList';
import './App.scss';

library.add(faBars, faSearch, faPlus, faArrowLeft, faMapMarker, faCalendar, faClock);

class App extends Component {
	render() {
		return (
			<main>
				<div className="app__container">
					<Switch>
						<Route exact path="/" component={EventsList}/>
						<Route exact path="/new-event" component={AddEvent}/>
						<Route path="/details/:id" render={(props) => <Details {...props} />}/>
					</Switch>
				</div>
			</main>
		);
	}
}

export default App;
