import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Menubar} from 'primereact/menubar';
import {InputText} from 'primereact/inputtext';
import {fetchGroups as groupAction} from '../../actions/groups';
import {users as userAction} from '../../actions/users';
import {sessions as sessionAction, fetchLoginHistory} from '../../actions/sessions';
import {geography} from '../../actions/geography';

class Menus extends Component {
   setNavigation = (route) => {
      switch(route) {
        case "groups":
          this.props.groupAction();
          break;
        case "loginHistory":
          this.props.fetchLoginHistory();
          break;
        case "users":
          this.props.userAction();
          this.props.groupAction();
          this.props.geography();
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
                  command: () => this.setNavigation('sessions'),
                  "icon": "pi pi-key"
               }, 
               {
                  "label": "Groups",
                  command: () => this.setNavigation('groups'),
                  "icon": "pi pi-users"
               },
               {
                  "label": "Login History",
                  command: () => this.setNavigation('loginHistory'),
                  "icon": "pi pi-calendar"
               }, 
               {
                  "label": "Profiling",
                  "command": null,
                  "icon": "pi pi-clock"
               },
               {
                  "label": "Users",
                  command: () => this.setNavigation('users'),
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

export default connect(null, {fetchLoginHistory, groupAction, userAction, sessionAction, geography})(routedMenu);