import * as constants from './constants';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const groups = () => async dispatch => {
   const response = await jsonPlaceholder.get(process.env.REACT_APP_groups);
   dispatch({
      type: constants.GROUPS,
      payload: response.data
   });
};
