import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';

import { firebase } from '../../firebase/firebase';
import Button from '../../components/Button/Button';
import './AddEvent.scss';

interface IProps {
	history: {
		goBack: () => {}
	};
}

interface IState {
	startDate: Date
	startTime: any
}

class AddEvent extends Component<IProps, IState> {
	constructor(props: any) {
		super(props);
		this.state = {
			startDate: new Date(),
			startTime: '00:00'
		};
		this.handleChange = this.handleChange.bind(this);

	}

	handleSubmit = (val: any) => {
		firebase.database().ref('events').push(val);
	};

	handleChange(date: any) {
		this.setState({
			startDate: date
		});
	}

	render() {
		console.log(this.props)
		const required = (value: any) => (value ? undefined : 'This field is required');

		return (
			<div className="event">
				<div onClick={this.props.history.goBack}>
            <FontAwesomeIcon icon="arrow-left" />
        </div>
				<Form
					onSubmit={this.handleSubmit}
					render={({handleSubmit, form, submitting, pristine, invalid}) => (
						<form onSubmit={handleSubmit}>
							<div className="form-group">
								<Field name="name" validate={required}>
									{({input, meta}) => (
										<div>
											<input {...input} type="text" placeholder="Event name" className="form-control"/>
											{meta.error && meta.touched && <span>{meta.error}</span>}
										</div>
									)}
								</Field>
							</div>
							<div className="form-group">
								<Field name="date" validate={required}>
									{({input, meta}) => (
										<div>
											<input {...input} type="date" placeholder="Enter date" className="form-control"/>
											{meta.error && meta.touched && <span>{meta.error}</span>}
										</div>
									)}
								</Field>
							</div>
							<div className="form-group">
								<Field name="time" validate={required}>
									{({input, meta}) => (
										<div>
											<input {...input} type="time" placeholder="Enter date" className="form-control"/>
											{meta.error && meta.touched && <span>{meta.error}</span>}
										</div>
									)}
								</Field>
							</div>
							{/*<div className="form-group">*/}
								{/*<Field name="date" validate={required}>*/}
									{/*{({input, meta}) => (*/}
										{/*<div>*/}
											{/*<DatePicker*/}
												{/*placeholderText="Click to select a date"*/}
												{/*startDate={this.state.startDate}*/}
												{/*selected={this.state.startDate}*/}
												{/*onChange={this.handleChange}*/}
												{/*dateFormat="MMMM d, yyyy"*/}
												{/*className="form-control"*/}
											{/*/>*/}
										{/*</div>*/}
									{/*)}*/}
								{/*</Field>*/}
							{/*</div>*/}
							<div className="form-group">
								<Field name="city" validate={required}>
									{({input, meta}) => (
										<div>
											<input {...input} type="text" placeholder="City" className="form-control"/>
											{meta.error && meta.touched && <span>{meta.error}</span>}
										</div>
									)}
								</Field>
							</div>
							<div className="form-group">
								<Field name="address" validate={required}>
									{({input, meta}) => (
										<div>
											<input {...input} type="text" placeholder="Address" className="form-control"/>
											{meta.error && meta.touched && <span>{meta.error}</span>}
										</div>
									)}
								</Field>
							</div>
							<div className="form-group">
								<Field name="description" validate={required}>
									{({input, meta}) => (
										<div>
											<textarea {...input} placeholder="Description" className="form-control"/>
											{meta.error && meta.touched && <span>{meta.error}</span>}
										</div>
									)}
								</Field>
							</div>
							{/*<div className="form-group">*/}
								{/*<Field name="file" validate={required}>*/}
									{/*{({input, meta}) => (*/}
										{/*<div>*/}
											{/*<div className="drag__field">*/}
												{/*<input {...input} type="file" className="form-control form-control-image"/>*/}
												{/*<span className="drag__field-text">*/}
													{/*Drag and drop or*/}
													{/*<span className="drag__field-text--underline">browse</span>*/}
												{/*</span>*/}
											{/*</div>*/}
											{/*/!*{meta.error && meta.touched && <span>{meta.error}</span>}*!/*/}
										{/*</div>*/}
									{/*)}*/}
								{/*</Field>*/}
							{/*</div>*/}
							<Button text='Submit' typeName='primary' disabled={pristine || invalid} isLoading={true}/>
						</form>
					)}
				/>
			</div>
		)
	}
}

export default AddEvent;
