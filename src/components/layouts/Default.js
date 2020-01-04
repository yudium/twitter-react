import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import SidebarNavigation from '../navigations/SidebarNavigation';

const Default = (props) => (
	<Container>
		<Row>
			<Col md={3}>
				<SidebarNavigation location={props.location} />
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