import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import './Button.scss';

interface IProps {
	text: string;
	typeName: string;
	icon?: boolean;
	submit?: () => {}
}

class Button extends Component<IProps> {
	render() {
		const {text, typeName, icon, submit} = this.props;

		return (
			<button
				className={`btn btn--${typeName}`}
				onClick={submit}
			>
				{text}
				{icon ? <FontAwesomeIcon icon='arrow-right'/> : ''}
			</button>

		)
	}
}

export default Button;
