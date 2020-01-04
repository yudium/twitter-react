import React from 'react';
import PropTypes from 'prop-types';
import { Route } from "react-router-dom";

const AnyRoute = ({ component: Component, layout: Layout, ...rest }) => (
    <Route {...rest}
            render={props => <Layout location={props.location}><Component {...props} /></Layout>}
    />
);

AnyRoute.propTypes = {
    component: PropTypes.oneOfType([
    	PropTypes.element,
    	PropTypes.func
    ]).isRequired,
    layout: PropTypes.oneOfType([
    	PropTypes.element,
    	PropTypes.func
    ]).isRequired
}

export default AnyRoute;