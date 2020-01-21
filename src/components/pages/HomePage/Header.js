import React from 'react';
import Icon from 'react-fontawesome';
import './Header.module.scss';

const Header = (props) => (
	<div styleName="container">
		<h1>Home</h1>
		<div className="ml-auto">
			<Icon name="star-half-full" />
		</div>
	</div>
);

export default Header;