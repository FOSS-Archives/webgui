import React, {useState} from 'react';
import {Dropdown} from 'primereact/dropdown';
import {Inplace, InplaceDisplay, InplaceContent} from 'primereact/inplace';
import {InputText} from 'primereact/inputtext';

import './EditableField.css';
export default ({object, fieldName, fieldLabel, updateFieldState, fieldType, fieldTypeData}) => {
   let [objectField, setObjectField] = useState(object[fieldName]);

   let saveFieldValue = fieldValue => {
      setObjectField(fieldValue);
      updateFieldState(fieldName, fieldValue);
   };

   let fieldComponent = null;
   switch (fieldType){
      case 'Dropdown':
         const placeHolder = `Select ${fieldName}`;
         fieldComponent = <Dropdown value={objectField} options={fieldTypeData} onChange={e => saveFieldValue(e.value)} placeholder={placeHolder}/>;
      break;
      
      default: 
         fieldComponent = <InputText value={objectField} onChange={e => saveFieldValue(e.target.value)} autoFocus />;
   }

   return (
      <div className="p-grid allium-editable-field">
         <div className="p-col-2 p-md-2 p-lg-2 font-weight-bold text-nowrap">{fieldLabel}</div>
         <Inplace closable className="p-col-10 p-md-10 p-lg-4">
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
