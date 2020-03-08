import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import {errors} from './errors';
import authentication from './authentication';
import users from './users';
import sessions from './sessions';

const rootReducer = combineReducers({
   errors: errors,
   form: formReducer,
   user: authentication,
   sessions: sessions,
   users: users
});

export default rootReducer;