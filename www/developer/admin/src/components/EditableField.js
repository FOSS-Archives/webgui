import React from 'react';
import { Inplace, InplaceDisplay, InplaceContent } from 'primereact/inplace';
import { InputText } from 'primereact/inputtext';

import './EditableField.css';
export default ({object, fieldName, fieldLabel, updateFieldState}) => {
   return (
      <div className="p-grid allium-editable-field">
         <div className="p-col-1 p-md-6 p-lg-3 font-weight-bold text-right">{fieldLabel}</div>
         <Inplace closable className="p-col-11 p-md-6 p-lg-3">
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
