import * as constants from './constants';
export default (login, password) => {
   if (login === 'admin' && password === '123qwe'){
      return {
         type: constants.LOGIN,
         payload: true
      };
   }else{
      console.log(`Invalid login [${login}] and password [${password}].`);
      return {
         type: constants.LOGIN,
         payload: false
      };
   }      
};