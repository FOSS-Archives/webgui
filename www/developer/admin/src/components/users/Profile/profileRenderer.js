import React, {useState} from 'react';
import {Button} from 'primereact/button';
import {Fieldset} from "primereact/fieldset";
import Contact from './contactRenderer';
import Home from './homeRenderer';
import Personal from './personalRenderer';
import Work from './workRenderer';

import './Profile.css';
export default ({user, index, saveUser}) => {
   let [stateUser, updateUser] = useState(user);
   let [dirty, setDirty] = useState(false);
      
   let updateField = (fieldName, fieldValue) => {
      // Mark the user as dirty so we can display conditonal buttons
      let modified = false;
      Object.keys(stateUser).forEach( key => {
         if (user[key] !== fieldValue){
            modified = true;
         }
      });
      if ( modified ){
         updateUser({ ...stateUser , ...{[fieldName]: fieldValue} });         
      }
      setDirty(modified);
   };
   
   return (
      <div>
        <Fieldset legend="Contact">
           <Contact user={stateUser} updateField={updateField} />
        </Fieldset>

        <Fieldset legend="Home">
           <Home user={stateUser}  updateField={updateField} />
        </Fieldset>
        
        <Fieldset legend="Personal">
           <Personal user={stateUser} updateField={updateField} />
        </Fieldset>
        
        <Fieldset legend="Work">
           <Work user={stateUser} updateField={updateField} />
        </Fieldset>        
        {dirty && <Button label="Save" onClick={e => saveUser(stateUser)} />}
      </div>
   );
};
