import React, { Component } from 'react';
import './Button.scss';

interface IProps {
	type: string;
	text: string;
}

class Button extends Component<IProps> {
	render() {
		const {type, text} = this.props;

		return (
			<button className={`btn btn--${type}`}>{text}</button>
		)
	}
}

export default Button;
