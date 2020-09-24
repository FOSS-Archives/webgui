import * as constants from './constants';
import jsonPlaceholder from '../apis/jsonPlaceholder';

const geography = () => async dispatch => {
   await jsonPlaceholder.get(process.env.REACT_APP_geography).then( response => {
      dispatch({
         type: constants.COUNTRIES,
         payload: response.data.countries
      });
      dispatch({
         type: constants.STATES,
         payload: response.data.states
      });      
      dispatch({
         type: constants.TIMEZONES,
         payload: response.data.timezones
      });
   })
   .catch( error => {
      dispatch({
         type: constants.ERROR,
         payload: { detail: error.response.statusText, sumary: error.response.status }
      });
   });   
};

export { geography };