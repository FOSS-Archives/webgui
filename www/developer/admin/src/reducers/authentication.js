import * as constants from '../actions/constants';
export default (state = {}, action) => {
   switch (action.type) {
      case constants.LOGIN:
         return action.payload;
    
      case constants.PURGE:
         return action.payload;
      
      default:
         return state;
   } 
};