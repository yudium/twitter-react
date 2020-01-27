import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Feed.module.scss';
import FeedItem from './FeedItem';
import moment from 'moment';

const ITEM_LIST = [
	{id: 1, user: {'username': 'iqbal.ruhadian', name: 'Iqbal Ruhadian', photo: ''}, created_at: 1580087093, tweet: 'test123', love_count: 6, retweet_count: 2, reply_count: 3, is_loved: true, is_retweeted: true},
	{id: 2, user: {'username': 'hendi_ginanjar', name: 'Hendi Ginanjar', photo: ''}, created_at: 1580087093, tweet: 'RT @yudi099 lorem ipsum', love_count: 1, retweet_count: 1, reply_count: 0, is_loved: false, is_retweeted: true},
	{id: 3, user: {'username': 'yudi099', 		  name: 'Yudi Supriyadi', photo: ''}, created_at: 1580087093, tweet: 'standup comedy @raditya_dika sukses dan asik #standup', love_count: 1, retweet_count: 0, reply_count: 0, is_loved: true, is_retweeted: false},
];

class Feed extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		if (this.props.newTweet) {
			ITEM_LIST.unshift(
				{id: 4, user: {'username': 'yudi099', name: 'Yudi Supriyadi', photo: ''}, created_at: (moment().unix()), tweet: this.props.newTweet, love_count: 0, retweet_count: 0, reply_count: 0, is_loved: false, is_retweeted: false}
			);			
		}
		const items = ITEM_LIST.map((item) => {
			return <FeedItem key={item.id} item={item} />
		});

		return (
			<div styleName="container">
				{items}
			</div>
		);
	}
}

Feed.propTypes = {
}

function mapStateToProps(state) {
    return {
        newTweet: state.tweet.tweet
    }
}

export default connect(mapStateToProps)(Feed);