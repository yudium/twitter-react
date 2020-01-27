import React from 'react';
import PropTypes from 'prop-types';
import { Form, InputGroup } from 'react-bootstrap';
import Icon from 'react-fontawesome';
import  './SearchBar.module.scss';
import SearchDropdown from './SearchDropdown';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {query: ''};
    }

    handleChange(e) {
        this.setState({ query: e.target.value });
    }

    render() {
        return (
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
                          required
                          onChange={this.handleChange}
                        />
                      </InputGroup>
                </Form>
                { this.state.query && <SearchDropdown query={this.state.query} /> }
            </div>
        );
    }
}

SearchBar.propTypes = {
}

export default SearchBar;