import * as constants from '../../actions/constants';
import menuReducer from '../../reducers/menus';

describe("menusReducer", () => {
   const menu = { "title": "Angular" };
   
   test("title menu", () => {
      expect(menuReducer(null, { type: constants.MENUS, menu } )).toEqual(menu);
      
   });
   
});
