import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-fontawesome';
import './Reply.module.scss'
import ReplyDialog from './ReplyDialog';

class Reply extends React.Component {
	constructor(props) {
		super(props);
		this.openDialog = this.openDialog.bind(this);
		this.closeDialog = this.closeDialog.bind(this);
		this.state = {isDialogOpen: false};
	}

	openDialog(e) {
		e.preventDefault();
		this.setState({ isDialogOpen: true });
	}

	closeDialog() {
		this.setState({ isDialogOpen: false });
	}

	render() {
		const { count, user, tweet } = this.props;
		const isDialogOpen = this.state.isDialogOpen;
		return (
			<React.Fragment>
				{ isDialogOpen &&
					<ReplyDialog user={user} tweet={tweet} onClose={this.closeDialog} />
				}

				<div styleName="icon-container" onClick={this.openDialog}>
					<Icon fixedWidth name="comment-o" />
				</div>
				<span styleName="number">{count > 0 ? count: ''}</span>
			</React.Fragment>
		);
	}
}

Reply.propTypes = {
	count: PropTypes.number.isRequired
}

export default Reply;