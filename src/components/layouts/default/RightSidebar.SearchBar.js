import React from 'react';
import PropTypes from 'prop-types';
import { Form, InputGroup } from 'react-bootstrap';
import Icon from 'react-fontawesome';

const SearchBar = (props) => (
	<div id="SearchBar">
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

SearchBar.propTypes = {
	location: PropTypes.shape({
		pathname: PropTypes.string.isRequired
	}).isRequired
}

export default SearchBar;