import React from 'react';
import {shallow} from 'enzyme';
import App from '../../components/App';

describe('App', () => {
   const props = { items: [{ "title": "Angular" }] };
   const app = shallow(<App {...props} />);

   test("App renders properly", () => {
      expect(app).toMatchSnapshot();
   });
   
   test("Add emty item array", () => {
      console.log(app.debug());
      //expect().toBe(true);
      
   });
   
});