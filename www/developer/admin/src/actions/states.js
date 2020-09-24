import * as constants from './constants';
import jsonPlaceholder from '../apis/jsonPlaceholder';

const states = () => async dispatch => {
   await jsonPlaceholder.get(process.env.REACT_APP_states).then( response => {
      dispatch({
         type: constants.STATES,
         payload: response.data
      });
   })
   .catch( error => {
      dispatch({
         type: constants.ERROR,
         payload: { detail: error.response.statusText, sumary: error.response.status }
      });
   });   
};

export { states };