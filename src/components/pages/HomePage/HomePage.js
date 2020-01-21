import React from 'react';
import './HomePage.module.scss';
import Header from './Header';
import StatusBar from './StatusBar/StatusBar';

const HomePage = (props) => (
    <div styleName="container">
    	<Header />

    	<StatusBar maxCharSize={120} />
    </div>
);

export default HomePage;