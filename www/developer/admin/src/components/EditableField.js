import React, {useState} from 'react';
import EditableFieldRenderer from './editableFieldRenderer';

export default ({object, fieldName, fieldLabel, updateFieldState, fieldType, fieldTypeData, validator}) => {
   let [objectField, setObjectField] = useState(object[fieldName]);
   let [valid,setValid] = useState(true);

   let saveFieldValue = fieldValue => {
      let finalFieldValue = null;
      if ( fieldValue != null ){
         // Date fields need to be set according to global settings
         finalFieldValue = ( typeof fieldValue === 'object' ) ? fieldValue.toString() : fieldValue;
        
      }
      
      if ( sanitize != null ){
         let fieldEvaluation = sanitize(fieldValue);
         finalFieldValue = fieldEvaluation.data;     
      }      
      setObjectField(finalFieldValue);
      updateFieldState(fieldName, finalFieldValue);
      
   };
   
   const sanitize = fieldValue => {
      if (validator != null ){
         // You have to make sure your validator returns an object of type: { error: [true|false], data: [field value] }
         let sanitizedField = validator(fieldValue);
         setValid( !sanitizedField.error );
         return sanitizedField;
         
      }else{
         return { error: false, data: fieldValue };
         
      }
      
   };
   
   return (
      <EditableFieldRenderer 
         fieldName={fieldName} 
         fieldData={objectField} 
         fieldLabel={fieldLabel}
         fieldType={fieldType} 
         fieldTypeData={fieldTypeData} 
         saveFieldValue={saveFieldValue} 
         valid={valid} />
   );
};
