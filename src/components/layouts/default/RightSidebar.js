import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './RightSidebar.SearchBar';
import TrendBar from './RightSidebar.TrendBar';
import './RightSidebar.scss';

const RightSidebar = (props) => (
  <div id="RightSidebar">
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