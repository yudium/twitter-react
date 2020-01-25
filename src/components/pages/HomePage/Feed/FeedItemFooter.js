import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import './FeedItemFooter.module.scss';
import Reply from './Reply';
import Retweet from './Retweet';
import Love from './Love';

class FeedItemFooter extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { replyCount, retweetCount, loveCount, isLoved, isRetweeted, user, tweet } = this.props;
		return (
			<Container styleName="container">
				<Row>
					<Col md={4}><Reply user={user} tweet={tweet} count={replyCount} /></Col>
					<Col md={4}><Retweet count={retweetCount} isRetweeted={isRetweeted} /></Col>
					<Col md={4}><Love count={loveCount} isLoved={isLoved} /></Col>
				</Row>
			</Container>
		);
	}
}

FeedItemFooter.propTypes = {
	replyCount: PropTypes.number.isRequired,
	retweetCount: PropTypes.number.isRequired,
	loveCount: PropTypes.number.isRequired,
	isLoved: PropTypes.bool.isRequired,
	isRetweeted: PropTypes.bool.isRequired
}

export default FeedItemFooter;