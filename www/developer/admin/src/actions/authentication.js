import * as constants from './constants';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const login = (username, password) => async (dispatch, storeState) => {
   let loginTemplate = `?op=auth&method=login&username=${username}&identifier=${password}`;
   if (process.env.NODE_ENV === 'development'){
      loginTemplate = `login/1`;
      console.log("Always login in development ");
   
   }
   const response = await jsonPlaceholder.get(loginTemplate);

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
      dispatch({ // Purge the state of the store based on reducers implementation
         type: constants.ERROR,
         payload: { detail: 'Invalid login or password', summary: 'My Sumary' }
      });
   }    
};

export const logout = () => {
   return {
      type: constants.PURGE,
      payload: null
   };
};