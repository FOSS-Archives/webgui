import React, {useState} from 'react';
import isEqual from 'react-fast-compare';
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
      let modifiedUser = { ...stateUser, ...{[fieldName]: fieldValue} };
      let modified = !isEqual(user, modifiedUser);
      setDirty(modified);
      updateUser(modifiedUser);
   };
   
   let updateAppSessionUser = () => {
      setDirty(false);      
      saveUser(stateUser);
   };
      
   return (
      <div>
         <Fieldset legend="Personal">
            <Personal user={stateUser} updateField={updateField} />
         </Fieldset>
         
         <Fieldset legend="Contact">
            <Contact user={stateUser} updateField={updateField} />
         </Fieldset>

         <Fieldset legend="Home">
            <Home user={stateUser}  updateField={updateField} />
         </Fieldset>

         <Fieldset legend="Work">
            <Work user={stateUser} updateField={updateField} />
         </Fieldset>
         {dirty && <Button id="allium-save-profile" label="Save" onClick={e => updateAppSessionUser()} />}
      </div>
   );
};
