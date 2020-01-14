import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, ListGroup, Button, Row, Col } from 'react-bootstrap';
import Icon from 'react-fontawesome';

const TrendBar = (props) => (
  <div id="TrendBar">
    <Card>
      <Card.Header>
        <Row>
          <Col md={8}>Indonesia trends</Col>
          <Col className="text-right">
            <Button type="button"><Icon name="cog"></Icon></Button>
          </Col>
        </Row>
      </Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <span>1 &middot; Trending</span>
          <h5>Cras justo odio</h5>
          <p>32.1K Tweets</p>
        </ListGroup.Item>
        <ListGroup.Item>
          <span>1 &middot; Trending</span>
          <h5>Cras justo odio</h5>
          <p>32.1K Tweets</p>
        </ListGroup.Item>
      </ListGroup>
      <Card.Footer className="text-muted">
        <Link to="/home">Show more</Link>
      </Card.Footer>
    </Card>
  </div>
);

TrendBar.propTypes = {

}

export default TrendBar;