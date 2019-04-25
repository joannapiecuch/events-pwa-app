import React, { Component } from 'react';
import './ButtonLoader.scss';

interface IProps {
	isLoading: boolean;
}

class ButtonLoader extends Component<IProps> {
	render() {
		const {isLoading} = this.props;

		return (
			<div></div>
		)
	}
}

export default ButtonLoader;
