import React from 'react';
import EditableField from '../../EditableField';
import EditableStateField from '../../stateRenderer';
import CountriesRendererField from '../../countriesRenderer';
import TimezoneRendererField from '../../tzRenderer';

import './Work.css';
export default ({user, updateField}) => {
   return (        
      <div>
         <EditableField object={user} fieldName="companyname" fieldLabel="Name (Company Name):" updateFieldState={updateField} />  
         <EditableField object={user} fieldName="workdepartment" fieldLabel="Department:" updateFieldState={updateField} />          
         <EditableField object={user} fieldName="workwebsite" fieldLabel="Website:" updateFieldState={updateField} />           
         <EditableField object={user} fieldName="workaddress" fieldLabel="Address:" updateFieldState={updateField} />  
         <EditableField object={user} fieldName="workcity" fieldLabel="City:" updateFieldState={updateField} />          
         <EditableStateField object={user} fieldName="workstate" fieldLabel="State:" updateFieldState={updateField} />  
         <EditableField object={user} fieldName="workzip" fieldLabel="Zip Code:" updateFieldState={updateField} />  
         <CountriesRendererField object={user} fieldName="workcountry" fieldLabel="Country:" updateFieldState={updateField} />  
         <TimezoneRendererField object={user} fieldName="worktimezone" fieldLabel="Timezone:" updateFieldState={updateField} />                  
      </div>
   );   
   
};
