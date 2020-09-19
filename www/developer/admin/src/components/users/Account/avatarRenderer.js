import React from 'react';
import { Inplace, InplaceDisplay, InplaceContent } from 'primereact/inplace';
import { InputText } from 'primereact/inputtext';

export default ({user, updateField}) => {
   return (
      <div className="p-grid allium-editable-field">
         <div className="p-col-1 p-md-6 p-lg-3 font-weight-bold text-right">Avatar:</div>         
         <Inplace closable>
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