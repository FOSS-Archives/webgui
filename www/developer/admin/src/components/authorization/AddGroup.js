import React from 'react';
import {Button} from 'primereact/button';
import {Dialog} from 'primereact/dialog';

import './AddGroup.css';
export default props => {   
   let handleAdd = () => {
      alert("Will implement add");
      props.hide();
   };

   let renderFooter = () => {
      return (
         <div>
            <Button label="Yes" icon="pi pi-check" onClick={handleAdd} />
            <Button label="No" icon="pi pi-times" onClick={props.hide} className="p-button-secondary"/>
         </div>
      );
   };
   
   return (
      <div className="session-list">
         <Dialog header="Delete Groups" visible={props.display} style={{width: '50vw'}} onHide={props.hide} footer={renderFooter()}>
            <p>Adding new group</p>
         </Dialog>
      </div>
   );
};