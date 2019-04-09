import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import {errors} from './errors';
import authentication from './authentication';

const rootReducer = combineReducers({
   errors: errors,
   form: formReducer,
   user: authentication
});

export default rootReducer;