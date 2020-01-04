import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import LeftSidebar from '../navigations/LeftSidebar';

const Default = (props) => (
	<Container>
		<Row>
			<Col md={3}>
				<LeftSidebar location={props.location} />
			</Col>
			<Col md={6}>
				{props.children}
			</Col>
			<Col md={3}></Col>
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