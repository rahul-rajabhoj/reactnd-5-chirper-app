import { getInitialData } from '../utils/api';

import { receiveTweets } from '../actions/tweets';
import { receiveUsers } from '../actions/users';

export function handleInitialData() {
    return (dispatch) => {
        return getInitialData()
            .then(({users, tweets}) => {
                dispatch(receiveTweets(tweets));
                dispatch(receiveUsers(users));
            }) 
    }
}