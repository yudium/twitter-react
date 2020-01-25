import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import Icon from 'react-fontawesome';
import PhotoProfile from '../../../shared/PhotoProfile';
import FeedItemHeader from './FeedItemHeader';
import TweetEditor from '../../../shared/TweetEditor/TweetEditor';
import TweetRenderer from '../../../shared/TweetRenderer';
import RoundedButton from '../../../shared/RoundedButton';
import './ReplyDialog.module.scss';

class ReplyDialog extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { user, tweet } = this.props;
		return (
			<Container styleName="container">
				<Card styleName="dialog">
					<Card.Header styleName="header">
						<Button type="button" onClick={this.props.onClose}><Icon name="times" /></Button>
					</Card.Header>
					<Card.Body>
						<Container>
							<Row className="mb-4">
								<Col md={3}>
									<div styleName="photo"><PhotoProfile size={52} /></div>
									<div styleName="line"></div>
								</Col>
								<Col md={9} style={{marginLeft: '-40px'}}>
									<FeedItemHeader user={user} />
									<TweetRenderer tweet={tweet} styleName="tweet" />

									<div class="text-muted mt-3">
										Replying to <span class="text-primary">@{user.username}</span>
									</div>
								</Col>
							</Row>
							<Row>
								<Col md={3}>
									<div styleName="photo"><PhotoProfile size={52} /></div>
								</Col>
								<Col md={9} style={{marginLeft: '-40px'}}>
									<TweetEditor placeholder="Tweet your reply" onChange={() => {}} />
								</Col>
							</Row>
						</Container>
					</Card.Body>
					<Card.Footer>
						<RoundedButton className="float-right pl-3 pr-3">Tweet</RoundedButton>
					</Card.Footer>
				</Card>
			</Container>
		);
	}
}

ReplyDialog.propTypes = {
}

export default ReplyDialog;