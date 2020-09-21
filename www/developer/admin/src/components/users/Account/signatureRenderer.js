import React, {useState} from 'react';
import {Editor} from 'primereact/editor';
import EditableTextarea from '../../EditableTextarea';

export default ({user, updateFieldState}) => {
   let [signature, setSignature] = useState(user.signature);
   let [editActive, setEditActive] = useState(false);

   let displayControl = <div className="p-col-10 p-md-10 p-lg-8 alium-field-uneditable" dangerouslySetInnerHTML={{ __html: signature }} />;      
   let editableControl = <Editor id="allium-editor" value={signature} onTextChange={e => setSignature(e.htmlValue)} className="card p-col-10 p-md-10 p-lg-8 alium-field-editor" />;
   
   return (
      <div className="p-grid allium-editable-field">          
         <div className="p-col-2 p-md-2 p-lg-2 font-weight-bold text-nowrap">
            Signature: <i className="pi pi-pencil" onClick={() => setEditActive(!editActive)} aria-haspopup aria-controls="overlay_panel"></i>
         </div> 
         {editActive ? editableControl : displayControl}
      </div>           
   );
};