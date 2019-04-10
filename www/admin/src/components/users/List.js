import React from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {connect} from 'react-redux';
import {epocToFormatDate} from '../../util/date/';

import './List.css';
const Users = props => {
   let users = null;
   if ( props.users && props.users.length > 0 ){
      users = props.users.map( user => {
         user.created   = epocToFormatDate(user.created);
         user.expires   = user.expires ? epocToFormatDate(user.expires) : '';
         user.lastlogin = user.lastlogin ? epocToFormatDate(user.lastlogin) : '';
         user.active = user.active === '1' ? 'true' : 'false';
         return user;      
      });
   }

   return (
      <div className="user-list">
         <DataTable value={users}>
             <Column field="username" header="Username" />
             <Column field="avatar" header="Avarar" />
             <Column field="email" header="Email" />
             <Column field="firstname" header="First Name" />
             <Column field="lastname" header="Last Name" />
             <Column field="created" header="Created" />
             <Column field="expires" header="Expires" />
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