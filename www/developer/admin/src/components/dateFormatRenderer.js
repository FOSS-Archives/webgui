import React from 'react';
import {connect} from 'react-redux';
import EditableField from './EditableField';

const dateFormatRenderer = ({object, fieldName, fieldLabel, updateFieldState, preferences}) => {
   const data = preferences.dateformats.map( dateformat => {
      return { value: dateformat, label: dateformat };
   });

   return (
      <EditableField object={object} fieldName={fieldName} fieldLabel={fieldLabel} updateFieldState={updateFieldState} 
         fieldType="Dropdown" fieldTypeData={data} />
   );
      
};

const mapStateToProps = state => {
   return {
      preferences: state.preferences
   };
};

export default connect(mapStateToProps)(dateFormatRenderer);
