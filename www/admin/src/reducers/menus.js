import * as constants from '../actions/constants';

const menuReducer = (state = {}, action) => {
   switch(action.type){
      case constants.MENUS:
         return action.menu;
      
      default:
         return state;
   }   

};

export default menuReducer;