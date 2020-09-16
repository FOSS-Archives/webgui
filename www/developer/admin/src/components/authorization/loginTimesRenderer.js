import React from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import './LoginTimes.css';
export default ({ logins }) => {
   return (
      <div className="login-list">
         <DataTable value={logins} header="Login History">
            <Column field="uid" header="User Id" />         
            <Column field="username" header="Username" style={{textAlign:'center', width:'30%'}} />
            <Column field="created" header="Created" />
            <Column field="last_active" header="Last Active" />
            <Column field="ip" header="IP Address" />
         </DataTable>
      </div>
   );      
};
