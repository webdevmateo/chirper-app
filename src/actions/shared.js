import { getInitialData } from '../utils/api.js';
import { receiveTweets } from './tweets.js';
import { receiveUsers } from './users.js';
import { setAuthedUser } from './authedUser.js';

const AUTHED_ID = 'tylermcginnis'

export function handleInitialData () {
  return (dispatch) => {
    return getInitialData()
    .then(({ users, tweets }) => {
        dispatch(receiveUsers(users));
        dispatch(receiveTweets(tweets));
        dispatch(setAuthedUser(AUTHED_ID));
    })
  }
}
