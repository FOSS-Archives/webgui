import React from 'react';
import {withRouter} from 'react-router';
import {Menubar} from 'primereact/menubar';
import {InputText} from 'primereact/inputtext';
import Login from '../authentication/LoginContainer';

const Menus = props => {
   const options = [
         {
            "label": "Home",
            command:()=> props.history.push('/'),
            "icon": "pi pi-home"  
         },
         {
            "label": "Assets",
            "command": null,
            "icon": "pi pi-th-large",
            "items": [
               {
                  "label": "History",
                  "command": null,
                  "icon": "pi pi-calendar"
               },
               {
                  "label": "List",
                  "command": null,
                  "icon": "pi pi-list"
               }
            ]
         },
         {
            "label": "Content",
            "command": null,
            "icon": "pi pi-images"  
         },
         {
            "label": "Settings",
            "command": null,
            "icon": "pi pi-cog",
            "items" : [
               {
                  "label": "Upgrade",
                  "icon": "pi pi-spin pi-spinner"
               }
            ]
         },
         {
            "label": "Auth",
            "command": null,
            "icon": "pi pi-fw pi-user",
            "items": [
               {
                  "label": "Active Sessions",
                  "command": null,
                  "icon": "pi pi-key"
               }, 
               {
                  "label": "Groups",
                  "command": null,
                  "icon": "pi pi-users"
               },
               {
                  "label": "Login History",
                  "command": null,
                  "icon": "pi pi-calendar"
               }, 
               {
                  "label": "Profiling",
                  "command": null,
                  "icon": "pi pi-clock"
               },
               {
                  "label": "Users",
                  command:()=> props.history.push('/users'),
                  "icon": "pi pi-list"
               }
            ]
         }
      ];
      
   return (
      <Menubar model={options}>
          <InputText placeholder="Search" type="text" />
          <Login authenticated={props.authenticated} />
      </Menubar>
   );
};

export default withRouter(Menus);