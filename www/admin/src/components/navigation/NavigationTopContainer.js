import React from 'react';
import {Menubar} from 'primereact/menubar';
import {InputText} from 'primereact/inputtext';
import Login from '../authentication/LoginContainer';
import menus from './navigation-top-container';

export default props => {
   return (
      <Menubar model={menus}>
          <InputText placeholder="Search" type="text" />
          <Login authenticated={props.authenticated} />
      </Menubar>
   );
};