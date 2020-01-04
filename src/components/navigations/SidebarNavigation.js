import React from 'react';
import PropTypes from 'prop-types';
import { Nav, Button } from 'react-bootstrap';
import logo from '../../logo.png';
import Icon from 'react-fontawesome';

const SidebarNavigation = (props) => (
	<div id="SidebarNavigation">
		<div class="logo-container">
			<img src={logo} alt="twitter logo" width="32" height="32" />
		</div>
		
		<Nav defaultActiveKey={props.location.pathname} id="main-menu" className="flex-column">
			<Nav.Link href="/home"><Icon name="home" /> Home</Nav.Link>
			<Nav.Link href="/home"><Icon name="hashtag" /> Explore</Nav.Link>
			<Nav.Link href="/home"><Icon name="bell-o" /> Notifications</Nav.Link>
			<Nav.Link href="/home"><Icon name="envelope-o" /> Messages</Nav.Link>
			<Nav.Link href="/home"><Icon name="bookmark-o" /> Bookmarks</Nav.Link>
			<Nav.Link href="/home"><Icon name="rocket" /> Profile</Nav.Link>
		</Nav>

		<Button type="button" block>Tweet</Button>
	</div>
);

SidebarNavigation.propTypes = {
	location: PropTypes.shape({
		pathname: PropTypes.string.isRequired
	}).isRequired
}

export default SidebarNavigation;