import React, { Component } from 'react';
import './Button.scss';

interface IProps {
	text: string;
	typeName: string;
}

class Button extends Component<IProps> {
	render() {
		const {text, typeName} = this.props;

		return (
			<button className={`btn btn--${typeName}`}>{text}</button>

		)
	}
}

export default Button;
