import React from 'react';
import PropTypes from 'prop-types';
import './Textarea.module.scss';
import escape from 'escape-html';
import MentionDropdown from './MentionDropdown';

class Textarea extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.openMentionDropdown = this.openMentionDropdown.bind(this);
		this.handleSelectedMention = this.handleSelectedMention.bind(this);
		this.placeholder = 'What\'s Happening?';
		this.state = {
			tweet: '',
			htmlTweet: '',
			recentTypedMention: '' 
		};
		this.textareaRef = React.createRef();
	}

	renderTweet(tweet, stateChangedCallback = null) {
		const { maxCharSize } = this.props;

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

		this.setState({ tweet, htmlTweet }, stateChangedCallback);		
	}

	handleChange(e) {
		e.preventDefault()
		const tweet = e.target.value;
		this.renderTweet(tweet);
		this.props.onChange(tweet);
	}

	openMentionDropdown(e) {
		const cursorPosition = this.textareaRef.current.selectionStart;
		const { tweet } = this.state;
		const textBeforeCursor = tweet.substr(0, cursorPosition);
		const textAfterCursor = tweet.substr(cursorPosition);

		const preMention = (textBeforeCursor.match(/@[a-zA-Z0-9_.]+$/) || '').toString();
		const postMention = (textAfterCursor.match(/^[a-zA-Z0-9_.]+/) || '').toString();
		if (preMention) {
			this.setState({ recentTypedMention: preMention + postMention });
		} else {
			this.setState({ recentTypedMention: '' });
		}
	}

	handleSelectedMention(mention) {
		this.setState({ recentTypedMention: '' });

		const textarea = this.textareaRef.current;
		const cursorPosition = textarea.selectionStart;
		let textBeforeCursor = this.state.tweet.substr(0, cursorPosition);
		let textAfterCursor = this.state.tweet.substr(cursorPosition);

		mention = mention + ' '; // making space to the right text
		const tweet = textBeforeCursor.replace(/@[a-zA-Z0-9_.]+$/, '') + // remove left part mention
					  mention +
					  textAfterCursor.replace(/^[a-zA-Z0-9_.]+/, ''); // remove right part mention if exists

		this.renderTweet(tweet, () => {
			const newCursorPosition = (textBeforeCursor + mention).length;
			textarea.setSelectionRange(newCursorPosition, newCursorPosition);
			textarea.focus();
		});
	}

	render() {
		const { tweet, htmlTweet, recentTypedMention } = this.state;
		return (
			<div styleName="container">
				<textarea
					ref={this.textareaRef}
					value={tweet}
					spellCheck={false}
					onChange={this.handleChange}
					onKeyUp={this.openMentionDropdown}>
				</textarea>
				<div styleName="display" dangerouslySetInnerHTML={{__html: htmlTweet || this.placeholder}}></div>
				{ recentTypedMention &&
					<MentionDropdown mention={recentTypedMention} onSelected={this.handleSelectedMention} />
				}
			</div>
		);
	}
}

Textarea.propTypes = {
	maxCharSize: PropTypes.number.isRequired,
	onChange: PropTypes.func.isRequired
}

export default Textarea;