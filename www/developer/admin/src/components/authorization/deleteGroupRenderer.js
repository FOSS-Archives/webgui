import React from 'react';
import {Button} from 'primereact/button';
import {Dialog} from 'primereact/dialog';

export default ({handleDelete, hideDialog, canShowDialog, group}) => {
   let deleteFooter = () => {
      return (
         <div>
            <Button label="Yes" icon="pi pi-check" onClick={handleDelete} />
            <Button label="No" icon="pi pi-times" onClick={hideDialog} className="p-button-secondary"/>
         </div>
      );
   };
     
   return (
      <Dialog header="Delete Groups" visible={canShowDialog} style={{width: '50vw'}} onHide={hideDialog} footer={deleteFooter()}>
         <p>Are you sure you want to delete the group [{group.name}]?</p>
      </Dialog>
   );
};
