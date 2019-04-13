import React from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {connect} from 'react-redux';

import './List.css';
const Users = ({users = []}) => {
   return (
      <div className="user-list">
         <DataTable value={users}>
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
};

const mapStateToProps = state => {
   return {
      users: state.users
   };
};

export default connect(mapStateToProps)(Users);