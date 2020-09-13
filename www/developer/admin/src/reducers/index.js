import { combineReducers } from 'redux';
import {errors} from './errors';
import authentication from './authentication';
import groups from './groups';
import users from './users';
import sessions from './sessions';

const rootReducer = combineReducers({
   errors: errors,
   groups: groups,
   user: authentication,
   sessions: sessions,
   users: users
});

export default rootReducer;