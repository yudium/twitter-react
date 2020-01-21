import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import TrendBar from './TrendBar';
import './RightSidebar.module.scss';

const RightSidebar = (props) => (
  <div styleName="container">
    <SearchBar />
    <TrendBar />
  </div>
);

RightSidebar.propTypes = {
	location: PropTypes.shape({
		pathname: PropTypes.string.isRequired
	}).isRequired
}

export default RightSidebar;