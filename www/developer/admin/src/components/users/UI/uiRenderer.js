import React from 'react';
import {Fieldset} from "primereact/fieldset";

import './UI.css';
export default user => {
   return (
      <div className="p-grid">      
         <div className="p-col-3 text-right font-weight-bold">UI Level:</div>
         <div className="p-col-9">{user.uilevel}</div>
      
      
      
         <Fieldset legend="Authentication">
            
         </Fieldset>        
      </div>
   );
};
