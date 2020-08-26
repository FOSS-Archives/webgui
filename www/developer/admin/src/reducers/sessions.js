import * as constants from '../actions/constants';
export default (state = [], action) => {
   switch(action.type){
      case constants.SESSIONS:
         return action.payload;
         
      case constants.PURGE:
         return null;
      
      default:
         return state;
   } 
};