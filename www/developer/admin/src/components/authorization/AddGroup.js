import React from 'react';
import {Button} from 'primereact/button';
import {Dialog} from 'primereact/dialog';

import './AddGroup.css';
export default props => {   
   let handleAdd = () => {
      alert("Will implement add");
      props.hideDialog();
   };

   let renderFooter = () => {
      return (
         <div>
            <Button label="Yes" icon="pi pi-check" onClick={handleAdd} />
            <Button label="No" icon="pi pi-times" onClick={props.hideDialog} className="p-button-secondary"/>
         </div>
      );
   };
   
   return (
      <div className="session-list">
         <Dialog header="Delete Groups" visible={props.canShowDialog} style={{width: '50vw'}} onHide={props.hideDialog} footer={renderFooter()}>
            <p>Adding new group</p>
         </Dialog>
      </div>
   );
};