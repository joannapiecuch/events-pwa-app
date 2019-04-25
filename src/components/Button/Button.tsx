import React, { Component } from 'react';
import './Button.scss';
import ButtonLoader from '../ButtonLoader/ButtonLoader';

interface IProps {
	text: string;
	typeName: string;
	disabled: boolean;
	isLoading: boolean;
}

class Button extends Component<IProps> {
	render() {
		const {text, typeName, disabled, isLoading} = this.props;
		let loader;

		if (isLoading) {
			loader =  <ButtonLoader isLoading={isLoading} />;
		}

		return (
			<button className={`btn btn--${typeName}`} disabled={disabled}>
				{text}
				{loader}
			</button>
		)
	}
}

export default Button;
