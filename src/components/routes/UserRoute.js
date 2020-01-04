import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const UserRoute = ({ isAuthenticated, component: Component, layout: Layout, ...rest }) => (
    <Route {...rest}
        render={props =>
            isAuthenticated ? (
                <Layout><Component {...props} /></Layout>
            ) : (
                <Redirect to="/" />
            ) 
        }
    />
);

UserRoute.propTypes = {
    component: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.func
    ]).isRequired,
    layout: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.func
    ]).isRequired,
    isAuthenticated: PropTypes.bool.isRequired
}

function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.user.token
    }
}

export default connect(mapStateToProps)(UserRoute);