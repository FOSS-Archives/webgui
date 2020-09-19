import React from 'react';
import EditableField from '../../EditableField';

import './Personal.css';
export default ({user, updateField}) => {
   
   return (
      <div>
         <EditableField object={user} fieldName="gender" fieldLabel="Gender:" updateFieldState={updateField} />  
         <EditableField object={user} fieldName="pronoun" fieldLabel="Pronoun:" updateFieldState={updateField} />          
         <EditableField object={user} fieldName="birthdate" fieldLabel="Birth Date:" updateFieldState={updateField} />  
      </div>           
   );   
   
};
