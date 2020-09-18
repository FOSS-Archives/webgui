import React from 'react';
import DateCreated from './dateCreatedRenderer';
import LastUpated from './lastUpdatedRenderer';
import EditableField from '../../EditableField';

export default ({user, updateField}) => {
   return (
      <div>
         <EditableField object={user} fieldName="username" fieldLabel="Username:" updateFieldState={updateField} />     
         <EditableField object={user} fieldName="alias" fieldLabel="Alias:" updateFieldState={updateField} />     
         <DateCreated {...user} />
         <LastUpated {...user} />         
         <EditableField object={user} fieldName="firstname" fieldLabel="First Name:" updateFieldState={updateField} />              
         <EditableField object={user} fieldName="lastname" fieldLabel="Last Name:" updateFieldState={updateField} />     
         <EditableField object={user} fieldName="signature" fieldLabel="Signature:" updateFieldState={updateField} />              
         <EditableField object={user} fieldName="photo" fieldLabel="Photo:" updateFieldState={updateField} />     
         <EditableField object={user} fieldName="avatar" fieldLabel="Avatar:" updateFieldState={updateField} />              
      </div>
   );
};