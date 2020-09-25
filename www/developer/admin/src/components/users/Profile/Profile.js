import React, {useState} from 'react';
import isEqual from 'react-fast-compare';
import {validate} from 'validate.js';
import {Button} from 'primereact/button';
import ProfileRenderer from './profileRenderer';
/*
 * We are going to need some sort of validation and requirements of fields 
 */
import './Profile.css';
export default ({user, updateUser, saveUser}) => {
   let [stateUser, updateStateUser] = useState(user);
   let [dirty, setDirty] = useState(false);
      
   let updateField = (fieldName, fieldValue) => {
      let modifiedUser = { ...stateUser, ...{[fieldName]: fieldValue} };
      let modified = !isEqual(user, modifiedUser);
      setDirty(modified);
      updateStateUser(modifiedUser);
   };
   
   let updateAppSessionUser = () => {
      saveUser(stateUser);
      updateUser(stateUser);
      setDirty(false);      

   };
            
   let emailValidator = email => {
      let constraints = { from: { email: true  } };
      let valid = validate({from: email}, constraints);
      if ( typeof valid !== 'undefined' ){
         return { error: true, data: email, message: valid.from };          
      }else{
         return { error: false, data: email, message: null };
      }
      
   }; 
         
   return (
      <div>
         <ProfileRenderer user={stateUser} updateField={updateField} />
         {dirty && <Button id="allium-save-profile" label="Save" onClick={e => updateAppSessionUser()} />}
      </div>
   );

};
