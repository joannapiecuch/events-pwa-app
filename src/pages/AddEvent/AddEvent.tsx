import React, { Component } from 'react';
import {Form, Field} from 'react-final-form';
import Button from '../../components/Button/Button';

export interface IFormProps {
	error?: string;
	initialValues?: any;
}

class AddEvent extends Component<IFormProps> {
	handleSubmit = () => {
		console.log('Submit')
	};

	render() {
		return (
			<div className="event">
				<Form
					onSubmit={this.handleSubmit}
					render={({ handleSubmit, form, submitting, pristine, values }) => (
						<form onSubmit={handleSubmit}>
							<div className="form-group">
								<Field
									name="title"
									component="input"
									type="text"
									placeholder="Tytuł"
									className="form-control"
								/>
							</div>
							<Button type={'black'} text={'Submit'}/>
							<button type="submit" className="btn btn-primary" disabled={submitting || pristine}>Dodaj wydarzenie</button>
						</form>
					)}
				/>
			</div>
		)
	}
}

export default AddEvent;
