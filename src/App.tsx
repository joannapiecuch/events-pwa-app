import React, { Component } from 'react';
import Header from './components/Header/Header';
import './App.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import AddEvent from './pages/AddEvent/AddEvent';
import EventsList from './pages/Events/EventsList';

library.add(faBars);
library.add(faSearch);

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header/>
				<AddEvent/>
				<EventsList events={{}}/>
			</div>
		);
	}
}

export default App;
