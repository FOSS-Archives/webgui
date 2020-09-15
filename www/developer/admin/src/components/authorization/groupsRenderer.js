import React from 'react';
import {DataTable} from 'primereact/datatable';
import {Button} from 'primereact/button';
import {Column} from 'primereact/column';
import AddGroup from './AddGroup';
import DeleteGroup from './DeleteGroup';
import EditGroup from './EditGroup';
import './Groups.css';
export default ({
      groups, group={},
      
      hideAddDialog,
      isAddVisible,
      showAddDialog,
      handleAdd,
         
      hideDeleteDialog,
      isDeleteVisible,         
      showDeleteDialog,         
      handleDelete,
         
      hideEditDialog,
      isEditVisible,
      showEditDialog,
      handleEdit
   }) => {

   let deleteTemplate = (rowData, column) => {
      return <Button label="Delete" onClick={e => showDeleteDialog(rowData)} className="p-button-danger" />;
   };
      
   let editTemplate = (rowData, column) => {
      return <Button label={rowData.id.toString()} onClick={e => showEditDialog(rowData)} tooltip="Edit" className="p-button-secondary p-button-text" />;
   };
      
   return (
      <div className="session-list">
         <Button label="Add" className="p-button-success" onClick={showAddDialog} />
         <DataTable value={groups} header="Groups">
            <Column field="id" header="ID" body={editTemplate} style={{width:'10%', textAlign:'right'}} />
            <Column field="name" header="Group" />
            <Column field="description" header="Description" />               
            <Column header="Delete" body={deleteTemplate} style={{textAlign:'center', width: '8em'}} />
         </DataTable>
         
         <AddGroup canShowDialog={isAddVisible} hideDialog={hideAddDialog} groups={groups} handleAdd={handleAdd} />
         <DeleteGroup canShowDialog={isDeleteVisible} hideDialog={hideDeleteDialog} group={group} groups={groups} handleDelete={handleDelete} />
         <EditGroup canShowDialog={isEditVisible} hideDialog={hideEditDialog} group={group} groups={groups} handleEdit={handleEdit} />
      </div>
   );      
}