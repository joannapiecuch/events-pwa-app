import React, { Component } from 'react';
import database from '../../firebase/firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Event } from '../event';
import './Details.scss';

interface IProps {
	match: {
		params: {
			id: string,
		}
	}
	history: any;
}

interface IState {
	event?: Event;
}

class Details extends Component<IProps, IState> {
	state: Readonly<IState> = {};

	componentDidMount() {
		const firebaseRef = database.ref(`events/${this.props.match.params.id}`);

		firebaseRef.on('value', (snapshot: any) => {
			this.setState({event: snapshot.val()});
		});
	}

	render() {
		const image = '/images/event.png';
		const {event} = this.state;

		const imgUrl = {
			backgroundImage: 'url(' + image + ')'
		};

		return (
			<div>
				{this.props.match.params.id && <div onClick={this.props.history.goBack} className="icon-back">
							<FontAwesomeIcon icon="arrow-left" />
					</div>}
				{event && <div className="event__details">
            <div className="event__details-image" style={imgUrl}/>
            <div className="event__details-box">
                <div className="title">
                    <h4 className="text__header">{event.name}</h4>
                </div>
                <div className="detail-row">
                    <FontAwesomeIcon className="icon" icon="calendar"/>
                    <span className="text__caption text__caption--bold">{event.date}</span>
                </div>
                <div className="detail-row">
                    <FontAwesomeIcon className="icon" icon="clock"/>
                    <span className="text__caption text__caption--bold">{event.time}</span>
                </div>
                <div className="detail-row">
                    <FontAwesomeIcon className="icon" icon="map-marker"/>
                    <span className="text__caption text__caption--bold">{event.address} {event.city}</span>
                </div>
		            <div className="description">
				            <p className="text__caption text--grey-2">{event.description}</p>
		            </div>
            </div>
        </div>
				}
			</div>
		)
	}
}

export default Details;
