import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import './StatusBar.module.scss';
import PhotoProfile from '../../../shared/PhotoProfile';
import RoundedButton from '../../../shared/RoundedButton';
import Textarea from './Textarea';
import LetterCounter from './LetterCounter';

class StatusBar extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.state = { tweet: '' };
	}

	handleChange(tweet) {
		this.setState({ tweet });
	}

	render() {
		const { maxCharSize } = this.props;
		const { tweet } = this.state;
		return (
			<Container styleName="container">
				<Row>
					<Col md={3} className="text-center"><PhotoProfile size={52} /></Col>
					<Col md={9}><Textarea maxCharSize={maxCharSize} onChange={this.handleChange} /></Col>
				</Row>
				<Row>
					<Col md={3}>{/* intentionally empty */}</Col>
					<Col md={6}><LetterCounter maxCharSize={maxCharSize} tweet={tweet} /></Col>
					<Col md={3}><RoundedButton>Tweet</RoundedButton></Col>
				</Row>
			</Container>		
		);
	}
}

StatusBar.propTypes = {
	maxCharSize: PropTypes.number.isRequired
}

export default StatusBar;