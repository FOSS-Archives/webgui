import React from 'react';
import {Fieldset} from "primereact/fieldset";
import Contact from './contactRenderer';

export default props => {
   return (
      <div>
         <Fieldset legend="Contact">
            <Contact {...props}  />
         </Fieldset>        
      </div>
   );
};
