import React from 'react';
import {Fieldset} from "primereact/fieldset";
import Contact from './contactRenderer';
import Home from './homeRenderer';
import Personal from './personalRenderer';
import Work from './workRenderer';

import './Profile.css';
export default ({user, updateField}) => {
   return (
      <div>
         <Fieldset legend="Personal">
            <Personal user={user} updateField={updateField} />
         </Fieldset>
         
         <Fieldset legend="Contact">
            <Contact user={user} updateField={updateField} />
         </Fieldset>

         <Fieldset legend="Home">
            <Home user={user}  updateField={updateField} />
         </Fieldset>

         <Fieldset legend="Work">
            <Work user={user} updateField={updateField} />
         </Fieldset>
      </div>
   );
};
