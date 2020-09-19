import React from 'react';
import { Inplace, InplaceDisplay, InplaceContent } from 'primereact/inplace';
import { InputText } from 'primereact/inputtext';

export default ({user, updateField}) => {
   return (
      <div className="p-grid allium-editable-field">
         <div className="p-col-2 p-md-2 p-lg-2 font-weight-bold text-nowrap">Photo:</div>         
         <Inplace closable className="p-col-10 p-md-10 p-lg-4">
            <InplaceDisplay>
               {user.photo || 'Click to Edit'}
            </InplaceDisplay>
            <InplaceContent>
               <InputText value={user.photo} onChange={(e) => updateField('photo', e.target.value)} autoFocus />
            </InplaceContent>
         </Inplace>    
      </div>
   );
};