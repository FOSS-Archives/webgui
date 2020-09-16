import { combineReducers } from 'redux';
import {errors} from './errors';
import authentication from './authentication';
import group from './group';
import groups from './groups';
import logins from './logins';
import users from './users';
import sessions from './sessions';

const rootReducer = combineReducers({
   errors: errors,
   groups: groups,
   group: group,
   logins: logins,
   user: authentication,
   sessions: sessions,
   users: users
});

export default rootReducer;