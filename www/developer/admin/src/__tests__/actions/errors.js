import * as constants from '../../actions/constants';
import {errors} from  '../../actions/';

describe("Fire error action", () => {
   const payload = "error message";
   const dispatch = { type: constants.ERROR, payload: payload };
   
   test("errors", () => {
      expect(errors(payload)).toEqual(dispatch);
      
   });
   
});