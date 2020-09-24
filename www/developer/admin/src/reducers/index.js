import { combineReducers } from 'redux';
import {errors} from './errors';
import authentication from './authentication';
import group from './group';
import groups from './groups';
import logins from './logins';
import users from './users';
import user from './user';
import sessions from './sessions';
import states from './states';

const rootReducer = combineReducers({
   errors: errors,
   groups: groups,
   group: group,
   logins: logins,
   loggedInUser: authentication,
   sessions: sessions,
   states: states,
   users: users,
   user: user
});

export default rootReducer;