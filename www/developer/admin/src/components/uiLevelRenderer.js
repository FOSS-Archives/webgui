import React from 'react';
import {connect} from 'react-redux';
import EditableField from './EditableField';

const UILevelRenderer = ({object, fieldName, fieldLabel, updateFieldState, preferences}) => {
   const data = preferences.uilevels.map( level => {
      let key = Object.keys(level)[0];
      let label = level[key];
      return { value: key, label: label };
   });

   return (
      <EditableField object={object} fieldName={fieldName} fieldLabel={fieldLabel} updateFieldState={updateFieldState} 
         fieldType="Dropdown" fieldTypeData={data} fieldTypeSwitch={true} />
   );
      
};

const mapStateToProps = state => {
   return {
      preferences: state.preferences
   };
};

export default connect(mapStateToProps)(UILevelRenderer);
