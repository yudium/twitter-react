import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-fontawesome';
import './Retweet.module.scss'
import csx from 'classnames';
import SuccessMessage from '../../../shared/SuccessMessage';

class Retweet extends React.Component {
	constructor(props) {
		super(props);
		this.handleRetweet = this.handleRetweet.bind(this);
		this.state = {
			isRetweeted: props.isRetweeted,
			count: props.count,
			isSuccessMessageShow: false
		};
	}

	handleRetweet(e) {
		e.preventDefault();

		const count = this.state.count + 1;
		this.setState({ count, isRetweeted: true, isSuccessMessageShow: true }, () => {
			setTimeout(() => {
				this.setState({ isSuccessMessageShow: false });
			}, process.env.REACT_APP_MESSAGE_DELAY_IN_MS);
		});
	}

	render() {
		const { count, isRetweeted, isSuccessMessageShow } = this.state;
		return (
			<React.Fragment>
				{ isSuccessMessageShow && <SuccessMessage>Retweet Terkirim</SuccessMessage> }

				<div styleName={csx('icon-container', { active: isRetweeted })}
					 onClick={this.handleRetweet}>
					<Icon fixedWidth name="retweet" />
				</div>
				<span styleName="number">{count > 0 ? count : ''}</span>
			</React.Fragment>
		);
	}
}

Retweet.propTypes = {
	isRetweeted: PropTypes.bool.isRequired,
	count: PropTypes.number.isRequired
}

export default Retweet;