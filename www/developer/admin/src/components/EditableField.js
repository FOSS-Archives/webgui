import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Inplace, InplaceDisplay, InplaceContent } from 'primereact/inplace';
import { InputText } from 'primereact/inputtext';

class EditableField extends Component{
   render(){
      let {object, fieldName, fieldLabel, updateFieldState} = this.props;
       
      return (
         <div className="p-grid">          
            <div className="p-col-1 text-right font-weight-bold">{fieldLabel}</div>
            <Inplace closable className="p-col-11">
               <InplaceDisplay>
                  {object[fieldName] || 'Click to Edit'}
               </InplaceDisplay>
               <InplaceContent>
                  <InputText value={object[fieldName]} onChange={(e) => updateFieldState(fieldName, e.target.value)} autoFocus />
               </InplaceContent>
            </Inplace>    
         </div>
      );
   }
};

EditableField.propTypes = {
   object: PropTypes.object.isRequired,
   fieldName: PropTypes.string.isRequired,
   fieldLabel: PropTypes.string.isRequired,
   updateFieldState: PropTypes.func
};

export default EditableField;