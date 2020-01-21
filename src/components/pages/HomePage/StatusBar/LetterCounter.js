import React from 'react';
import PropTypes from 'prop-types';
import { ProgressBar } from 'react-bootstrap';
import './LetterCounter.module.scss';

const LetterCounter = ({ maxCharSize, tweet }) => {
	const tweetLength = tweet.length;
	const percent = tweetLength / maxCharSize * 100;

	let variant = 'info';
	let label = '';
	if (tweetLength > maxCharSize) {
		variant = 'danger';
		label = `-${(tweetLength - maxCharSize)}`;
	}

	return (
		<div styleName="container">
			<ProgressBar striped variant={variant} now={percent} label={label} />
			<div className="d-flex">
				<span>0</span>
				<span className="ml-auto">{maxCharSize}</span>
			</div>			
		</div>
	);
};

LetterCounter.propTypes = {
	tweet: PropTypes.string.isRequired,
	maxCharSize: PropTypes.number.isRequired
}

export default LetterCounter;