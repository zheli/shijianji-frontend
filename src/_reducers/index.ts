import { combineReducers } from 'redux'

import { authentication } from './authentication_reducer';
import { users } from './users_reducer';

const rootReducer = combineReducers({
  authentication,
  users
});

export default rootReducer;
