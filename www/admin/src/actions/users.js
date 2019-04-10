import * as constants from './constants';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const users = () => async dispatch => {
   const response = await jsonPlaceholder.get('users');
   dispatch({
      type: constants.USERS,
      payload: response.data
   });
};
