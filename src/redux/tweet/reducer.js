import { TWEET_ADDED } from "./type";

function user(state = {}, action = {}) {
    switch (action.type) {
        case TWEET_ADDED:
            return { tweet: action.tweet };
        default: return state;
    }
}

export default user;