import React from 'react';
import PropTypes from 'prop-types';
import './FeedItemHeader.module.scss';

const FeedItemHeader = ({ user }) => {
	return (
		<div styleName="container">
			<a href="#">
				<strong styleName="underline-hover">{user.name}</strong> &nbsp;
				<span>@{user.username}</span>
			</a>
			&nbsp; &middot; &nbsp;
			<a href="#"><span styleName="underline-hover">1 h</span></a>
		</div>
	)
}

FeedItemHeader.propTypes = {
}

export default FeedItemHeader;