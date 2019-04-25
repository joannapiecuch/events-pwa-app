import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

ReactDOM.render(
	<Router history={history}>
		<Route path="/" component={App}/>
	</Router>
	,document.getElementById('root')
);

serviceWorker.unregister();
