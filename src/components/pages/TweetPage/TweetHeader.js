import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import './TweetHeader.module.scss';
import PhotoProfile from '../../shared/PhotoProfile';

const TweetHeader = ({ user }) => (
	<Container styleName="container">
		<Row>
			<Col md={3}><PhotoProfile size={52} /></Col>
			<Col md={9} style={{marginLeft: '-40px'}}>
				<div styleName="name">
					<a href="#">
						<strong styleName="underline-hover">{user.name}</strong>
						<span>@{user.username}</span>
					</a>
				</div>
			</Col>
		</Row>
	</Container>
);

TweetHeader.propTypes = {
}

export default TweetHeader;