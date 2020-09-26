import React, {useState} from 'react';
import isEqual from 'react-fast-compare';
import {Button} from "primereact/button";
import {Fieldset} from "primereact/fieldset";
import UILevelRenderer from '../../uiLevelRenderer';

import './UI.css';
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
         <UILevelRenderer object={user} fieldName="uilevel" fieldLabel="UI Level:" updateFieldState={updateField} />
         <Fieldset legend="Authentication">
            
         </Fieldset>
         {dirty && <Button label="Save" onClick={e => updateAppSessionUser()} />}
      </div>
   );
};
