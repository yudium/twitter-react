import React from 'react';
import Icon from 'react-fontawesome';
import './Header.scss';

const Header = (props) => (
	<div id="HomePage--Header" class="d-flex">
		<h1>Home</h1>
		<div class="ml-auto">
			<Icon name="star-half-full" />
		</div>
	</div>
);

export default Header;