import * as constants from '../actions/constants';
export default (state = {}, action) => {
   return (action.type === constants.LOGIN) ? action.payload : state;    
};