import React from 'react';
import {Calendar} from 'primereact/calendar';
import {Dropdown} from 'primereact/dropdown';
import {InputTextarea} from 'primereact/inputtextarea';
import {InputText} from 'primereact/inputtext';

import './EditableField.css';
export default ({fieldName, fieldData, fieldType, fieldTypeData, saveFieldValue}) => {
   let specifiedComponent = null;
   switch (fieldType){
      case 'Calendar':
         specifiedComponent = <Calendar value={fieldData} onChange={e => saveFieldValue(e.value)} monthNavigator yearNavigator yearRange="1900:2090" />;
      break;
      
      case 'Dropdown':
         const placeHolder = `Select ${fieldName}`;
         specifiedComponent = <Dropdown value={fieldData} options={fieldTypeData} onChange={e => saveFieldValue(e.value)} placeholder={placeHolder}/>;
      break;
      
      case 'InputTextarea':
         specifiedComponent = <InputTextarea value={fieldData} rows={5} cols={30} onChange={e => saveFieldValue(e.target.value)} autoFocus />;   
      break;
      
      default: 
         specifiedComponent = <InputText value={fieldData} onChange={e => saveFieldValue(e.target.value)} autoFocus />;
   }
   
   return specifiedComponent;
};
