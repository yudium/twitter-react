import React from 'react';
import PropTypes from 'prop-types';
import escape from 'escape-html';
import './TweetRenderer.module.scss';

const TweetRenderer = ({ tweet, placeholder = '', className = '' }) => {
	const maxCharSize = process.env.REACT_APP_TWEET_MAXCHARSIZE;

	let htmlTweet = tweet;
	if (tweet.length > maxCharSize) { 
		// coloring excess characters 
		htmlTweet = tweet.substr(0, maxCharSize) + 'START_HIGHLIGHT_RED' + tweet.substr(maxCharSize)  + 'END_HIGHLIGHT_RED';
	}
	htmlTweet = htmlTweet.replace(/[\n\r]/g, 'NEWLINE'); // replace newline to <br>
	htmlTweet = htmlTweet.replace(/(@[a-zA-Z0-9_.]+)/g, 'START_HIGHLIGHT_BLUE $1 END_HIGHLIGHT_BLUE' ); // coloring mention
	htmlTweet = htmlTweet.replace(/(#[a-zA-Z0-9_]+)/g, 'START_HIGHLIGHT_BLUE $1 END_HIGHLIGHT_BLUE' ); // coloring hashtag

	htmlTweet = escape(htmlTweet); // html escape
	htmlTweet = htmlTweet.replace(/START_HIGHLIGHT_RED/g, 	'<span>');
	htmlTweet = htmlTweet.replace(/END_HIGHLIGHT_RED/g, 	'</span>')
	htmlTweet = htmlTweet.replace(/START_HIGHLIGHT_BLUE /g, '<i>');
	htmlTweet = htmlTweet.replace(/ END_HIGHLIGHT_BLUE/g, 	'</i>');
	htmlTweet = htmlTweet.replace(/NEWLINE/g, 				'<br>');

	return (
		<div styleName="tweet"
			 className={className}
			 dangerouslySetInnerHTML={{__html: htmlTweet || placeholder}}>
		</div>
	);
}

TweetRenderer.propTypes = {
	tweet: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
}

export default TweetRenderer;