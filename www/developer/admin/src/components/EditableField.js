import React from 'react';
import { Inplace, InplaceDisplay, InplaceContent } from 'primereact/inplace';
import { InputText } from 'primereact/inputtext';

export default ({object, fieldName, fieldLabel, updateFieldState}) => {
   return (
      <div className="p-grid">          
         <div className="p-col-1 text-right font-weight-bold">{fieldLabel}</div>
         <Inplace closable className="p-col-11">
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