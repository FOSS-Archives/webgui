import React from 'react';
import { Inplace, InplaceDisplay, InplaceContent } from 'primereact/inplace';
import { InputText } from 'primereact/inputtext';

export default ({user, updateField}) => {
   return (
      <div className="p-grid">          
         <div className="p-col-1 text-right font-weight-bold">Username:</div>         
         <Inplace closable className="p-col-11">
            <InplaceDisplay>
               {user.username || 'Click to Edit'}
            </InplaceDisplay>
            <InplaceContent>
               <InputText value={user.username} onChange={(e) => updateField('username', e.target.value)} autoFocus />
            </InplaceContent>
         </Inplace>    
      </div>
   );
};