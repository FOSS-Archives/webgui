import React from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Button} from 'primereact/button';
import {Dialog} from 'primereact/dialog';

import './Sessions.css';
export default ({sessions, displayDeleteDialog, onClick, onHide, handleDelete}) => {
   let actionTemplate = (rowData, column) => {
      return (
         <div>
            <Button label="Delete" className="p-button-danger" onClick={e => onClick(rowData)} />
         </div>
      );
   };
      
   let renderFooter = () => {
      return (
         <div>
            <Button label="Yes" icon="pi pi-check" onClick={e => handleDelete()} />
            <Button label="No" icon="pi pi-times" onClick={e => onHide()} className="p-button-secondary"/>
         </div>
      );
   };
      
   return (
      <div className="allium-session-list">
          <Dialog header="Delete Session" visible={displayDeleteDialog} style={{width: '50vw'}} onHide={e => onHide()} footer={renderFooter()}>
             <p>Are you sure you want to delete this session?</p>
          </Dialog>

         <DataTable value={sessions} header="Sessions">
            <Column field="id" header="ID" />                 
            <Column field="username" header="Username" />
            <Column field="created" header="Created" />
            <Column field="last_view" header="Last View" />
            <Column field="expires" header="Expires" />
            <Column field="ip" header="Source IP" />
            <Column header="Kill Session" body={actionTemplate} style={{textAlign:'center', width: '8em'}} />
         </DataTable>     
      </div>
   );
};
