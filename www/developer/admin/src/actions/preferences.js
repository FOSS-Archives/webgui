import * as constants from './constants';
import jsonPlaceholder from '../apis/jsonPlaceholder';

const preferences = () => async dispatch => {
   await jsonPlaceholder.get(process.env.REACT_APP_preferences).then( response => {
      dispatch({
         type: constants.PREFERENCES,
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

export { preferences };