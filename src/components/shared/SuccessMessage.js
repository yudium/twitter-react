import React from 'react';
import PropTypes from 'prop-types';
import './SuccessMessage.module.scss';

/* Credit to: https://stackoverflow.com/a/41078668 */
class SuccessMessage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {visible: true};
	}

	render() {
		return (
			<React.Fragment>
			{ this.state.visible &&
				<div styleName="container">
					<svg styleName="checkmark"
						 xmlns="http://www.w3.org/2000/svg"
						 viewBox="0 0 52 52">
						<circle styleName="checkmark__circle"
								cx="26"
								cy="26"
								r="25"
								fill="none">
						</circle>
						<path styleName="check mark__check"
							  fill="none"
							  d="M14.1 27.2l7.1 7.2 16.7-16.8">
						</path>
					</svg>
					<h3 className="text-center">{this.props.children}</h3>
				</div>
			}
			</React.Fragment>
		);
	}
}

SuccessMessage.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.string.isRequired,
		PropTypes.element.isRequired
	]).isRequired
}

export default SuccessMessage;