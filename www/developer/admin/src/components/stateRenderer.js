import React from 'react';
import {connect} from 'react-redux';
import EditableField from './EditableField';

const stateRenderer = ({object, fieldName, fieldLabel, updateFieldState, states}) => {
   const data = states.map( state => {
      return { value: state, label: state };
   });

   return (
      <EditableField object={object} fieldName={fieldName} fieldLabel={fieldLabel} updateFieldState={updateFieldState} 
         fieldType="Dropdown" fieldTypeData={data} />
   );
      
};

const mapStateToProps = state => {
   return {
      states: state.states
   };
};

export default connect(mapStateToProps)(stateRenderer);
