import React, {useState} from 'react';
import {Button} from 'primereact/button';
import {Fieldset} from "primereact/fieldset";
import Contact from './contactRenderer';
import Home from './homeRenderer';
import Personal from './personalRenderer';
import Work from './workRenderer';

import './Profile.css';
export default ({user, index, saveUser}) => {
   let [updatableUser, updateUser] = useState(user);
   let [dirty, setDirty] = useState(false);
      
   let updateField = (fieldName, fieldValue) => {     
      // Mark the user as dirty so we can display conditonal buttons
      let userModified = false;
      Object.keys(updatableUser).forEach( key => {
         if (user[key] !== fieldValue){
            userModified = true;
         }
      });
      if (userModified){      
         let updatedUser = { ...updatableUser, ...{[fieldName]: fieldValue} };
         updateUser(updatedUser);
         setDirty(true);         
         
      }else{
         setDirty(false);
         
      }
   };
   
   return (
      <div>
        <Fieldset legend="Contact">
           <Contact user={updatableUser} updateField={updateField} />
        </Fieldset>

        <Fieldset legend="Home">
           <Home user={updatableUser}  updateField={updateField} />
        </Fieldset>
        
        <Fieldset legend="Personal">
           <Personal user={updatableUser} updateField={updateField} />
        </Fieldset>
        
        <Fieldset legend="Work">
           <Work user={updatableUser} updateField={updateField} />
        </Fieldset>        
        {dirty && <Button label="Save" onClick={e => saveUser(updatableUser)} />}
      </div>
   );
};
