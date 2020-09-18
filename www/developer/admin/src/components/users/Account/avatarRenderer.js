import React from 'react';
import { Inplace, InplaceDisplay, InplaceContent } from 'primereact/inplace';
import { InputText } from 'primereact/inputtext';

export default ({user, updateField}) => {
   return (
      <div className="p-grid">          
         <div className="p-col-1 text-right font-weight-bold">Avatar:</div>         
         <Inplace closable className="p-col-11">
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