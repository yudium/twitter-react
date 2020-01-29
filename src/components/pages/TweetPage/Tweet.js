import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import './Tweet.module.scss';
import TweetRenderer from '../../shared/TweetRenderer';
import TweetHeader from './TweetHeader';
import TweetFooter from './TweetFooter';

// const ITEM_LIST = [
// 	{id: 1, user: {'username': 'iqbal.ruhadian', name: 'Iqbal Ruhadian', photo: ''}, created_at: 1580087093, tweet: 'test123', love_count: 6, retweet_count: 2, reply_count: 3, is_loved: true, is_retweeted: true},
// 	{id: 2, user: {'username': 'hendi_ginanjar', name: 'Hendi Ginanjar', photo: ''}, created_at: 1580087093, tweet: 'RT @yudi099 lorem ipsum', love_count: 1, retweet_count: 1, reply_count: 0, is_loved: false, is_retweeted: true},
// 	{id: 3, user: {'username': 'yudi099', 		  name: 'Yudi Supriyadi', photo: ''}, created_at: 1580087093, tweet: 'standup comedy @raditya_dika sukses dan asik #standup', love_count: 1, retweet_count: 0, reply_count: 0, is_loved: true, is_retweeted: false},
// ];

// const item = ITEM_LIST[2];

const Tweet = ({ item }) => (
	<Container styleName="container">
		<TweetHeader user={item.user} />
		<TweetRenderer tweet={item.tweet} styleName="tweet" />
		<TweetFooter createdAt={item.created_at} retweetCount={item.retweet_count} loveCount={item.love_count}/>
	</Container>
)

Tweet.propTypes = {
}

export default Tweet;