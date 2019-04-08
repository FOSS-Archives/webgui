import * as constants from './constants';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const login = (login, password) => async (dispatch, storeState) => {
   const response = await jsonPlaceholder.get(`?op=auth&method=login&username=${login}&identifier=${password}`);
 
   if (response.data !== undefined && response.data.joined){
      dispatch({
         type: constants.LOGIN,
         payload: { ...response.data, authenticated: true }
      });
      
   }else{
      dispatch({
         type: constants.LOGIN,
         payload: { authenticated: false }
      });
      
   }      
};

export const logout = () => {
   return {
      type: constants.LOGIN,
      payload: { authenticated: false }
   };
};