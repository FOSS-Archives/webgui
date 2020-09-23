import React, {useState} from 'react';
import {Calendar} from 'primereact/calendar';
import {Dropdown} from 'primereact/dropdown';
import {Inplace, InplaceDisplay, InplaceContent} from 'primereact/inplace';
import {InputText} from 'primereact/inputtext';
import {InputTextarea} from 'primereact/inputtextarea';

import './EditableField.css';
export default ({object, fieldName, fieldLabel, updateFieldState, fieldType, fieldTypeData}) => {
   let [objectField, setObjectField] = useState(object[fieldName]);

   let saveFieldValue = fieldValue => {
      if (fieldType === 'Calendar' && fieldValue != null){
         fieldValue = fieldValue.toString();
      }
      setObjectField(fieldValue);
      updateFieldState(fieldName, fieldValue);
   };

   let fieldComponent = null;
   switch (fieldType){
      case 'Calendar':
         fieldComponent = <Calendar value={objectField} onChange={e => saveFieldValue(e.value)} />;
      break;
      
      case 'Dropdown':
         const placeHolder = `Select ${fieldName}`;
         fieldComponent = <Dropdown value={objectField} options={fieldTypeData} onChange={e => saveFieldValue(e.value)} placeholder={placeHolder}/>;
      break;
      
      case 'InputTextarea':
         fieldComponent = <InputTextarea rows={5} cols={30} value={objectField} onChange={e => saveFieldValue(e.target.value)} autoFocus />;   
      break;
      
      default: 
         fieldComponent = <InputText value={objectField} onChange={e => saveFieldValue(e.target.value)} autoFocus />;
   }

   return (
      <div className="p-grid allium-editable-field">
         <div className="p-col-2 p-md-2 p-lg-2 font-weight-bold text-nowrap">{fieldLabel}</div>
         <Inplace closable className="p-col-10 p-md-10 p-lg-8">
            <InplaceDisplay>
               {object[fieldName] || 'Click to Edit'}
            </InplaceDisplay>
            <InplaceContent>
               {fieldComponent}
            </InplaceContent>
         </Inplace>
      </div>
   );
};
