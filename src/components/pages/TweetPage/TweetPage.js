import React from 'react';
import PropTypes from 'prop-types';
import './TweetPage.module.scss';
import Header from './Header';
import Tweet from './Tweet';

const TweetPage = (props) => {
	const item = props.location.state.item;
	return (
	    <div styleName="container">
	    	<Header />
	    	<Tweet item={item} />
	    </div>
	)
}

TweetPage.propTypes = {
}

export default TweetPage;