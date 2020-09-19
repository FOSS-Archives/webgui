import React from 'react';
import { Inplace, InplaceDisplay, InplaceContent } from 'primereact/inplace';
import { InputText } from 'primereact/inputtext';

import './EditableField.css';
export default ({object, fieldName, fieldLabel, updateFieldState}) => {
   return (
      <div className="p-grid allium-editable-field">
         <div className="p-col-2 p-md-2 p-lg-2 font-weight-bold text-nowrap">{fieldLabel}</div>
         <Inplace closable className="p-col-10 p-md-10 p-lg-4">
            <InplaceDisplay>
               {object[fieldName] || 'Click to Edit'}
            </InplaceDisplay>
            <InplaceContent>
               <InputText value={object[fieldName]} onChange={(e) => updateFieldState(fieldName, e.target.value)} autoFocus />
            </InplaceContent>
         </Inplace>
      </div>
   );
};
