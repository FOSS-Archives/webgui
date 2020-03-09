import * as constants from './constants';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const login = (username, password) => async (dispatch, storeState) => {
   let loginTemplate = `?op=auth&method=login&username=${username}&identifier=${password}`;
   if (process.env.NODE_ENV === 'development'){
      loginTemplate = `login/55f97ffd69-47jq2`;
      console.log("Always login in development");
   }

   try{
      const response = await jsonPlaceholder.get(loginTemplate);
      if (response.data !== undefined && response.data.session){
         dispatch({
            type: constants.LOGIN,
            payload: { ...response.data, authenticated: true }
         });

      }else{
         dispatch({
            type: constants.LOGIN,
            payload: { ...response.data, authenticated: false }
         });
         dispatch({ // Purge the state of the store based on reducers implementation
            type: constants.ERROR,
            payload: { detail: 'Invalid state, please try again.', summary: 'Login failed' }
         });
      }  
      
   }catch(e){
      dispatch({
         type: constants.ERROR,
         payload: { detail: "Unknown Error Occured. Server response not received. Check server logs.", summary: '' }
      });
      
   }
   
};

export const logout = () => {
   return {
      type: constants.PURGE,
      payload: null
   };
};