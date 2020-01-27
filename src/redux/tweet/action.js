import { TWEET_ADDED } from './type';
import api from '../../api';

export const tweetAdded = (tweet) => ({
    type: TWEET_ADDED,
    tweet
});

export const addTweet = (tweet) => {
    return (dispatch) => {
        return api.tweet.create(tweet).then(response => {
        	if (response.status === 200) {
            	dispatch(tweetAdded(tweet));
        	}
        	return response;
        });
    }
}