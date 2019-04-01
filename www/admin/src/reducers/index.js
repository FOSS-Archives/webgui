import { combineReducers } from 'redux';
import {errors} from './errors';

const rootReducer = combineReducers({
  errors: errors
});

export default rootReducer;