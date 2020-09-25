import React, {useContext} from 'react';
import {Inplace, InplaceDisplay, InplaceContent} from 'primereact/inplace';
import {Message} from 'primereact/message';
import SubFieldComponent from './editableFieldSelectedRenderer';
import FieldContext from '../contexts/fields';

import './EditableField.css';
export default props => {
   const context = useContext(FieldContext);
   return (
      <div className={context.parent}>
         <div className={context.label}>
            {props.valid ? props.fieldLabel : <Message severity="error" text={props.fieldLabel} />}
         </div>
         <Inplace closable className={context.value}>
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
