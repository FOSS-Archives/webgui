import * as constants from './constants';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const login = (username, password) => async (dispatch, storeState) => {
   await jsonPlaceholder.get(process.env.REACT_APP_login_template)
      .then ( response => {
         if (response.data !== undefined && response.data.session){
            dispatch({
               type: constants.LOGIN,
               payload: { ...response.data, authenticated: true }
            });

         }else{
            dispatch({
               type: constants.LOGIN,
               payload: { ...response.data, authenticated: false, severity: 'warn' }
            });
            dispatch({ // Purge the state of the store based on reducers implementation
               type: constants.ERROR,
               payload: { detail: 'Invalid state, please try again.', summary: 'Login failed', severity: 'warn' }
            });
         }
         
      })
      .catch( error => {
         dispatch({
            type: constants.ERROR,
            payload: { detail: "Unknown Error Occured. Server response not received. Check server logs.", summary: '' }
         });
         
      });
   
};

export const logout = () => {
   return {
      type: constants.PURGE,
      payload: null
   };
};