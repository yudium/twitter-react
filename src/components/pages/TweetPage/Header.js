import React from 'react';
import Icon from 'react-fontawesome';
import './Header.module.scss';
import {withRouter} from 'react-router-dom';

const Header = (props) => (
	<div styleName="container">
		<div className="mr-4" styleName="icon-container">
			<Icon name="arrow-left" onClick={() => props.history.goBack()} />
		</div>
		<h1>Tweet</h1>
	</div>
);

export default withRouter(Header);