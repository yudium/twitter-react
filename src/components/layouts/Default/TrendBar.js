import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, ListGroup, Button, Row, Col } from 'react-bootstrap';
import Icon from 'react-fontawesome';
import './TrendBar.module.scss'

const TrendBar = (props) => (
  <div styleName="container">
    <Card styleName="card">
      <Card.Header styleName="card-header">
        <Row>
          <Col md={8}>Indonesia trends</Col>
          <Col className="text-right">
            <Button type="button"><Icon name="cog"></Icon></Button>
          </Col>
        </Row>
      </Card.Header>
      <ListGroup variant="flush" styleName="list-group">
        <ListGroup.Item styleName="list-group-item">
          <span>1 &middot; Trending</span>
          <h5>Cras justo odio</h5>
          <p>32.1K Tweets</p>
        </ListGroup.Item>
        <ListGroup.Item styleName="list-group-item">
          <span>1 &middot; Trending</span>
          <h5>Cras justo odio</h5>
          <p>32.1K Tweets</p>
        </ListGroup.Item>
      </ListGroup>
      <Card.Footer className="text-muted" styleName="card-footer">
        <Link to="/home">Show more</Link>
      </Card.Footer>
    </Card>
  </div>
);

TrendBar.propTypes = {
}

export default TrendBar;