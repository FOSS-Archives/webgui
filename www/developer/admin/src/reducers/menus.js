import * as constants from '../actions/constants';

const menuReducer = (menus = {}, action) => {
   switch(action.type){
      case constants.MENUS:
         return action.menu;
      
      default:
         return menus;
   }   

};

export default menuReducer;