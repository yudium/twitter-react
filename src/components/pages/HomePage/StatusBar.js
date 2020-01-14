import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Button, ProgressBar } from 'react-bootstrap';
import './StatusBar.scss';
import Textarea from './StatusBar.Textarea';


class StatusBar extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			tweet: 'What\'s Happening?',
			progressBar: {percent: 0, label: 0, variant: 'info'},
			height: null
		};
	}

	handleChange(e) {
		const maxCharSize = 120;
		// const tweetLength = e.target.value.length;
		const tweetLength = e.currentTarget.textContent.length;
		const percent = tweetLength / maxCharSize * 100;

		let variant = 'info';
		let label = '';
		if (tweetLength > maxCharSize) {
			variant = 'danger';
			label = `-${(tweetLength - maxCharSize)}`;
		}
		this.setState({ progressBar: {percent, label, variant} });
		this.setState({ tweet: e.currentTarget.textContent });

		console.log('hehe');

	    // const height = this.divElement.clientHeight	;
	    // this.setState({ height });
	}

	render() {
		const progressBar = this.state.progressBar;
		return (
			<Container id="HomePage--StatusBar">
				<Row>
					<Col md={3} className="text-center">
						<img className="rounded-circle" width="52" height="52" alt="" src="https://pbs.twimg.com/profile_images/791933729362944000/bB1XGNfx_bigger.jpg" />
					</Col>
					<Col md={9}>
						<Textarea maxCharSize={120} />
					</Col>
				</Row>
				<Row>
					<Col md={3}>{/* intentionally empty */}</Col>
					<Col md={6}>
						<ProgressBar striped variant={progressBar.variant} now={progressBar.percent} label={progressBar.label} />
						<div className="d-flex">
							<span>0</span>
							<span className="ml-auto">250</span>
						</div>
					</Col>
					<Col md={3}>
						<Button variant="primary" className="rounded-pill">Tweet</Button>
					</Col>
				</Row>
			</Container>		
		);
	}
}

StatusBar.propTypes = {
	
}

export default StatusBar;