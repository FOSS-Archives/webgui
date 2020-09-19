import React from 'react';
import { Inplace, InplaceDisplay, InplaceContent } from 'primereact/inplace';
import { InputText } from 'primereact/inputtext';

export default ({user, updateField}) => {
   return (
      <div className="p-grid allium-editable-field">
         <div className="p-col-1 p-md-1 p-lg-1 font-weight-bold text-right text-nowrap">Avatar:</div>         
         <Inplace closable className="p-col-11 p-md-11 p-lg-5">
            <InplaceDisplay>
               {user.avatar || 'Click to Edit'}
            </InplaceDisplay>
            <InplaceContent>
               <InputText value={user.avatar} onChange={(e) => updateField('avatar', e.target.value)} autoFocus />
            </InplaceContent>
         </Inplace>    
      </div>
   );
};