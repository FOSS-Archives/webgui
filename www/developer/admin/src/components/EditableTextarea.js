import React, {useState} from 'react';
import {Inplace, InplaceDisplay, InplaceContent} from 'primereact/inplace';
import {InputTextarea} from 'primereact/inputtextarea';

export default ({object, fieldName, fieldLabel, updateFieldState}) => {
   let [objectField, setObjectField] = useState(object[fieldName]);

   let saveFieldValue = fieldValue => {
      setObjectField(fieldValue);
      updateFieldState(fieldName, fieldValue);
   };

   return (
      <div className="p-grid allium-editable-field">          
         <div className="p-col-2 p-md-2 p-lg-2 font-weight-bold text-nowrap">Signature:</div> 
         <Inplace closable className="p-col-10 p-md-10 p-lg-8">
            <InplaceDisplay>
               {objectField || 'Click to Edit'}
            </InplaceDisplay>
            <InplaceContent>
               <InputTextarea rows={5} cols={30} value={objectField} onChange={e => saveFieldValue(e.target.value)} autoFocus />
            </InplaceContent>
         </Inplace>
      </div>
   );
};