import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-fontawesome';
import './Love.module.scss'
import csx from 'classnames';

class Love extends React.Component {
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.state = {isLoved: props.isLoved, count: props.count};
	}

	toggle(e) {
		e.preventDefault();

		const newIsLoved = !this.state.isLoved;

		let newCount;
		if (newIsLoved) {
			newCount = this.state.count + 1;
		} else {
			newCount = this.state.count - 1;
		}

		this.setState({ isLoved: newIsLoved, count: newCount });
	}

	render() {
		const { count, isLoved } = this.state;
		return (
			<React.Fragment>
				<div styleName={csx('icon-container', { active: isLoved })}
					 onClick={this.toggle}>
					<Icon fixedWidth name={isLoved ? 'heart' : 'heart-o'} />
				</div>
				<span styleName="number">{count > 0 ? count : ''}</span>
			</React.Fragment>
		);
	}
}

Love.propTypes = {
	isLoved: PropTypes.bool.isRequired,
	count: PropTypes.number.isRequired
}

export default Love;