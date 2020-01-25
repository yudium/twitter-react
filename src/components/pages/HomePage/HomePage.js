import React from 'react';
import './HomePage.module.scss';
import Header from './Header';
import StatusBar from './StatusBar/StatusBar';
import Feed from './Feed/Feed';

const HomePage = (props) => (
    <div styleName="container">
    	<Header />

    	<StatusBar />

    	<Feed />
    </div>
);

export default HomePage;