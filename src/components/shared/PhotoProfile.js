import React from 'react';
import PropTypes from 'prop-types';
import './PhotoProfile.module.scss';

const PhotoProfile = (props) => {
	const className = props.className || "";
	return (
		<img className={'rounded-circle ' + className}
			 styleName="photo-profile"
			 width={props.size}
			 height={props.size}
			 alt=""
			 src="https://pbs.twimg.com/profile_images/791933729362944000/bB1XGNfx_bigger.jpg" />
	);
}

PhotoProfile.propTypes = {
	className: PropTypes.string
}

export default PhotoProfile;