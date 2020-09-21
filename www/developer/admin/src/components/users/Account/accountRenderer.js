import React from 'react';
import EditableField from '../../EditableField';
import EditableTextarea from './../../EditableTextarea';
import DateCreated from './dateCreatedRenderer';
import LastUpated from './lastUpdatedRenderer';
import MediaRenderer from './mediaRenderer';

import './Account.css';
export default ({user, updateField}) => {
   return (
      <div className="p-grid nested-grid">
         <div className="p-col-8">
            <EditableField object={user} fieldName="username" fieldLabel="Username:" updateFieldState={updateField} />     
            <EditableField object={user} fieldName="alias" fieldLabel="Alias:" updateFieldState={updateField} />     
            <DateCreated {...user} />
            <LastUpated {...user} />         
            <EditableField object={user} fieldName="firstname" fieldLabel="First Name:" updateFieldState={updateField} />              
            <EditableField object={user} fieldName="lastname" fieldLabel="Last Name:" updateFieldState={updateField} />
            <EditableTextarea object={user} fieldName="signature" fieldLabel="Signature:" updateFieldState={updateField} />
         </div>
         <div className="p-col-4">
            <div className="box box-stretched">
               <MediaRenderer user={user} />
            </div>
         </div>                 
      </div>
   );
};