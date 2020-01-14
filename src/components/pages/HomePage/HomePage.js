import React from 'react';
import Icon from 'react-fontawesome';
import './HomePage.scss';
import StatusBar from './StatusBar';

const HomePage = (props) => (
    <div id="HomePage">
    	<div className="header d-flex">
    		<h1>Home</h1>
    		<div className="ml-auto"><Icon name="star-half-full" /></div>
    	</div>

    	<StatusBar />
    </div>
);

export default HomePage;