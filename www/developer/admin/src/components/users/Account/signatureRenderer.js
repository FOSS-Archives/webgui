import React from 'react';
import { Inplace, InplaceDisplay, InplaceContent } from 'primereact/inplace';
import { InputText } from 'primereact/inputtext';

export default ({user, updateField}) => {
   return (
      <div className="p-field">          
         <div className="font-weight-bold">Signature:</div>         
         <Inplace closable>
            <InplaceDisplay>
               {user.signature || 'Click to Edit'}
            </InplaceDisplay>
            <InplaceContent>
               <InputText value={user.signature} onChange={(e) => updateField('signature', e.target.value)} autoFocus />
            </InplaceContent>
         </Inplace>    
      </div>
   );
};