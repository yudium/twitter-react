import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import './Default.scss';

const Default = (props) => (
	<Container>
		<Row>
			<Col md={3}>
				<LeftSidebar location={props.location} />
			</Col>
			<Col md={5}>
				{props.children}
			</Col>
			<Col md={4}>
				<RightSidebar location={props.location} />
			</Col>
		</Row>
	</Container>
);

Default.propTypes = {
	children: PropTypes.oneOfType([
    	PropTypes.element,
    	PropTypes.func
    ]).isRequired
}

export default Default;