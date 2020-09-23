import React from 'react';
import EditableField from '../../EditableField';

import './Contact.css';
export default ({user, updateField}) => {

   return (
      <div>
         <EditableField object={user} fieldName="email" fieldLabel="Email:" updateFieldState={updateField} />
         <EditableField object={user} fieldName="cell" fieldLabel="Cell:" updateFieldState={updateField} />  
         <EditableField object={user} fieldName="homephone" fieldLabel="Home Phone:" updateFieldState={updateField} />  
         <EditableField object={user} fieldName="workphone" fieldLabel="Work Phone:" updateFieldState={updateField} />           
      </div>
   );   
   
};
