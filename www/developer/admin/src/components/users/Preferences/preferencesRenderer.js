import React from 'react';
import {Fieldset} from "primereact/fieldset";
import UI from './UI';

export default ({user}) => {
   return (
      <div>
         <Fieldset legend="Authentication">
      
         </Fieldset>         

         <Fieldset legend="Miscellaneous Information">
            <UI {...user} />
         </Fieldset>        
      </div>
   );
};
