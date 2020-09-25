import React, {useState} from 'react';
import isEqual from 'react-fast-compare';
import PreferencesRenderer from './preferencesRenderer';
import {Button} from 'primereact/button';

export default ({user, updateUser, saveUser}) => {
   const [dirty, setDirty] = useState(false);
   const [stateUser, updateStateUser] = useState(user);
   
   const updateField = (fieldName, fieldValue) => {
      let modifiedUser = { ...stateUser, ...{[fieldName]: fieldValue} };
      let modified = !isEqual(user, modifiedUser);
      updateStateUser(modifiedUser);
      setDirty(modified);
   };
   
   const updateAppSessionUser = () => {
      saveUser(stateUser);
      updateUser(stateUser);
      setDirty(false);
   };   
   
   return (
      <div>
         <PreferencesRenderer user={stateUser} updateField={updateField}  />
         {dirty && <Button label="Save" onClick={e => updateAppSessionUser()} />}
      </div>
   );
};
