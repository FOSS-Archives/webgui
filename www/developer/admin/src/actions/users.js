import * as constants from './constants';
import jsonPlaceholder from '../apis/jsonPlaceholder';
import {epocToFormatDate} from '../util/date/';

export const users = () => async dispatch => {
   const response = await jsonPlaceholder.get(process.env.REACT_APP_users);
   let data = response.data;
   let users = [];
   if ( data && data.data && data.data.length > 0 ){
      users = data.data.map( user => {
         user.created   = epocToFormatDate(user.created);
         user.lastlogin = user.lastlogin ? epocToFormatDate(user.lastlogin) : '';
         user.active = user.active ? 'true' : 'false';
         return user;      
      });
     
      dispatch({
         type: constants.USERS,
         payload: users
      });      
   }   
};
