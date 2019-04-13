import * as constants from '../../actions/constants';
import {getMenus} from '../../actions/';

describe("Testing actions", () => {
   const menus = [];
   const expectedAction = { type: constants.MENUS, menus };
   
   test("get menu items", () => {
      expect(getMenus()).toEqual(expectedAction);
   });
   
});