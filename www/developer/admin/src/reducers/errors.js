import * as constants from '../actions/constants';

export function errors(errors = [], action){
   switch (action.type) {
      case constants.ERROR:
         return [action.payload];
    
      case constants.PURGE:
         return null;
      
      default:
         return errors;
   }

}