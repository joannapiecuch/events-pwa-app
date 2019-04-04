import React, { Component } from 'react';
import {Form, Field} from 'react-final-form';

interface IProps {
	event: any;
	onSubmit: string;
}

class AddEvent extends Component<IProps> {
	handleSubmit() {

	}

	render() {
		const {onSubmit} = this.props;

		return (
			<div className="event">
				<Form
					onSubmit={onSubmit}
					render={({ handleSubmit, form }) => (
						<form onSubmit={handleSubmit}>
							<div className="form-group">
								<Field
									name="title"
									component="input"
									type="text"
									placeholder="Tytuł posta"
									className="form-control"
								/>
							</div>
							<div className="form-group">
								<Field
									name="content"
									component="textarea"
									type="text"
									placeholder="Treść posta"
									className="form-control"
								/>
							</div>
							{/*<button type="submit" className="btn btn-primary" disabled={submitting || pristine}>Edytuj post</button>*/}
						</form>
					)}
				/>
			</div>
		)
	}
}

export default AddEvent;
