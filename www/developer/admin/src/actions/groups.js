import * as constants from './constants';
import jsonPlaceholder from '../apis/jsonPlaceholder';

const groups = () => async dispatch => {
   const response = await jsonPlaceholder.get(process.env.REACT_APP_groups);
   dispatch({
      type: constants.GROUPS,
      payload: response.data
   });
};

const deleteGroup = id => async dispatch => {
   await jsonPlaceholder.delete(process.env.REACT_APP_groups + '/' + id)
      .then( response => {
         dispatch({
            type: constants.MESSAGE_OK,
            payload: { detail: "Group deleted", type: "OK" }
         });
      })
      .catch( error => {
         dispatch({
            type: constants.ERROR,
            payload: { detail: error.response.statusText, sumary: error.response.status }
         });
      });
};

export { deleteGroup, groups };