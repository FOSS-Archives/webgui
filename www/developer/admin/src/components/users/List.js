import React, {Component} from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import { updateUser } from '../../actions/users';

import './List.css';
class Users extends Component {
   constructor() {
      super();
      this.state = {
         selected: null
      };
   }
   
   displaySelection(event) {
      this.props.updateUser(event.value);      
      let route = '/user/' + event.value.id;
      this.props.history.push(route);
   }
  
   render(){
      return (
         <div className="user-list">
            <DataTable value={this.props.users} selectionMode="single" header="Users" selection={this.state.selected}
               onSelectionChange={e => this.displaySelection(e)}>
               <Column field="id" header="ID" />                 
               <Column field="username" header="Username" />
               <Column field="avatar" header="Avatar" />
               <Column field="email" header="Email" />
               <Column field="firstname" header="First Name" />
               <Column field="lastname" header="Last Name" />
               <Column field="created" header="Created" />
               <Column field="lastlogin" header="Last Login" />
               <Column field="active" header="Active" className="user-lis-active-column" />
            </DataTable>     
         </div>
      );
   }
};

const mapStateToProps = state => {
   return {
      users: state.users
   };
};

const routedUsers = withRouter(Users);

export default connect(mapStateToProps, {updateUser})(routedUsers);