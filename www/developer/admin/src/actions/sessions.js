import * as constants from './constants';
import jsonPlaceholder from '../apis/jsonPlaceholder';

const sessions = () => async dispatch => {
   const response = await jsonPlaceholder.get(process.env.REACT_APP_sessions);
   dispatch({
      type: constants.SESSIONS,
      payload: response.data
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
            type: constants.MESSAGE_OK,
            payload: { detail: "Deleted" }
         });
      })
      .catch( error => {
         dispatch({
            type: constants.ERROR,
            payload: { detail: error.response.statusText, sumary: error.response.status }
         });
      });
};

export { deleteSession, sessions };