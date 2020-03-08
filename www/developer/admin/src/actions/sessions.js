import * as constants from './constants';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const sessions = () => async dispatch => {
   const response = await jsonPlaceholder.get(process.env.REACT_APP_sessions);
   dispatch({
      type: constants.SESSIONS,
      payload: response.data
   });
};
