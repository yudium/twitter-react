import React from 'react';
import PropTypes from 'prop-types';
import './TweetEditor.module.scss';
import TweetRenderer from '../TweetRenderer';
import MentionDropdown from './MentionDropdown';

class TweetEditor extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.openMentionDropdown = this.openMentionDropdown.bind(this);
		this.handleSelectedMention = this.handleSelectedMention.bind(this);
		this.state = {
			tweet:  '',
			recentTypedMention: '' 
		};
		this.textareaRef = React.createRef();
	}

	componentDidUpdate(prevProps) {
		// allow parent component to set tweet value by changing props.tweet value.
		// this is useful when parent component want to clear current tweet by set
		// props.tweet to empty string
		if (this.props.tweet !== prevProps.tweet) {
			this.setState({ tweet: this.props.tweet });
		}
	}

	handleChange(e) {
		const tweet = e.target.value;
		this.setState({ tweet });

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

		this.setState({ tweet }, () => {
			const newCursorPosition = (textBeforeCursor + mention).length;
			textarea.setSelectionRange(newCursorPosition, newCursorPosition);
			textarea.focus();
		});
	}

	render() {
		const { tweet, recentTypedMention } = this.state;
		return (
			<div styleName="container">
				<textarea
					ref={this.textareaRef}
					value={tweet}
					onChange={this.handleChange}
					onKeyUp={this.openMentionDropdown}
					spellCheck={false}>
				</textarea>
				<TweetRenderer
					tweet={tweet}
					placeholder={this.props.placeholder}
					styleName="display">
				</TweetRenderer>

				{ recentTypedMention &&
					<MentionDropdown mention={recentTypedMention} onSelected={this.handleSelectedMention} />
				}
			</div>
		);
	}
}

TweetEditor.propTypes = {
	onChange: PropTypes.func,
	placeholder: PropTypes.string
}

export default TweetEditor;