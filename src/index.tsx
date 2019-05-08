import React from 'react';
import ReactDOM from 'react-dom';
import { askForPermissionToReceiveNotifications, initializeFirebase } from './push-notifications';
import * as serviceWorker from './serviceWorker';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import App from './App';
import './index.scss';

const history = createBrowserHistory();

ReactDOM.render(
	<Router history={history}>
		<Route path="/" component={App}/>
	</Router>
	,document.getElementById('root')
);

serviceWorker.register();
initializeFirebase();
askForPermissionToReceiveNotifications();
