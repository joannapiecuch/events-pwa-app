import React, { Component } from 'react';
import './Tile.scss';

interface IProps {
	name: string;
	date: string;
	image: string;
}

class Tile extends Component<IProps> {
	render() {
		const {name, date} = this.props;
		const imgUrl = {
			backgroundImage: 'url(' + this.props.image + ')'
		};

		return (
			<div className="tile">
				<div className="tile__image" style={imgUrl}></div>
				<div className="tile__description">
					<span className="text__header-4">{name}</span>
					<span className="text__caption text--grey">{date}</span>
				</div>
			</div>
		)
	}
}

export default Tile;
