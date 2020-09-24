import * as constants from './constants';

export default (message) => {
   return {
      type: constants.MESSAGE,
      payload: message
   };
};