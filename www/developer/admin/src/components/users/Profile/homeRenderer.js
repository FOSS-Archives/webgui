import React from 'react';
import EditableField from '../../EditableField';
import EditableStateField from '../../stateRenderer';

import './Home.css';
export default ({user, updateField}) => {
   return (
      <div>
         <EditableField object={user} fieldName="homeaddress" fieldLabel="Address:" updateFieldState={updateField} />  
         <EditableField object={user} fieldName="homecity" fieldLabel="City:" updateFieldState={updateField} />          
         <EditableStateField object={user} fieldName="homestate" fieldLabel="State:" updateFieldState={updateField} />  
         <EditableField object={user} fieldName="homezip" fieldLabel="Zip Code:" updateFieldState={updateField} />          
         <EditableField object={user} fieldName="homecountry" fieldLabel="Country:" updateFieldState={updateField} />  
         <EditableField object={user} fieldName="hometimezone" fieldLabel="Timezone:" updateFieldState={updateField} /> 
      </div>
   );   
   
};
