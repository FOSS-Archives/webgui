import * as constants from './constants';
import jsonPlaceholder from '../apis/jsonPlaceholder';

const sessions = () => async dispatch => {
   await jsonPlaceholder.get(process.env.REACT_APP_sessions).then( response =>{
      dispatch({
         type: constants.SESSIONS,
         payload: response.data
      });
   })
   .catch( error => {
      dispatch({
         type: constants.MESSAGE,
         payload: { detail: error.response.statusText, sumary: error.response.status }
      });
   });   
};

const deleteSession = (sessions, id) => async dispatch => {
   await jsonPlaceholder.delete(process.env.REACT_APP_sessions + '/' + id)
      .then( response => {
         // Remove the group from all grous that has the id that was just removed from the DB
         var subSessions = sessions.filter( session => {
            return session.id !== id;
         });
         // Update the group set in the store to reflect the removed group
         dispatch({
            type: constants.SESSIONS,
            payload: subSessions
         });         
         
         dispatch({
            type: constants.MESSAGE,
            payload: { detail: "Deleted", severity: "info" }
         });
      })
      .catch( error => {
         dispatch({
            type: constants.MESSAGE,
            payload: { detail: error.response.statusText, sumary: error.response.status }
         });
      });
};

const fetchLoginHistory = () => async dispatch => {
   await jsonPlaceholder.get(process.env.REACT_APP_logins)
      .then( response => {
         dispatch({
            type: constants.LOGINS,
            payload: response.data
         });

      })
      .catch( error => {
         dispatch({
            type: constants.MESSAGE,
            payload: { detail: error.response.statusText, sumary: error.response.status }
         });
      });
};

export { deleteSession, fetchLoginHistory, sessions };