import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import AnyRoute from "./components/routes/AnyRoute";
import UserRoute from "./components/routes/UserRoute";
import GuestRoute from './components/routes/GuestRoute';
import Default from './components/layouts/default/Default';
import HomePage from './components/pages/HomePage/HomePage';

const App = () => (
    <React.Fragment>
        <AnyRoute path="/" exact layout={Default} component={HomePage} />
    </React.Fragment>
);

export default App;
