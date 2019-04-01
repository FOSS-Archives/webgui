import React from 'react';
import {shallow} from 'enzyme';
import { AppContainer } from '../../components/AppContainer';

describe('AppContainer', () => {
   const mockGetMenus = jest.fn();
   const props = { getMenus: mockGetMenus };
   const app = shallow(<AppContainer {...props} />);

   test("AppContainer renders properly", () => {
      expect(app).toMatchSnapshot();
   });
   
   test("AppContainer must contain `App` control", () => {
      //console.log(app.debug());
      expect(app.find('App').exists()).toBe(true);
      
   });
   
});