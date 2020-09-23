import React from 'react';
import EditableField from '../../EditableField';
import GenderRenderer from './genderRenderer';
import PronounRenderer from './pronounRenderer';

import './Personal.css';
export default ({user, updateField}) => {
      
   return (
      <div>
         <GenderRenderer user={user} updateFieldState={updateField} />  
         <PronounRenderer user={user} updateFieldState={updateField} />          
         <EditableField object={user} fieldName="birthdate" fieldLabel="Birth Date:" updateFieldState={updateField} fieldType="Calendar" />  
      </div>           
   );   
   
};
