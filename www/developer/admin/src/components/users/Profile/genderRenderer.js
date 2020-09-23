import React from 'react';
import EditableField from '../../EditableField';

export default ({user, updateFieldState}) => {
   const genders = [
      {value: 'male',   label: 'Male'},
      {value: 'female', label: 'Female'},
      {value: 'other',  label: 'Other'},
      {value: 'unspecified',  label: 'Unspecified'}      
   ];
    
   return (
      <EditableField object={user} fieldName="gender" fieldLabel="Gender:" updateFieldState={updateFieldState} fieldType="Dropdown" fieldTypeData={genders} />
   );
      
}