import { combineReducers } from 'redux';
import {errors} from './errors';
import authentication from './authentication';

const rootReducer = combineReducers({
   authenticated: authentication,
   errors: errors
});

export default rootReducer;