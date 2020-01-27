import { combineReducers } from 'redux';
import auth from './auth/reducer';
import tweet from './tweet/reducer';

const rootReducer = combineReducers({
    auth,
    tweet
});

export default rootReducer;