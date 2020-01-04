import React from 'react';
import PropTypes from 'prop-types';
import { Nav, Button } from 'react-bootstrap';
import logo from '../../logo.png';

const SidebarNavigation = (props) => (
	<React.Fragment>
		<div id="logo-container">
			<img id="logo" src={logo} alt="twitter logo" width="28" height="28" />
		</div>
		
		<Nav defaultActiveKey={props.location.pathname} className="flex-column">
			<Nav.Link href="/home">Home</Nav.Link>
			<Nav.Link href="/home">Explore</Nav.Link>
			<Nav.Link href="/home">Notifications</Nav.Link>
			<Nav.Link href="/home">Messages</Nav.Link>
			<Nav.Link href="/home">Bookmarks</Nav.Link>
			<Nav.Link href="/home">Profile</Nav.Link>
		</Nav>

		<Button type="button">Tweet</Button>
	</React.Fragment>
);

SidebarNavigation.propTypes = {
	location: PropTypes.shape({
		pathname: PropTypes.string.isRequired
	}).isRequired
}

export default SidebarNavigation;