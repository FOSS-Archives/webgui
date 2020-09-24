import * as constants from './constants';
import jsonPlaceholder from '../apis/jsonPlaceholder';
import {epocToFormatDate} from '../util/date/';

const users = () => async dispatch => {
   const response = await jsonPlaceholder.get(process.env.REACT_APP_users);
   let data = response.data;
   let users = [];
   if ( data && data.length > 0 ){
      users = data.map( user => {
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

const updateUser = (user) => async dispatch => {
   dispatch({
      type: constants.USER,
      payload: user
   });      
};

const saveUser = (users, user) => async dispatch => {
   await jsonPlaceholder.put(process.env.REACT_APP_users + '/' + user.id, user)
      .then( response => {
         // Edit the group in the array of groups
         let editedUsers = [];
         users.forEach( current => {
            if ( current.id === user.id ){
               current = user;
            }
            editedUsers.push(current);
         });
         // Update the group set in the store to reflect the edited group
         dispatch({
            type: constants.USERS,
            payload: editedUsers
         });
         
         dispatch({
            type: constants.MESSAGE,
            payload: { detail: "Updated", severity: "info" }
         });

      })
      .catch( error => {
         dispatch({
            type: constants.MESSAGE,
            payload: { detail: error.response.statusText, sumary: error.response.status }
         });
      });   
   
};

export { users, saveUser, updateUser };