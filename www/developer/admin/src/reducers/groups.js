import * as constants from '../actions/constants';
export default (state = [], action) => {
   switch(action.type){
      case constants.GROUPS:
         return action.payload;
         
      case constants.PURGE:
         return null;
      
      default:
         return state;
   } 
};