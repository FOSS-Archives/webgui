import React, {useContext} from 'react';
import EditableField from '../../EditableField';
import MediaRenderer from './mediaRenderer';
import FieldContext from '../../../contexts/fields';

import './Account.css';
export default ({user, updateField}) => {
   const context = useContext(FieldContext);
   return (
      <div className="p-grid nested-grid">
         <div className="p-col-8">
            <EditableField object={user} fieldName="username" fieldLabel="Username:" updateFieldState={updateField} />
            <EditableField object={user} fieldName="alias" fieldLabel="Alias:" updateFieldState={updateField} />
            <EditableField object={user} fieldName="firstname" fieldLabel="First Name:" updateFieldState={updateField} />              
            <EditableField object={user} fieldName="lastname" fieldLabel="Last Name:" updateFieldState={updateField} />
            <div className={context.parent}>          
               <div className={context.label}>Created:</div> 
               <div className={context.value}>{user.created}</div>
            </div>            
            <div className={context.parent}>          
               <div className={context.label}>Last login:</div> 
               <div className={context.value}>{user.lastlogin}</div>
            </div>
            <pre>
            <EditableField object={user} fieldName="signature" fieldLabel="Signature:" updateFieldState={updateField} fieldType="InputTextarea" />
            </pre>
         </div>
         <div className="p-col-4">
            <div className="box box-stretched">
               <MediaRenderer user={user} />
            </div>
         </div>                 
      </div>
   );
};