import React, {useState} from 'react';
import EditableFieldRenderer from './editableFieldRenderer';

export default ({object, fieldName, fieldLabel, updateFieldState, fieldType, fieldTypeData, validator}) => {
   let [objectField, setObjectField] = useState(object[fieldName]);
   let [valid,setValid] = useState(true);

   let saveFieldValue = fieldValue => {
      let fieldEvaluation = sanitize(fieldValue);
      if ( !fieldEvaluation.error ){
         setObjectField(fieldValue);
         updateFieldState(fieldName, fieldValue);
      }
   };
   
   const sanitize = fieldValue => {
      if (validator != null ){
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
