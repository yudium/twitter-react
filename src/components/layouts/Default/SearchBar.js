import React from 'react';
import PropTypes from 'prop-types';
import { Form, InputGroup } from 'react-bootstrap';
import Icon from 'react-fontawesome';
import  './SearchBar.module.scss';

const SearchBar = (props) => (
	<div styleName="container">
	    <Form inline>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text styleName="input-group-prepend"><Icon name="search" /></InputGroup.Text>
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
}

export default SearchBar;