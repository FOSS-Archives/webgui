import React from 'react';
import {shallow} from 'enzyme';
import Header from '../../components/navigation/Header';

describe("Header portion of menu", () => {
   const title = 'Our title';
   const header = shallow(<Header title={title} />);
   
   test("renders correctly", () => {
      expect(header).toMatchSnapshot();
   });
   
   test("contains the header text", () => {
      expect(header.find('.header-title').text()).toEqual(title);
   });
});