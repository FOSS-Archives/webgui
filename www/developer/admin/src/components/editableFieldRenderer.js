import React from 'react';
import {Inplace, InplaceDisplay, InplaceContent} from 'primereact/inplace';
import {Message} from 'primereact/message';
import SubFieldComponent from './editableFieldSelectedRenderer';

import './EditableField.css';
export default props => {
   return (
      <div className="p-grid allium-editable-field">
         <div className="p-col-2 p-md-2 p-lg-2 font-weight-bold text-nowrap">
            {props.valid ? props.fieldLabel : <Message severity="error" text={props.fieldLabel} />}
         </div>
         <Inplace closable className="p-col-10 p-md-10 p-lg-8">
            <InplaceDisplay className="p-invalid">
               {props.fieldData || 'Click to Edit'}
            </InplaceDisplay>
            <InplaceContent>
               <SubFieldComponent {...props} />
            </InplaceContent>
         </Inplace>
      </div>
   );
};
