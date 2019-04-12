import * as constants from './constants';
import jsonPlaceholder from '../apis/jsonPlaceholder';
import {epocToFormatDate} from '../util/date/';

export const users = () => async dispatch => {
   const response = await jsonPlaceholder.get('users');

   let users = [];
   if ( response.data && response.data.length > 0 ){
      users = response.data.map( user => {
         user.created   = epocToFormatDate(user.created);
         user.expires   = user.expires ? epocToFormatDate(user.expires) : '';
         user.lastlogin = user.lastlogin ? epocToFormatDate(user.lastlogin) : '';
         user.active = user.active === '1' ? 'true' : 'false';
         return user;      
      });
     
      dispatch({
         type: constants.USERS,
         payload: users
      });      
   }   
};
