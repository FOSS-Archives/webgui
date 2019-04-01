import React, {Component} from 'react';
import {Menubar} from 'primereact/menubar';
import {InputText} from 'primereact/inputtext';
import Login from '../LoginContainer';
import menus from './navigation-top-container';

class NavigationTopContainer extends Component {
   constructor(props){
      super(props);
      this.state = {
         menus: menus
      };
   }

   render() {
      return (
         <Menubar model={this.state.menus}>
             <InputText placeholder="Search" type="text" />
             <Login authenticated={this.props.authenticated} />
         </Menubar>
      );
   }
};

export default NavigationTopContainer;