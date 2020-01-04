import React from 'react';
import PropTypes from 'prop-types';
import { Form, InputGroup } from 'react-bootstrap';
import Icon from 'react-fontawesome';

const RightSidebar = (props) => (
	<div id="RightSidebar">
	    <Form inline>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroupPrepend"><Icon name="search" /></InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              type="text"
              name="search"
              placeholder="Twitter Search"
              aria-describedby="inputGroupPrepend"
              required
            />
          </InputGroup>
	    </Form>
	</div>
);

RightSidebar.propTypes = {
	location: PropTypes.shape({
		pathname: PropTypes.string.isRequired
	}).isRequired
}

export default RightSidebar;