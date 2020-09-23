import React from 'react';
import EditableField from '../../EditableField';

export default ({user, updateFieldState}) => {
   const data = [
      {value: 'he',   label: 'He'},
      {value: 'her', label: 'Her'},
      {value: 'they',  label: 'They'},
      {value: 'unspecified',  label: 'Unspecified'}      
   ];
    
   return (
      <EditableField object={user} fieldName="pronoun" fieldLabel="pronoun:" updateFieldState={updateFieldState} fieldType="Dropdown" fieldTypeData={data} />
   );
      
}