import React from 'react';
import { Inplace, InplaceDisplay, InplaceContent } from 'primereact/inplace';
import { InputText } from 'primereact/inputtext';

export default ({user, updateField}) => {
   return (
      <div className="p-grid allium-editable-field">
         <div className="p-col-1 p-md-1 p-lg-1 font-weight-bold text-right text-nowrap">Photo:</div>         
         <Inplace closable className="p-col-11 p-md-11 p-lg-5">
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