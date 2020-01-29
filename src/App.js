import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import AnyRoute from "./components/routes/AnyRoute";
import UserRoute from "./components/routes/UserRoute";
import GuestRoute from './components/routes/GuestRoute';
import Default from './components/layouts/Default/Default';
import HomePage from './components/pages/HomePage/HomePage';
import TweetPage from './components/pages/TweetPage/TweetPage';

const App = () => (
    <React.Fragment>
        <AnyRoute path="/" exact layout={Default} component={HomePage} />
        <AnyRoute path="/tweet" exact layout={Default} component={TweetPage} />
    </React.Fragment>
);

export default App;
