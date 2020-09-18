import React from 'react';
import { Inplace, InplaceDisplay, InplaceContent } from 'primereact/inplace';
import { InputText } from 'primereact/inputtext';

export default ({user, updateField}) => {
   return (
      <div className="p-grid">          
         <div className="p-col-1 text-right font-weight-bold">First Name:</div>         
         <Inplace closable className="p-col-11">
            <InplaceDisplay>
               {user.firstname || 'Click to Edit'}
            </InplaceDisplay>
            <InplaceContent>
               <InputText value={user.firstname} onChange={(e) => updateField('firstname', e.target.value)} autoFocus />
            </InplaceContent>
         </Inplace>    
      </div>
   );
};