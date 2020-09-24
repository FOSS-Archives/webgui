import React from 'react';
import {connect} from 'react-redux';
import EditableField from './EditableField';

const tzRenderer = ({object, fieldName, fieldLabel, updateFieldState, timezones}) => {
   const data = timezones.map( timezone => {
      return { value: timezone, label: timezone };
   });

   return (
      <EditableField object={object} fieldName={fieldName} fieldLabel={fieldLabel} updateFieldState={updateFieldState} 
         fieldType="Dropdown" fieldTypeData={data} />
   );
      
};

const mapStateToProps = state => {
   return {
      timezones: state.timezones
   };
};

export default connect(mapStateToProps)(tzRenderer);
