import * as constants from './constants';

export default (error) => {
   return {
      type: constants.ERROR,
      payload: error
   };
};