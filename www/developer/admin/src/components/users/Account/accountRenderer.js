import React from 'react';
import AvatarRenderer from './avatarRenderer';
import DateCreated from './dateCreatedRenderer';
import LastUpated from './lastUpdatedRenderer';
import PhotoRenderer from './photoRenderer';
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
         <PhotoRenderer user={user} updateFieldState={updateField} />     
         <AvatarRenderer user={user} updateFieldState={updateField} />              
      </div>
   );
};