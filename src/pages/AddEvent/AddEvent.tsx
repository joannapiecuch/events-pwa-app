import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import { firebase } from '../../firebase/firebase';
import './AddEvent.scss';
import Button from '../../components/Button/Button';

interface IProps {
}

class AddEvent extends Component<IProps> {
	handleSubmit = (val: any) => {
		firebase.database().ref('events').push(val);
	};

	render() {
		return (
			<div className="event">
				<Form
					onSubmit={this.handleSubmit}
					render={({ handleSubmit, form, submitting, pristine, values }) => (
						<form onSubmit={handleSubmit}>
							<div className="form-group">
								<label>Event name</label>
								<Field
									name="eventName"
									component="input"
									type="text"
									className="form-control"
									placeholder="Event name"
								/>
							</div>
							<div className="form-group">
								<label>Description</label>
								<Field
									name="description"
									component="input"
									type="textarea"
									className="form-control"
									placeholder="Description"
								/>
							</div>
							<Button text='Submit' typeName='primary'/>
							<pre>{JSON.stringify(values)}</pre>
						</form>
					)}
				/>
			</div>
		)
	}
}

export default AddEvent;
