import React, {useContext} from 'react';
import {Inplace, InplaceDisplay, InplaceContent} from 'primereact/inplace';
import {Message} from 'primereact/message';
import SubFieldComponent from './editableFieldSelectedRenderer';
import FieldContext from '../contexts/fields';

import './EditableField.css';
export default props => {
   const context = useContext(FieldContext);
   
   /*
    * We need a way to render the actual label of a drop down box or other field when 
    * using subcomponents that have values different than the "displayable" value
    */
   let visualFieldData = props.fieldData;
   if (props.fieldTypeSwitch != null && props.fieldTypeData != null){
      props.fieldTypeData.forEach( current => {
         if (current.value === props.fieldData){
            visualFieldData = current.label;
         }
      });
   }
   
   return (
      <div className={context.parent}>
         <div className={context.label}>
            {props.valid ? props.fieldLabel : <Message severity="error" text={props.fieldLabel} />}
         </div>
         <Inplace closable className={context.value}>
            <InplaceDisplay className="p-invalid">
               {visualFieldData || 'Click to Edit'}
            </InplaceDisplay>
            <InplaceContent>
               <SubFieldComponent {...props} />
            </InplaceContent>
         </Inplace>
      </div>
   );
};
