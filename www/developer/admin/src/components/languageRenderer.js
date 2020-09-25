import React from 'react';
import {connect} from 'react-redux';
import EditableField from './EditableField';

const languageRenderer = ({object, fieldName, fieldLabel, updateFieldState, preferences}) => {
   const data = preferences.language.map( language => {
      return { value: language, label: language };
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

export default connect(mapStateToProps)(languageRenderer);
