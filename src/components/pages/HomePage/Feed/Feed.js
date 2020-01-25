import React from 'react';
import PropTypes from 'prop-types';
import './Feed.module.scss';
import FeedItem from './FeedItem';

class Feed extends React.Component {
	constructor(props) {
		super(props);
		this.state = {items: null};
	}

	componentDidMount() {
		const ITEM_LIST = [
			{user: {'username': 'iqbal.ruhadian', name: 'Iqbal Ruhadian', photo: ''}, created_at: 1579572318, tweet: 'test123', love_count: 6, retweet_count: 2, reply_count: 3, is_loved: true, is_retweeted: true},
			{user: {'username': 'hendi_ginanjar', name: 'Hendi Ginanjar', photo: ''}, created_at: 1579572119, tweet: 'RT @yudi099 lorem ipsum', love_count: 1, retweet_count: 1, reply_count: 0, is_loved: false, is_retweeted: true},
			{user: {'username': 'yudi099', 		  name: 'Yudi Supriyadi', photo: ''}, created_at: 1579572139, tweet: 'standup comedy @raditya_dika sukses dan asik #standup', love_count: 1, retweet_count: 0, reply_count: 0, is_loved: true, is_retweeted: false},
		];

		const items = ITEM_LIST.map((item, index) => {
			return <FeedItem key={index} item={item} />
		});

		this.setState({ items });
	}

	render() {
		const { items } = this.state;
		return (
			<div styleName="container">
				{items}
			</div>
		);
	}
}

Feed.propTypes = {
	
}

export default Feed;