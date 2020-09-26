import React from 'react';
import {Button} from 'primereact/button';
import {Dialog} from 'primereact/dialog';
import {FileUpload} from 'primereact/fileupload';

export default ({accept, maxFileSize, uploadEndpoint, onHide, onUpload, visible}) => {

   const uploadTemplate = () => {
      return (<p className="p-m-0">Drag and drop files to here to upload.</p>);
   };
   
   const renderFooter = (name) => {
      return (
         <div>
            <Button label="No" icon="pi pi-times" onClick={() => onHide(name)} className="p-button-text" />
            <Button label="Yes" icon="pi pi-check" onClick={() => onHide(name)} autoFocus />
         </div>
      );
   };

   return (
      <Dialog header="File Manager" visible={visible} style={{ width: '50vw' }} footer={renderFooter('displayBasic')} onHide={() => onHide('displayBasic')}>
         <FileUpload url={uploadEndpoint} onUpload={onUpload} multiple accept={accept} maxFileSize={maxFileSize} emptyTemplate={uploadTemplate()} />
       </Dialog>
   );
   
};