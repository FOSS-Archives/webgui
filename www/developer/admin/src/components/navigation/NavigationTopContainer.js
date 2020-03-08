import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Menubar} from 'primereact/menubar';
import {InputText} from 'primereact/inputtext';
import {users as userAction} from '../../actions/users';
import {sessions as sessionAction} from '../../actions/sessions';

class Menus extends Component {
   setModule = (route) => {
      switch(route) {
        case "users":
          this.props.userAction();
          break;
        case "sessions":
          this.props.sessionAction();
          break;
        default:
          console.log("Invalid action");
      }      
      this.props.history.push('/' + route);
   }
   
   options = [
         {
            "label": "Home",
            command: () => this.props.history.push('/'),
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
                  command: () => this.setModule('sessions'),
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
                  command: () => this.setModule('users'),
                  "icon": "pi pi-list"
               }
            ]
         }
      ];
      
   render(){
      return (
         <Menubar model={this.options}>
             <InputText placeholder="Search" type="text" />
             {this.props.loginContainer}
         </Menubar>
      );
   }
};

const routedMenu = withRouter(Menus);

export default connect(null, {userAction, sessionAction})(routedMenu);