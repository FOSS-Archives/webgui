import * as constants from '../actions/constants';
export default (state = [], action) => {
   switch(action.type){
      case constants.SESSIONS:
         return action.payload.data;
         
      case constants.PURGE:
         return null;
      
      default:
         return state;
   } 
};