import React from 'react';
import PropTypes from 'prop-types';
import { Nav, Button } from 'react-bootstrap';
import logo from '../../../logo.png';
import Icon from 'react-fontawesome';
import './LeftSidebar.scss';

const LeftSidebar = (props) => (
	<div id="LeftSidebar">
		<div class="logo-container">
			<img src={logo} alt="twitter logo" width="32" height="32" />
		</div>
		
		<Nav defaultActiveKey={props.location.pathname} id="main-menu">
			<Nav.Link href="/home"><Icon name="home" 		fixedWidth /> Home</Nav.Link>
			<Nav.Link href="/home"><Icon name="hashtag" 	fixedWidth /> Explore</Nav.Link>
			<Nav.Link href="/home"><Icon name="bell-o" 		fixedWidth /> Notifications</Nav.Link>
			<Nav.Link href="/home"><Icon name="envelope-o" 	fixedWidth /> Messages</Nav.Link>
			<Nav.Link href="/home"><Icon name="bookmark-o" 	fixedWidth /> Bookmarks</Nav.Link>
			<Nav.Link href="/home"><Icon name="rocket" 		fixedWidth /> Profile</Nav.Link>
		</Nav>

		<Button type="button" block>Tweet</Button>
	</div>
);

LeftSidebar.propTypes = {
	location: PropTypes.shape({
		pathname: PropTypes.string.isRequired
	}).isRequired
}

export default LeftSidebar;