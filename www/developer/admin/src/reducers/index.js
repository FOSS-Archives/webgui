import { combineReducers } from 'redux';
import messages from './messages';
import authentication from './authentication';
import countries from './countries';
import group from './group';
import groups from './groups';
import logins from './logins';
import preferences from './preferences';
import sessions from './sessions';
import states from './states';
import timezones from './timezones';
import users from './users';
import user from './user';

const rootReducer = combineReducers({
   countries: countries,
   messages: messages,
   groups: groups,
   group: group,
   logins: logins,
   loggedInUser: authentication,
   preferences: preferences,
   sessions: sessions,
   states: states,
   timezones: timezones,
   users: users,
   user: user
});

export default rootReducer;