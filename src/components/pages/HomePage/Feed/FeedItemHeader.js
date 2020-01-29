import React from 'react';
import PropTypes from 'prop-types';
import './FeedItemHeader.module.scss';
import moment from 'moment';

class FeedItemHeader extends React.Component {
	constructor(props) {
		super(props);
		// createdAt is seconds since epoch so we multiply it by 10000
		this.state = {relativeTime: moment().from(this.context.created_at * 1000, true)};
	}

	componentDidMount() {
		setInterval(() => {
			this.setState({ relativeTime: moment().from(this.this.context.created_at * 1000, true) })
		}, 10000); // 10 second with 5 as average, I think this is not too long or too short
	}

	render() {
		const { user, createdAt } = this.props;
		const { relativeTime } = this.state;
		return (
			<div styleName="container">
				<a href="#">
					<strong styleName="underline-hover">{user.name}</strong> &nbsp;
					<span>@{user.username}</span>
				</a>
				&nbsp; &middot; &nbsp;
				<a href="#"><span styleName="underline-hover">{relativeTime}</span></a>
			</div>
		)
	}
}

FeedItemHeader.propTypes = {
	user: PropTypes.shape({
		name: PropTypes.string.isRequired,
		username: PropTypes.string.isRequired
	}),
	createdAt: PropTypes.number.isRequired
}

export default FeedItemHeader;