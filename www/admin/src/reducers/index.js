import { combineReducers } from 'redux';
import {errors} from './errors';
import authentication from './authentication';

const rootReducer = combineReducers({
   user: authentication,
   errors: errors
});

export default rootReducer;