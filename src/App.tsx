import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faSearch, faPlus, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import Header from './components/Header/Header';
import AddEvent from './pages/AddEvent/AddEvent';
import Details from './pages/Details/Details';
import EventsList from './pages/Events/EventsList';

library.add(faBars, faSearch, faPlus, faChevronRight);

class App extends Component {
	render() {
		return (
			<main>
				<Header/>
				<Switch>
					<Route exact path="/" component={EventsList}/>
					<Route exact path="/new-event" component={AddEvent}/>
					<Route exact path="/details" component={Details}/>
				</Switch>
			</main>
		);
	}
}

export default App;
