import React, {useContext} from 'react';
import {Checkbox} from 'primereact/checkbox';
import LanguageRendererField from '../../languageRenderer';
import FieldContext from '../../../contexts/fields';

import './Contact.css';
export default ({user, updateField}) => {
   const context = useContext(FieldContext);
   
   return (
      <div>
         <LanguageRendererField object={user} fieldName="language" fieldLabel="Language:" updateFieldState={updateField} />
         <div className={context.parent}>
            <div className={context.label}>Are you available to be added as a Friend?:</div>
            <Checkbox className={context.value} checked={user.friendly} onChange={e => updateField("friendly", e.checked)} />
         </div>
         <div className={context.parent}>         
            <div className={context.label}>Date Format:</div>
            <div className={context.value}>{user.dateformat}</div>
         </div>
         <div className={context.parent}>         
            <div className={context.label}>Time Format:</div>
            <div className={context.value}>{user.timeformat}</div>
         </div>
         <div className={context.parent}>         
            <div className={context.label}>Profile Privacy Setting:</div>
            <div className={context.value}>{user.profileprivacy}</div>
         </div>
         <div className={context.parent}>            
            <div className={context.label}>Private Message Options:</div>
            <div className={context.value}>{user.messageoptions}</div>
         </div>
         <div className={context.parent}>            
            <div className={context.label}>Show when online?:</div>
            <Checkbox className={context.value} checked={user.showwhenonline} onChange={e => updateField("showwhenonline", e.checked)} />
         </div>
         <div className={context.parent}>            
            <div className={context.label}>Receive inbox notifications as email?:</div>
            <Checkbox className={context.value} checked={user.notifyemail} onChange={e => updateField("notifyemail", e.checked)} />
         </div>
         <div className={context.parent}>            
            <div className={context.label}>Receive inbox notifications as SMS?:</div>
            <Checkbox className={context.value} checked={user.notifysms} onChange={e => updateField("notifysms", e.checked)} /> 
         </div>
      </div>
   );
   
};