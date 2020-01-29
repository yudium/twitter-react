import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import './TweetFooter.module.scss';
import moment from 'moment';

const TweetFooter = ({ createdAt, retweetCount, loveCount }) => (
	<React.Fragment>
		<div className="text-muted" styleName="time">
			{moment.unix(createdAt).format('h:mm ')}
			{' '}
			{moment.unix(createdAt).hour() > 12 ? 'PM' : 'AM'}
			{' '}
			&middot;
			{' '}
			{moment.unix(createdAt).format('MMM D, YYYY')}
		</div>

		<Container styleName="container">
			<Row>
				<Col md={4}>
					<strong>{retweetCount}</strong> <span className="text-muted">Retweets</span>
				</Col>
				<Col md={8} style={{marginLeft: '-30px'}}>
					<strong>{loveCount}</strong> <span className="text-muted">Loves</span>
				</Col>
			</Row>
		</Container>
	</React.Fragment>
);

TweetFooter.propTypes = {
}

export default TweetFooter;