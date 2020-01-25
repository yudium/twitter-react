import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, Container, Row, Col } from 'react-bootstrap';
import PhotoProfile from '../PhotoProfile';
import './MentionDropdown.module.scss';

const MENTION_LIST=['@yudi099', '@iqbal.ruhadian', '@hendi_ginanjar', '@dekur12'];

const MentionDropdown = (props) => {
	let mentions = MENTION_LIST.filter((item) => 
		item.search(props.mention) !== -1
	);
	mentions = mentions.map((mention, index) => (
		<ListGroup.Item styleName="item" key={index} onClick={(e) => props.onSelected(mention)}>
			<Container>
		  	<Row>
		  		<Col md={3}><PhotoProfile size={32} /></Col>
		  		<Col md={9}>
		  			<div>Yudi Supriyadi</div>
		  			<div>{mention}</div>
		  		</Col>
		  	</Row>
		  	</Container>
	  	</ListGroup.Item>
	));
	
	if (mentions.length === 0) return null;
	return (
		<ListGroup styleName="container">
			{mentions}
		</ListGroup>
	);
}

MentionDropdown.propTypes = {

}

export default MentionDropdown;