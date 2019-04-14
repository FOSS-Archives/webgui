import * as constants from '../actions/constants';

export function errors(erros = null, action){
   switch (action.type) {
      case constants.ERROR:
         return action.payload;
    
      case constants.PURGE:
         return action.payload;
      
      default:
         return erros;
   }

}