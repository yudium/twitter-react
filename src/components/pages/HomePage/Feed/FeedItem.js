import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import './FeedItem.module.scss';
import PhotoProfile from '../../../shared/PhotoProfile';
import TweetRenderer from '../../../shared/TweetRenderer';
import FeedItemHeader from './FeedItemHeader';
import FeedItemFooter from './FeedItemFooter';

const FeedItem = (props) => {
	const { tweet, user } = props.item;
	return (
		<a draggable="false" href="#" styleName="container-link">
			<Container styleName="container">
				<Row>
					<Col md={3} className="text-center"><PhotoProfile size={52} /></Col>
					<Col md={9} style={{marginLeft: '-20px'}}>
						<FeedItemHeader user={user} />
						<TweetRenderer tweet={tweet} styleName="tweet" />
						<FeedItemFooter
							replyCount={props.item.reply_count}
							retweetCount={props.item.retweet_count}
							loveCount={props.item.love_count}
							isLoved={props.item.is_loved}
							isRetweeted={props.item.is_retweeted}
							user={user}
							tweet={tweet}
						 />
					</Col>
				</Row>
			</Container>
		</a>
	)
}

FeedItem.propTypes = {
}

export default FeedItem;