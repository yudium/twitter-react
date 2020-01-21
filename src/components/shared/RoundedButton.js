import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import './RoundedButton.module.scss';

const RoundedButton = (props) => {
	const className = props.className || "";
	return (
		<Button variant="primary" className={'rounded-pill ' + className} styleName="roundedButton">
			{props.children}
		</Button>
	);
}

RoundedButton.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.string.isRequired,
		PropTypes.element.isRequired
	]).isRequired,
	className: PropTypes.string
}

export default RoundedButton;