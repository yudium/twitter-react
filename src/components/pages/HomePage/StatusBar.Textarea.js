import React from 'react';
import PropTypes from 'prop-types';
import escape from 'escape-html';

class Textarea extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.placeholder = 'What\'s Happening?';
		this.state = {
			tweet: '',
			htmlTweet: ''
		};
	}

	handleChange(e) {
		e.preventDefault()

		const maxCharSize = this.props.maxCharSize;
		const tweet = e.target.value;

		// coloring excess characters
		let htmlTweet = null;
		if (tweet.length > maxCharSize) {
			htmlTweet = tweet.substr(0, maxCharSize) + 'START_HIGHLIGHT_RED' + tweet.substr(maxCharSize)  + 'END_HIGHLIGHT_RED';
		} else {
			htmlTweet = tweet;
		}
		htmlTweet = htmlTweet.replace(/[\n\r]/g, 'NEWLINE'); // replace newline to <br>
		htmlTweet = htmlTweet.replace(/(@\w+)/g, 'START_HIGHLIGHT_BLUE \$1 END_HIGHLIGHT_BLUE' ); // coloring mention
		htmlTweet = htmlTweet.replace(/(#\w+)/g, 'START_HIGHLIGHT_BLUE \$1 END_HIGHLIGHT_BLUE' ); // coloring hashtag

		htmlTweet = escape(htmlTweet); // html escape
		htmlTweet = htmlTweet.replace('START_HIGHLIGHT_RED', 	'<span>');
		htmlTweet = htmlTweet.replace('END_HIGHLIGHT_RED', 		'</span>')
		htmlTweet = htmlTweet.replace('START_HIGHLIGHT_BLUE', 	'<i>');
		htmlTweet = htmlTweet.replace('END_HIGHLIGHT_BLUE', 	'</i>')
		htmlTweet = htmlTweet.replace('NEWLINE', 				'<br>') // replace newline to <br>

		this.setState({ tweet, htmlTweet });
	}

	render() {
		const { htmlTweet, tweet } = this.state;
		return (
			<div id="StatusBar--Textarea">
				<textarea spellcheck="false" onChange={this.handleChange}></textarea>
				<div className="display" dangerouslySetInnerHTML={{__html: htmlTweet || this.placeholder}}></div>
			</div>
		);
	}
}

Textarea.propTypes = {
	
}

export default Textarea;